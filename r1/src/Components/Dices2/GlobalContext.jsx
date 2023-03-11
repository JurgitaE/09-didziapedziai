import { createContext, useEffect } from 'react';
import { useDataCreate } from './useDataCreate';
import { useDataDelete } from './useDataDelete';
import { useDataEdit } from './useDataEdit';
import { useDataList } from './useDataList';
import { useMessages } from './useMessages';
import { useModal } from './UseModal';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [messages, addMessage] = useMessages([]);
    const [deleteRes, setDeleteData] = useDataDelete(null);
    const [createRes, setCreateData] = useDataCreate(null);
    const [editRes, setEditData] = useDataEdit(null);
    const [list, setLastUpdate] = useDataList(null);
    const [deleteModal, setDeleteModal, editModal, setEditModal] = useModal();

    useEffect(() => {
        if (deleteRes === null) return;
        addMessage({ text: deleteRes.message.text, type: deleteRes.type });
        setLastUpdate(Date.now());
    }, [deleteRes, addMessage, setLastUpdate]);

    useEffect(() => {
        if (createRes === null) return;
        addMessage({ text: createRes.message.text, type: createRes.type });
        setLastUpdate(Date.now());
    }, [createRes, addMessage, setLastUpdate]);

    useEffect(() => {
        if (editRes === null) return;
        addMessage({ text: editRes.message.text, type: editRes.type });
        setLastUpdate(Date.now());
    }, [editRes, addMessage, setLastUpdate]);

    return (
        <GlobalContext.Provider
            value={{
                messages,
                setDeleteData,
                list,
                deleteModal,
                setDeleteModal,
                editModal,
                setEditModal,
                setCreateData,
                setEditData,
            }}>
            {children}
        </GlobalContext.Provider>
    );
};
