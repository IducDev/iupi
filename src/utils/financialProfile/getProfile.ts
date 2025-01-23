import { useFinancialProfileStore } from "@/store/user/userFinanceProfile";
import Cookies from "js-cookie";
import { AxiosError } from 'axios'; 
import axios from 'axios';

const URL = process.env.NEXT_PUBLIC_API_URL;

export const getUserProfile = async () => {
  const userLogged = JSON.parse(Cookies.get('userLogged') || '{}');
  const userId = userLogged.userId;

  try {
    const profileResponse = await axios.get(`${URL}/financing-profile/${userId}`);
    const profileData = profileResponse.data;

    const { setFinancialProfile } = useFinancialProfileStore.getState();
    setFinancialProfile({
      id: profileData.id,
      knowledgeLevel: profileData.knowledgeLevel,
      riskProfile: profileData.riskProfile,
      incomeMonthly: profileData.incomeMonthly,
      expensesMonthly: profileData.expensesMonthly,
      percentageSave: profileData.percentageSave,
      totalDebt: profileData.totalDebt,
      savingsTotal: profileData.savingsTotal,
      patrimonyTotal: profileData.patrimonyTotal,
    });

    return { profileData };

    } catch (error) {
        if (error instanceof AxiosError) { 
            //Aclaracion: Si el usuario no tiene perfil me responde el back con un error por eso el perfil queda con null
            if (error.response && (error.response.status === 400 || error.response.status === 404)) {
            return { profileData: null }; 
            }

        console.error('Error en la solicitud al backend:', error);
        return
    }
    };
}

export default getUserProfile;
