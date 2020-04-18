import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../components/navbar';
import img from '../../assets/IMG.png';
import IconVerify from '../../assets/icons/iconVerify';
import SearchIcon from '../../assets/icons/Search';
import VoltarIcon from '../../assets/icons/voltar';
import Profile from '../../assets/Profile.png';


function Dashboard({ history }) {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const [clients, setClients] = React.useState({
		list: [
			{
				name: 'Justine Marshall',
				img,
				price: 2.25,
				selected: false,
			},
			{
				name: 'Bairam Frootan',
				img,
				price: 3.25,
				selected: false,
			},
			{
				name: 'Tua Manuera',
				img,
				price: 3.25,
				selected: false,
			},
		],
	});

	function selecionarUsuario(x) {
		clients.list[x].selected = !clients.list[x].selected;
		setClients((prevState) => ({ ...prevState }));
		return null;
	}

	const selectClient = () => {
		const clientsSelected = clients.list.filter((client) => client.selected === true);

		console.log(clientsSelected);

		dispatch({
			type: 'SELECT_CLIENT',
			clients: clientsSelected,
		});

		history.push('/statuspagamento');
		return null;
	};


	const formatter = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});

	return (
		<main className="">
			<Navbar className="navbar-novo-pedido" />
			<div className="grid-container">
				<div className="container-1">
					<div className="conteudo-comprador">
						<div className="title-container title-container-comprador">
							<a href="/pedido">
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
									<span className="pedido-observacao">{(item.obs)}</span>
								</div>
							))}
						</ul>
					</div>
					<div className="barra-cinza" />
					<div className="container-total total">
						<h4>Total</h4>
						<h4 className="preco-comprador">{formatter.format(cart.total)}</h4>
					</div>
				</div>

				<div className="container-2">
					<div className="conteudo-container-2">
						<div className="title-container title-container--2 ">
							<div className="profile-img">
								<img src={Profile} alt="profile-image2" />
							</div>

							<a className="voltaicon-oculto" href="/">
								{' '}
								<VoltarIcon />
							</a>

							<h3 className="content-title">Informações para o pedido</h3>
						</div>
						<p className="p-info">
							Preencha as informações abaixo para concluir esta venda.
						</p>

						<p className="passo-bar-progress">Passo 2 de 3</p>

						<div className="progress-bar-gray">
							<div className="progress-bar-orange progress-bar-orange-2" />
						</div>

						<h6 className="esta-vendendo">Para quem você está vendendo?</h6>

						<div className="search-area">
							<SearchIcon />
							<input
								className="order-search"
								type="text"
								placeholder="Procure o cliente aqui..."
							/>
						</div>

						<ul>
							{clients.list.map((item, i) => (
								<li
									key={i.toString()}
									className="user-order user-order--novo-pedido noselect"
									role="link"
									tabIndex={0}
									onClick={() => { selecionarUsuario(i); }}
									onKeyPress={() => { selecionarUsuario(i); }}
								>
									<div className="user-img">
										<img src={item.img} alt="" data-selected={item.selected} />
										<div className="user-img-selected" data-selected={item.selected}>
											<IconVerify />
										</div>
									</div>
									<div className="order-details">
										<span>{item.name}</span>
									</div>
								</li>
							))}
							<div className="btn-container">

								<button type="button" className="btn-scrol-pedido" onClick={() => { selectClient(); }}>
									avançar
								</button>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Dashboard;
