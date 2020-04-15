const INITIAL_STATE = {
    usuarioEmail: '',
    usuarioLogado: '0',
    cart: {
        items: [],
        total: 0
    }
};

const actionType = {
    LOG_IN(state, action) {
        return {
            ...state,
            usuarioLogado: 1,
            usuarioEmail: action.usuarioEmail
        };
    },
    LOG_OUT(state, action) {
        return {
            ...state,
            usuarioLogado: 0,
            usuarioEmail: null
        };
    },
    ADD_CART(state, action) {
        state.cart.items.push({
            name: action.product.name,
            quantity: action.product.quantity,
            option: action.product.option,
            price: action.product.price
        });

        state.cart.total = state.cart.items.reduce((prev, item) => {
            return prev + (item.price * item.quantity);
        }, 0);

        return {
            ...state,
            cart: {
                ...state.cart,
                items: [...state.cart.items]
            }
        }
    },
};

function reducer(state = INITIAL_STATE, action) {
    const doAction = actionType[action.type];

    return doAction ? doAction(state, action) : state;
}

export default reducer;