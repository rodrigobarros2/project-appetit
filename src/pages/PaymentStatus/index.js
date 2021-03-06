import React from 'react';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import Navbar from '../../components/navbar';
import 'react-datepicker/dist/react-datepicker.css';
import Profile from '../../assets/Profile.png';
import VoltarIcon from '../../assets/icons/voltar';

function PaymentStatus() {
	/* const cart = useSelector((state) => state.cart); */
	const [startDate, setStartDate] = React.useState(new Date());

	const clients = useSelector((state) => state.clients);
	const cart = useSelector((state) => state.cart);

	const formatter = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});

	return (
		<main className="#">
			<Navbar className="navbar-novo-pedido" />
			<div className="grid-container">
				<div className="container-1">
					<div className="conteudo-comprador">
						<div className="title-container title-container-comprador">
							<a href="/comprador">
								{' '}
								<VoltarIcon />
							</a>
							<h3 className="content-title">Novo pedido</h3>
						</div>
						<h4 className="produtos-comprador">Produtos</h4>
						<ul>
							{cart.items.map((item, i) => (
								<div key={i.toString()}>
									<li className="user-order user-order--novo-pedido comprador-grupo-de-pedidos">
										<div className="user-img">
											<img src={item.img} alt="" />
										</div>
										<div className="order-details">
											<span>
												{`${item.quantity}x `}
												Cuscuz Completo
											</span>
										</div>
										<div>
											<b className="user-price">
												{formatter.format(item.price)}
											</b>
										</div>
									</li>
									<span className="pedido-observacao">
										{item.obs}
									</span>
								</div>
							))}
						</ul>
					</div>
					<div className="barra-cinza" />
					<div className=" total">
						<h4>Clientes</h4>
						<ul>
							{clients.map((item, i) => (
								<div key={i.toString()}>
									<li className="user-order user-order--novo-pedido clientes-passo3">
										<div className="user-img">
											<img src={item.img} alt="" />
										</div>
										<div className="order-details">
											<span>{item.name}</span>
										</div>
									</li>
								</div>
							))}
						</ul>
					</div>
					<div className="barra-cinza" />

					<div className="total-finalizado">
						<p>Total</p>
						<h4 className="preco-comprador">{formatter.format(cart.total)}</h4>
					</div>
				</div>

				<div className="container-2">
					<div className="conteudo-container-2">
						<div className="profile-img">
							<img src={Profile} alt="profile-image2" />
						</div>
						<div className="title-container title-container--2">
							<a className="voltaicon-oculto" href="/">
								{' '}
								<VoltarIcon />
							</a>
							<h3 className="content-title">
								Informações para o pedido
							</h3>
						</div>
						<p className="p-info">
							Preencha as informações abaixo para concluir esta
							venda.
						</p>

						<p className="passo-bar-progress">Passo 3 de 3</p>

						<div className="progress-bar-gray">
							<div className="progress-bar-orange progress-bar-orange-3" />
						</div>

						<h6 className="esta-vendendo">
							Qual o status de pagamento?
						</h6>

						<form className="form-radio form-radio--responsive">
							<label htmlFor="male">
								<div className="div-input-radio">
									<input
										type="radio"
										id="male"
										name="gender"
										defaultValue="male"
									/>
									Não está pago
								</div>
							</label>
							<label htmlFor="female">
								<div className="div-input-radio">
									<input
										type="radio"
										id="female"
										name="gender"
										defaultValue="female"
									/>
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
							onChange={(date) => setStartDate(date)}
						/>

						<div className="btn-container">
							<a href="/finalizado">
								<button
									className="btn-scrol-pedido"
									type="button"
								>
									avançar
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
export default PaymentStatus;
