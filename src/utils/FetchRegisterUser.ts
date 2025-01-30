const URL = process.env.NEXT_PUBLIC_API_URL 
export interface RegisterUser {
    name: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: number;  
    birthDate: string;
    country: string;
  }
  
  export const fetchRegisterUser = async (userData: RegisterUser) => {
    const dataForRegisterUser = {
      ...userData,
      photoUrl: "string", 
      roleDto: {
        roles: ["USER"],
      },
    };
  
    // console.log(dataForRegisterUser);
  
    try {
      const response = await fetch(`${URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForRegisterUser),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      // console.log(data)
      
      return data;
    } catch (error) {
      console.error("Error durante el registro", error);
      throw error;
    }
  };
  