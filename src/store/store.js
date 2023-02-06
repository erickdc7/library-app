import { createContext, useContext, useEffect, useState } from "react"

const AppContext = createContext({
    items: [],
    createItem: (item) => { },
    getItem: (id) => { },
    updateItem: (item) => { },
});

export default function Store({ children }) {
    const [items, setItems] = useState([]);

    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
}