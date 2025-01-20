
import { cookies } from 'next/headers';

const isUserLogged = async () => {
    const token =  (await cookies()).get('userLogged')?.value;
    let userData;
    try {
        if (token) {
            userData = JSON.parse(token);
        } else {
            userData = false;
        }
    } catch (error) {
        console.error('Error parsing JSON:', error);
        userData = false;
    }
    return userData;
};

export default isUserLogged;