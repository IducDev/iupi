import { useFinancialProfileStore } from "@/store/user/userFinanceProfile";
import Cookies from "js-cookie";
import axios from 'axios';
import { FinancialProfile } from "@/store/user/userFinanceProfile";

const URL = process.env.NEXT_PUBLIC_API_URL 


interface GetUserProfileResponse {
  profileData: FinancialProfile | null;
}

export const getUserProfile = async (): Promise<GetUserProfileResponse> => {
  const userLogged = JSON.parse(Cookies.get('userLogged') || '{}');
  const userId = userLogged.userId;

  try {
    const profileResponse = await axios.get(`${URL}/financing-profile/user/${userId}`);
    const profileData = profileResponse.data;

    const { setFinancialProfile } = useFinancialProfileStore.getState();
    setFinancialProfile(profileData);

    return { profileData };

    } catch {
          return { profileData: null };
}
}

export default getUserProfile;
