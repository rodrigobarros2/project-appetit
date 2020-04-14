import React from "react";
import Navbar from "../../components/navbar";
import img from "../../assets/IMG.png"

import SearchIcon from "../../assets/icons/Search"
import VoltarIcon from "../../assets/icons/voltar";

function Dashboard() {

	const ordersList = {
		cliente: [
			{
				name: 'Justine Marshall',
				img: img,
				price: 2.25
			},
			{
				name: 'Bairam Frootan',
				img: img,
				price: 3.25
			},
			{
				name: 'Tua Manuera',
				img: img,
				price: 3.25
			},
			{
				name: 'Bairam Frootan',
				img: img,
				price: 3.25
			},
			{
				name: 'Justine Marshall',
				img: img,
				price: 3.25
			},
		],
	};

	const ordersList1 = {
		pedido: [
			{
				name: '2x Cuscuz completo',
				img: img,
				price: 2.25,
				obs: 'Não adicionar manteiga',
			},
		],
	};

	const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

	return (
		<main className="">
			<Navbar className="navbar-novo-pedido" />
			<div className="grid-container">
				<div className="container-1">
					<div className="conteudo-comprador">
						<div className="title-container title-container-comprador">
							<a href="/pedido"><VoltarIcon /></a>
							<h3 className="content-title">Novo pedido</h3>
						</div>
						<h4 className="produtos-comprador">Produtos</h4>
						<ul>
							{ordersList1.pedido.map((item, i) => (
								<div key={i}>
									<li className="user-order user-order--novo-pedido comprador-grupo-de-pedidos">
										<div className="user-img"><img src={item.img} alt="" /></div>
										<div className="order-details">
											<span>{item.name}</span>
										</div>
										<div>
											<b className="user-price">{formatter.format(item.price)}</b>
										</div>
									</li>
									<span className="pedido-observacao">{item.obs}</span>
								</div>
							))}
						</ul>

					</div>
					<div className="barra-cinza"></div>
					<div className="container-total total">
						<h4>Total</h4>
						<h4 className="preco-comprador">R$6,50</h4>
					</div>
				</div>

				<div className="container-2">
					<div className="conteudo-container-2">
						<div className="title-container title-container--2 ">

							<a className="voltaicon-oculto" href="/"><VoltarIcon /></a>


							<h3 className="content-title">Informações para o pedido</h3>
						</div>
						<p className="p-info">Preencha as informações abaixo para concluir esta venda.</p>

						<p className="passo-bar-progress">Passo 2 de 3</p>

						<div className="progress-bar-gray">
							<div className="progress-bar-orange progress-bar-orange-2">

							</div>
						</div>

						<h6 className="esta-vendendo">O que você está vendendo?</h6>

						<div className="search-area">
							<SearchIcon />
							<input className="order-search" type="text" placeholder="Procure o cliente aqui..." />
						</div>

						<ul>
							{ordersList.cliente.map((item, i) => (
								<a href="/comprador" key={i}>
									<li className="user-order user-order--novo-pedido">
										<div className="user-img"><img src={item.img} alt="" /></div>
										<div className="order-details">
											<span>{item.name}</span>
										</div>
										<div>
											<b className="user-price">{formatter.format(item.price)}</b>
										</div>
									</li>
								</a>
							))}
							<div className="btn-container">
								<a href="/statuspagamento"><button className="btn-scrol-pedido">avançar</button></a>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</main>
	)
}
export default Dashboard;