import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext(null);

const initialState = {
    goods: [],
    loading: true,
    order: [],
    basketShow: false,
    alertName: ''
}

export function ContextProvider({ children }) {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.getGoods = (data) => {
        dispatch({type: 'GET_GOODS', payload: data})
    }
    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }
    value.deleteFromBasket = (id) => {
        dispatch({type: 'DELETE_FROM_BASKET', payload: id})
    }
    value.changeQuantityGood = (id, sign) => {
        dispatch({ type: 'CHANGE_QUANTITY_GOOD', payload: { id, sign } })
    }
    value.handleBasketShow = () => {
        dispatch({ type: 'HANDLE_BASKET_SHOW' })
    }
    value.addToBasket = (good) => {
        dispatch({ type: 'ADD_TO_BASKET', payload: good })
    }
    return (
        <>
            <ShopContext.Provider value={value}>
                {children}
            </ShopContext.Provider>
        </>
    )
}