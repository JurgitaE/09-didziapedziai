import { useState } from "react";

export const useModal = () => {
    const [deleteModal, setDeleteModal] = useState(null);
    const [editModal, setEditModal] = useState(null);

    return [deleteModal, setDeleteModal, editModal, setEditModal];
};