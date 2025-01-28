import { TestData } from "@/components/modal/Onbording/steps/index";
import axios from "axios";
import Cookies from "js-cookie";
import assignProfileFinance from "@/lib/testOnbording";
import { useFinancialProfileStore } from "@/store/user/userFinanceProfile";

const URL = process.env.NEXT_PUBLIC_API_URL;

async function sendProfileFinance(test: TestData): Promise<void> {
  const userLogged = JSON.parse(Cookies.get("userLogged") || "{}");
  const userId = userLogged.userId;

  const riskProfile = assignProfileFinance(test);
  const income = test.income
  const expenses = test.expenses
  const savings = test.savings

  const updateStore = useFinancialProfileStore.getState().setFinancialProfile;

  try {
    const response = await axios.post(`${URL}/onboarding`, {
      userId,
      riskProfile,
      incomeMonthly:income ,
      expensesMonthly:expenses,
      percentageSave: savings,
    });

    const profileData = response.data;
    
    updateStore(profileData);

    return profileData;

  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 500) {
      const financialData = useFinancialProfileStore.getState().financialProfile;

      if (!financialData) {
        console.error("No se encontró el perfil financiero en el store.");
        return;
      }

      const updatedProfile = {
        knowledgeLevel: financialData.knowledgeLevel || "",
        riskProfile,
        incomeMonthly: income ,
        expensesMonthly: expenses ,
        percentageSave: savings ,
        totalDebt: financialData.totalDebt ?? 0.1,
        savingsTotal: financialData.savingsTotal ?? 0.1,
        patrimonyTotal: financialData.patrimonyTotal ?? 0.1,
        userId,
      };


      try {
        const response = await axios.patch(
          `${URL}/financing-profile/${financialData.id}`,
          updatedProfile,
          {
            headers: {
              "Content-Type": "application/json",
              accept: "*/*",
            },
          }
        );

        const profileData = response.data;

        updateStore(profileData);

        return profileData;
      } catch (retryError) {
        console.error("Error al hacer el PATCH:", retryError);
      }
    } else {
      console.error("Error al hacer el POST:", error);
    }
  }
}



async function skipProfileFinance(): Promise<void> {
  const userLogged = JSON.parse(Cookies.get("userLogged") || "{}");
  const userId = userLogged.userId;

  const income = 0
  const expenses = 0
  const savings = 0
  
  try {
    const riskProfile = "SKIP";

    const response = await axios.post(`${URL}/onboarding`, {
      userId,
      riskProfile,
      incomeMonthly:income ,
      expensesMonthly:expenses,
      percentageSave: savings,
    });

    const profileData = response.data;

    useFinancialProfileStore.setState({ financialProfile: profileData });

    return profileData;
  } catch (error) {

    if (error) {
      const financialData = useFinancialProfileStore.getState().financialProfile;

      if (financialData) {
        const updatedProfile = {
          knowledgeLevel: financialData.knowledgeLevel || "SKIP",
          riskProfile:  financialData.knowledgeLevel || "SKIP",
          incomeMonthly: financialData.incomeMonthly ?? 0.1,
          expensesMonthly: financialData.expensesMonthly ?? 0.1,
          percentageSave: financialData.percentageSave ?? 0.1,
          totalDebt: financialData.totalDebt ?? 0.1,
          savingsTotal: financialData.savingsTotal ?? 0.1,
          patrimonyTotal: financialData.patrimonyTotal ?? 0.1,
          userId: userId,
        };


        try {

          const patchResponse = await axios.patch(
            `${URL}/financing-profile/${financialData.id}`,
            updatedProfile,
            {
              headers: {
                "Content-Type": "application/json",
                accept: "*/*",
              },
            }
          );

          const updatedData = patchResponse.data;

          useFinancialProfileStore.setState({ financialProfile: updatedData });

          return updatedData;
        } catch (patchError) {
          console.error("Error al actualizar el perfil financiero:", patchError);
        }
      } else {
        console.error("No se encontró un perfil financiero previo en el store.");
      }
    } else {
      console.error("Hubo un error al enviar el perfil al backend:", error);
    }
  }
}
export {
    sendProfileFinance,
    skipProfileFinance
}