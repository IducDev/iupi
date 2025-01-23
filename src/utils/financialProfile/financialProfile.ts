import { TestData } from "@/components/modal/Onbording/steps/index";
import axios from "axios";
const URL = process.env.NEXT_PUBLIC_API_URL;
import { useFinancialProfileStore } from "@/store/user/userFinanceProfile";

function  assignProfileFinance(test: TestData): string {
  let totalPuntos = 0;

  if (test.age === "Más de 55 años") {
    totalPuntos += 1;
  } else if (test.age === "Entre 35-55 años") {
    totalPuntos += 2;
  } else if (test.age === "Menos de 35 años") {
    totalPuntos += 3;
  }

  if (test.experience === "Ninguna experiencia") {
    totalPuntos += 1;
  } else if (test.experience === "Alguna experiencia con productos básicos") {
    totalPuntos += 2;
  } else if (test.experience === "Experiencia amplia con diversos instrumentos") {
    totalPuntos += 3;
  }

  if (test.time === "Menos de 2 años") {
    totalPuntos += 1;
  } else if (test.time === "Entre 2 y 5 años") {
    totalPuntos += 2;
  } else if (test.time === "Más de 5 años") {
    totalPuntos += 3;
  }

  if (test.lost === "Vendo todo inmediatamente") {
    totalPuntos += 1;
  } else if (test.lost === "Espero un tiempo antes de tomar una decisión") {
    totalPuntos += 2;
  } else if (test.lost === "Aprovecho para comprar más") {
    totalPuntos += 3;
  }

  if (test.objective === "Preservar mi capital") {
    totalPuntos += 1;
  } else if (test.objective === "Obtener un rendimiento moderado con riesgo limitado") {
    totalPuntos += 2;
  } else if (test.objective === "Maximizar rendimientos asumiendo mayores riesgos") {
    totalPuntos += 3;
  }

  if (totalPuntos >= 5 && totalPuntos <= 7) {
    return "Sembrador de oportunidades";
  } else if (totalPuntos >= 8 && totalPuntos <= 11) {
    return "Explorador de nuevos caminos";
  } else if (totalPuntos >= 12 && totalPuntos <= 15) {
    return "Cazador de inversiones";
  } else {
    return "Error: La suma de puntos no es válida.";
  }
}

async function sendProfileFinance(test: TestData, userId: number): Promise<void> {
  try {
    const riskProfile = assignProfileFinance(test);

    const response = await axios.post(`${URL}/onboarding`, {
      userId,
      riskProfile,
    });

    const profileData = response.data;

    const { setFinancialProfile } = useFinancialProfileStore.getState();

    setFinancialProfile({
      id: profileData.id,
      knowledgeLevel: profileData.knowledgeLevel ?? '',
      riskProfile: profileData.riskProfile ?? '',
      incomeMonthly: profileData.incomeMonthly ?? 0,
      expensesMonthly: profileData.expensesMonthly ?? 0,
      percentageSave: profileData.percentageSave ?? 0,
      totalDebt: profileData.totalDebt ?? 0,
      savingsTotal: profileData.savingsTotal ?? 0,
      patrimonyTotal: profileData.patrimonyTotal ?? 0,
    });

    return response.data;

  } catch (error) {
    console.error("Hubo un error al enviar el perfil al backend:", error);
  }
}

async function skipProfileFinance(userId: number): Promise<void> {
  try {
    const riskProfile= "skip";

    const response = await axios.post( `${URL}/onboarding`, {
      userId,
      riskProfile
    });

    const { setFinancialProfile } = useFinancialProfileStore.getState();

    setFinancialProfile({
      id: response.data.id,
      knowledgeLevel:  response.data.knowledgeLevel ?? '',
      riskProfile: response.data.riskProfile ?? '',
      incomeMonthly:  response.data.incomeMonthly ?? 0,
      expensesMonthly:  response.data.expensesMonthly ?? 0,
      percentageSave:  response.data.percentageSave ?? 0,
      totalDebt:  response.data.totalDebt ?? 0,
      savingsTotal: response.data.savingsTotal ?? 0,
      patrimonyTotal: response.data.patrimonyTotal ?? 0,
    });


    return response.data;
  } catch (error) {
    console.error("Hubo un error al enviar el perfil al backend:", error);
  }
}

export {
    sendProfileFinance,
    assignProfileFinance,
    skipProfileFinance
}