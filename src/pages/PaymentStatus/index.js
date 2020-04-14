import React from "react";
import Navbar from "../../components/navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import img from "../../assets/IMG.png"

import VoltarIcon from "../../assets/icons/voltar";

function PaymentStatus() {
	const [startDate, setStartDate] = React.useState(new Date());

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
		],
	};

	const ordersList1 = {
		pedido: [
			{
				name: '2x Cuscuz completo',
				img: img,
				price: 3.25,
				obs: 'Não adicionar manteiga',
			},
		],
	};

	const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

	return (
		<main className="#">
			<Navbar className="navbar-novo-pedido" />
			<div className="grid-container">
				<div className="container-1">
					<div className="conteudo-comprador">
						<div className="title-container title-container-comprador">
							<a href="/comprador"><VoltarIcon /></a>
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
					<div className=" total">
						<h4>Clientes</h4>
						<ul>
							{ordersList.cliente.map((item, i) => (
								<div key={i}>
									<li className="user-order user-order--novo-pedido clientes-passo3">
										<div className="user-img"><img src={item.img} alt="" /></div>
										<div className="order-details">
											<span>{item.name}</span>
										</div>
									</li>
								</div>
							))}
						</ul>
					</div>
					<div className="barra-cinza"></div>

					<div className="total-finalizado">
						<p>Total</p>
						<p>R$6,50</p>
					</div>
				</div>

				<div className="container-2">
					<div className="conteudo-container-2">
						<div className="title-container title-container--2 ">

							<a className="voltaicon-oculto" href="/"><VoltarIcon /></a>
							<h3 className="content-title">Informações para o pedido</h3>
						</div>
						<p className="p-info">Preencha as informações abaixo para concluir esta venda.</p>

						<p className="passo-bar-progress">Passo 3 de 3</p>

						<div className="progress-bar-gray">
							<div className="progress-bar-orange progress-bar-orange-3">
							</div>
						</div>

						<h6 className="esta-vendendo">Qual o status de pagamento?</h6>

						<form className="form-radio form-radio--responsive">
							<label htmlFor="male">
								<div className="div-input-radio">
									<input
										type="radio"
										id="male"
										name="gender"
										defaultValue="male" />
										Não está pago
								</div>
							</label>
							<label htmlFor="female">
								<div className="div-input-radio">
									<input
										type="radio"
										id="female"
										name="gender"
										defaultValue="female" />
										Já está pago
								</div>
							</label>
						</form>

						<p className="text-obs">Em qual data foi realizado?</p>

						<DatePicker
							dateFormat="dd/MM/yyyy"
							id="milho"
							className="input-obs"
							placeholder="Seleciona uma data"
							selected={startDate}
							onChange={date => setStartDate(date)}>
						</DatePicker>

						<div className="btn-container">
							<a href="/finalizado"><button className="btn-scrol-pedido">avançar</button></a>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
export default PaymentStatus;