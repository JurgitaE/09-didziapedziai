import { createContext, useEffect } from 'react';
import { useDataDelete } from './useDataDelete';
import { useMessages } from './useMessages';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [messages, addMessage] = useMessages([]);
    const [deleteRes, setDeleteData] = useDataDelete(null);

    useEffect(() => {
        if (deleteRes === null) return;
        addMessage({ text: deleteRes.message.text, type: deleteRes.type });
    }, [deleteRes, addMessage]);

    return (
        <GlobalContext.Provider
            value={{
                messages,
                setDeleteData,
            }}>
            {children}
        </GlobalContext.Provider>
    );
};
