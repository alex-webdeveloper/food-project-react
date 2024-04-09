
export function reducer(state, action) {
    switch (action.type) {
        case 'GET_GOODS': {
            return {
                ...state,
                goods: action.payload || [],
                loading: false
            }
        }
        case 'CLOSE_ALERT': {
            return {
                ...state,
                alertName: ''
            };
        }
        case 'CHANGE_QUANTITY_GOOD': {
            return {
                ...state,
                order: state.order.map(item => {
                    if (item.id === action.payload.id  && action.payload.sign === 'dec' && item.quantity === 1) return item;
                    else if (item.id === action.payload.id && action.payload.sign === 'dec') return {...item, quantity: item.quantity - 1};
                    else if (item.id === action.payload.id  && action.payload.sign === 'inc') return {...item, quantity: item.quantity + 1};
                    return item;
                })
            };
        }
        case 'ADD_TO_BASKET': {
            let flag = false;
            let newOrder = { ...action.payload, quantity: 1 };
            let out = state.order.map(item => {
                if (item.id === action.payload.id) {
                    flag = true;
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item;
            })
            if (flag) return { ...state, order: out, alertName: action.payload.name };
            return {
                ...state,
                alertName: action.payload.name,
                order: [...state.order, newOrder]
            }
        }
        case 'DELETE_FROM_BASKET': {
            return {
                ...state,
                order: state.order.filter(item => item.id !== action.payload)
            }
        }
        case 'HANDLE_BASKET_SHOW': {
            return {
                ...state,
                basketShow: !state.basketShow
            }
        }
        default: {
            return state;
        }
    }

}