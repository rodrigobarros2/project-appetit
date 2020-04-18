const INITIAL_STATE = {
	usuarioEmail: '',
	usuarioLogado: '0',
	cart: {
		items: [],
		total: 0,
	},
	clients: [],
};

const actionType = {
	LOG_IN(state, action) {
		return {
			...state,
			usuarioLogado: 1,
			usuarioEmail: action.usuarioEmail,
		};
	},
	LOG_OUT(state) {
		return {
			...state,
			usuarioLogado: 0,
			usuarioEmail: null,
		};
	},
	ADD_CART(state, action) {
		state.cart.items.push({
			img: action.product.img,
			obs: action.product.obs,
			quantity: action.product.quantity,
			option: action.product.option,
			price: action.product.price,
		});

		state.cart.total = state.cart.items.reduce((prev, item) => prev + (item.price * item.quantity), 0);

		return {
			...state,
			cart: {
				...state.cart,
				items: [...state.cart.items],
			},
		};
	},
	SELECT_CLIENT(state, action) {
		state.clients = action.clients;

		return {
			...state,
			clients: [...state.clients],
		};
	},
};

function reducer(state = INITIAL_STATE, action) {
	const doAction = actionType[action.type];

	return doAction ? doAction(state, action) : state;
}

export default reducer;
