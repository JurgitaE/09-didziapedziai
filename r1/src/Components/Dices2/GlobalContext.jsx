import { createContext } from 'react';
import { useMessages } from './useMessages';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [messages, addMessage] = useMessages([]);

    return (
        <GlobalContext.Provider
            value={{
                messages,
            }}>
            {children}
        </GlobalContext.Provider>
    );
};
