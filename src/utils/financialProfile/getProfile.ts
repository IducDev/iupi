import { useFinancialProfileStore } from "@/store/user/userFinanceProfile";
import Cookies from "js-cookie";
import axios from 'axios';

const URL = process.env.NEXT_PUBLIC_API_URL 

export const getUserProfile = async () => {
  const userLogged = JSON.parse(Cookies.get('userLogged') || '{}');
  const userId = userLogged.userId;

  try {
    const profileResponse = await axios.get(`${URL}/financing-profile/user/${userId}`);
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
    // Aclaracion: El error esta bien , significa que el user no tiene perfil
          if(error)
          return { profileData: null }; 
    }
}

export default getUserProfile;
