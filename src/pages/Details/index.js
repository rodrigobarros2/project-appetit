import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../../components/navbar';

import IconResume from '../../assets/icons/IconResume';
import VoltarIcon from '../../assets/icons/voltar';
import IconSelected from '../../assets/icons/iconSelected';
import Profile from '../../assets/Profile.png';
import img from '../../assets/IMG.png';

function Detalhes({ history }) {
	const dispatch = useDispatch();

	const [count, setCount] = useState(1);
	const [obs, setObs] = useState('');
	const [option, setOption] = useState();

	function handleRegister() {
		dispatch({
			type: 'ADD_CART',
			product: {
				obs,
				img,
				quantity: count,
				option,
				price: 3.25,
			},
		});
		history.replace('/pedido');
	}

	const ordersList = [
		{
			products: ['Cuzcuz copmpleto'],
			img,
			price: 3.25,
		},
	];

	const formatter = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});

	return (
		<main className="">
			<Navbar className="navbar-novo-pedido" />
			<div className="grid-container">
				<div className="container-1">
					<div className="title-container">
						<a href="/pedido">
							<VoltarIcon />
							{' '}
						</a>
						<h3 className="content-title">Novo pedido</h3>
					</div>

					<div className="icon-resume-container">
						<IconResume className="icon-resume" />
						<p className="legenda-svg-cozinha">
							Acompanhe aqui um resumo desta venda
						</p>
					</div>
				</div>

				<div className="container-2">
					<div className="container-flex">
						<div className="profile-img">
							<img src={Profile} alt="profile-image2" />
						</div>
						<div className="title-container title-container--2 ">
							<a className="voltaicon-oculto" href="/">
								{' '}
								<VoltarIcon />
							</a>
							<h3 className="content-title">Detalhes do pedido</h3>
						</div>
						<p className="p-info">
							Aproveite para adicionar alguma observação para este pedido, caso
							queira.
						</p>

						<ul>
							{ordersList.map((item) => (
								<li
									className="user-order order--pedidos order--detalhes"
									key={item.id}
								>
									<div className="user-img">
										<img src={item.img} alt="" />
									</div>

									<div className="style-text">
										<div className="">
											<span>{item.products.join(', ')}</span>
										</div>
										<div>
											<b className="preco-detalhes">
												{formatter.format(item.price)}
											</b>
										</div>
									</div>
								</li>
							))}
						</ul>
						<h6 className="opcoes">Opções</h6>
						<p className="texto-pag-detalhes">
							Escolha dentre as opções de massas abaixo.
						</p>

						<div className="form-radio form-radio--responsive">
							<label htmlFor="milho">
								<div className="div-input-radio div-input-radio-formated">
									<input
										value={option}
										onChange={(e) => setOption(e.target.value)}
										type="radio"
										name="food"
										id="milho"
										defaultValue="milho"
									/>
									<div className="div-input-radio-selected">
										<IconSelected />
									</div>
									Milho
								</div>
							</label>

							<label htmlFor="arroz">
								<div className="div-input-radio div-input-radio-formated">
									<input
										value={option}
										onChange={(e) => setOption(e.target.value)}
										type="radio"
										name="food"
										id="arroz"
										defaultValue="arroz"
									/>
									<div className="div-input-radio-selected">
										<IconSelected />
									</div>
									Arroz
								</div>
							</label>
						</div>

						<div className="order-separator" />

						<p className="text-obs">Observações</p>

						<input
							value={obs}
							onChange={(e) => setObs(e.target.value)}
							placeholder="Deseja adicionar alguma observação?"
							id="milho"
							className="input-obs"
							type="text"
						/>
					</div>

					<div className="contador-pedidos">
						<div className="container-contador">
							<button value={count} type="button" className="btn-menos" onClick={() => setCount(count - 1)}>
								-
							</button>
							<p>{count}</p>
							<button
								value={count}
								type="button"
								className="btn-mais"
								onClick={() => setCount(count + 1)}
							>
								+
							</button>
						</div>

						<div className="container-button">
							<button
								type="button"
								onClick={handleRegister}
								className="btn-adicionar"
							>
								Adicionar
							</button>

						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
export default Detalhes;
