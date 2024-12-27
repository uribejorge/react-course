import { createContext, useState } from "react";

// Crear el contexto
export const ShoppingCardContext = createContext();

// Proveedor del contexto
export const ShoppingCardProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [isProductosOpen, setProductosOpen] = useState(false);

    // Funciones para abrir y cerrar "Productos"
    const openProductos = () => setProductosOpen(true);
    const closeProductos = () => setProductosOpen(false);

    return (
        <ShoppingCardContext.Provider
            value={{
                count,
                setCount,
                openProductos,
                closeProductos,
                isProductosOpen,
            }}
        >
            {children}
        </ShoppingCardContext.Provider>
    );
};

export default ShoppingCardProvider;
