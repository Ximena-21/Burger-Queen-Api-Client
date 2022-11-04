import { useState } from "react";

export const useModal = (initialValue = false) => {
const [isOpen, setIsOpen ] = useState(initialValue)

const openModal = () => setIsOpen(true) // abrir modal

const closeModal = () => setIsOpen(false)

return [isOpen, openModal, closeModal]
}