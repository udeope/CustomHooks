import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const MainApp = () => {
    const [user, setUser] = useState({})
    
    // const user = {
    //     id: 1234, 
    //     name: 'Edu',
    //     email: 'edusv10@gmail.com'
    // }
    return (
            <UserContext.Provider value={{
                user,
                setUser
            }}>

            <AppRouter />

            </UserContext.Provider>
    )
}
