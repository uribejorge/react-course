import { createContext, useState } from "react";

// Crear el contexto
export const ShoppingCardContext = createContext();

// Proveedor del contexto
export const ShoppingCardProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    

    return (
        <ShoppingCardContext.Provider value={{ count, setCount }}>
            {children}
        </ShoppingCardContext.Provider>
    );
};

export default ShoppingCardProvider;
