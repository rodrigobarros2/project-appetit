import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store';

import Login from './pages/Login';
import Home from './pages/Home';
import UserOrder from './pages/UserOrder';
import Orders from './pages/Orders';
import Details from './pages/Details';
import Buyer from './pages/Buyer';
import PaymentStatus from './pages/PaymentStatus';
import Finished from './pages/Finished';

export default function Routes() {
	return (
		<Provider store={Store}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/userorders" component={UserOrder} />
					<Route exact path="/pedido" component={Orders} />
					<Route exact path="/detalhes" component={Details} />
					<Route exact path="/comprador" component={Buyer} />
					<Route exact path="/statuspagamento" component={PaymentStatus} />
					<Route exact path="/finalizado" component={Finished} />
				</Switch>
			</BrowserRouter>
		</Provider>
	);
}
