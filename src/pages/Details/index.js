import React, { useState } from "react";
import Navbar from "../../components/navbar";
import { Link } from 'react-router-dom'

import IconResume from "../../assets/icons/IconResume"
import VoltarIcon from "../../assets/icons/voltar";

function Detalhes() {

	const [count, setCount] = useState(1);
	const [name, setName] = useState('');
	const [option, setOption] = useState();

	function handleRegister(e) {
		e.preventDefault();

		console.log({
			count,
			name,
			option,
		})
	};

	const ordersList = [
		{
			products: [
				'Cuzcuz copmpleto',
			],
			price: 3.25
		},
	];

	const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

	return (
		<main className="">
			<Navbar className="navbar-novo-pedido" />
			<div className="grid-container">
				<div className="container-1">
					<div className="title-container">
						<a href="/pedido"><VoltarIcon /></a>
						<h3 className="content-title">Novo pedido</h3>
					</div>

					<div className="icon-resume-container">
						<IconResume className="icon-resume" />
						<p className="legenda-svg-cozinha">Acompanhe aqui um resumo desta venda</p>
					</div>
				</div>

				<div className="container-2">

					<div className="container-flex">
						<div className="title-container title-container--2 ">
							<a className="voltaicon-oculto" href="/"><VoltarIcon /></a>
							<h3 className="content-title">Detalhes do pedido</h3>
						</div>
						<p className="p-info">Aproveite para adicionar alguma observação para este pedido, caso queira.</p>

						<ul>
							{ordersList.map((item, i) => (
								<div key={i}>
									<li className="user-order order--pedidos order--detalhes">
										<div className="user-img"></div>
										<div className="style-text">
											<div className="">
												<span>{item.products.join(', ')}</span>
											</div>
											<div>
												<b className="preco-detalhes">{formatter.format(item.price)}</b>
											</div>
										</div>
									</li>
								</div>
							))}
						</ul>
						<h6 className="opcoes">Opções</h6>
						<p className="texto-pag-detalhes">Escolha dentre as opções de massas abaixo.</p>

						<form
							onSubmit={handleRegister}
							className="form-radio form-radio--responsive">

							<label htmlFor="milho">
								<div className="div-input-radio">
									<input
										value={option}
										onChange={e => setOption(e.target.value)}
										type="radio"
										name="food"
										id="milho"
										defaultValue="milho" />
										Milho
								</div>
							</label>

							<label htmlFor="arroz">
								<div className="div-input-radio">
									<input
										value={option}
										onChange={e => setOption(e.target.value)}
										type="radio"
										name="food"
										id="arroz"
										defaultValue="arroz" />
										Arroz
								</div>
							</label>
						</form>

						<div className="order-separator"></div>

						<p className="text-obs">Observações</p>

						<form onSubmit={handleRegister}>
							<input
								value={name}
								onChange={e => setName(e.target.value)}
								placeholder="Deseja adicionar alguma observação?" id="milho"
								className="input-obs"
								type="text"
							/>
						</form>
					</div>
					<div className="contador-pedidos">
						<div className="container-contador">
							<button value={count} className="btn-menos" onClick={() => setCount(count - 1)}>-</button>
							<p>{count}</p>
							<button value={count} className="btn-mais" onClick={() => setCount(count + 1)}>+</button>
						</div>

						<div className="container-button">
							<Link to="comprador"> <button type="submit" className="btn-adicionar">Adicionar</button></Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
export default Detalhes;