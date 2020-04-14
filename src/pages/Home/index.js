import React from "react";
import Navbar from "../../components/navbar";
import AddPlus from '../../assets/icons/AddPlus';
import SearchIcon from '../../assets/icons/Search';
import FilterIcon from '../../assets/icons/FilterIcon';

function Home() {
	const ordersList = [
		{
			name: 'Marcel Batista',
			products: [
				'Cuscuz com calabresa',
				'Suco de laranja'
			],
			price: 3.5
		},
		{
			name: 'Fernanda Siqueira',
			products: [
				'Iogurte desnatado com maça'
			],
			price: 7.9
		},
		{
			name: 'Luiz Oliveira',
			products: [
				'2x bolo frito,café c/leite'
			],
			price: 4.50,
		},
	];

	const ordersList2 = [
		{
			name: 'Ana Virlania',
			products: [
				'2x sanduiche de pão de arroz, vitamina de goiaba',
			],
			price: 3.5
		},
		{
			name: 'Marcel Batista',
			products: [
				'Cuscuz com calabresa',
				'Suco de laranja'
			],
			price: 3.5
		},
	];

	const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

	return (
		<main className="tela-inicial">
			<Navbar />
			<div className="contentDashboard">
				<h3 className="content-title">Olá, Vanusa!</h3>

				<a className="link-style " href="/pedido"><button className="do-order"><AddPlus />fazer novo pedido</button></a>

				<div className="search-area">
					<SearchIcon />
					<input className="order-search" type="text" placeholder="Procure o pedido aqui..." />
					<FilterIcon />
				</div>

				<div className="orders-list">
					<span><b>13/05/2019,</b> você vendeu <b>R$ 45,80</b></span>
					<a className="link-style" href="/userorders">
						<ul>
							{ordersList.map((item) => (
								<li className="user-order">
									<div>
										<div className="user-img" src={item.img}>{item.photo}</div>
									</div>

									<div className="order-details" style={{ marginRight: 'auto' }}>
										<b className="username">{item.name}</b>
										<span>{item.products.join(', ')}</span>
									</div>

									<div>
										<b className="user-price">{formatter.format(item.price)}</b>
									</div>
								</li>
							))}
						</ul>
					</a>
					<span><b>09/05/2019,</b> você vendeu <b>R$ 123,50</b></span>
					<a href="userorders">
						<ul>
							{ordersList2.map((item) => (
								<li className="user-order">
									<div>
										<div className="user-img">{item.photo}</div>
									</div>

									<div className="order-details" style={{ marginRight: 'auto' }}>
										<b className="username">{item.name}</b>
										<span>{item.products.join(', ')}</span>
									</div>

									<div>
										<b className="user-price">{formatter.format(item.price)}</b>
									</div>
								</li>
							))}
						</ul>
					</a>
				</div>
			</div>
		</main>
	)
}
export default Home;