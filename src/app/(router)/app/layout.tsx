
import isUserLogged from '@/utils/isUserLogged';
import { redirect } from 'next/navigation';
import React from 'react';


const AppLayout: React.FC<{ children: React.ReactNode }> = async ({ children }) => {

    const token = await isUserLogged(); 
    if (token === false) {
        redirect('/account/login');
    }
    

    return (
        <div className=''>
            {children}
        </div>
    );
};

export default AppLayout;