import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [newBooking, setNewBooking] = useState(null);

    return (
        <AppContext.Provider value={{newBooking, setNewBooking}}>
        {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
  return useContext(AppContext);
}