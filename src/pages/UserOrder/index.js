import React from "react";
import Navbar from "../../components/navbar";

import VoltarIcon from "../../assets/icons/voltar";
import Profile from '../../assets/Profile.png'
import UserIcon from '../../assets/UserIcon.png'

function Dashboard() {
	const ordersList = [
		{
			name: 'Marcel Batista',
			products: [
				'2x Bolo frito + Café c/leite',
			],
			img: UserIcon,
			price: 3.5
		},
	];

	const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

	return (
		<main className="">
			<Navbar />
			<div className="contentDashboard contentDashboard--UserOrder">
				<div className="profile-img">
					<img src={Profile} alt="profile-image2" />
				</div>
				<a href="/"><VoltarIcon /></a>
				<h3 className="content-title">Pedidos de Luiz</h3>

				<div className="orders-list">
					<span><b>13/05/2019</b></span>

					<ul>
						{ordersList.map((item, i) => (
							<li className="user-order order--pedidos" key={i}>
								<div className="user-img">
									<img src={item.img} alt="" />
								</div>
								<div className="style-text">
									<div className="">
										<span>{item.products.join(', ')}</span>
									</div>
									<div>
										<b className="">{formatter.format(item.price)}</b>
									</div>
								</div>
							</li>
						))}

						<span><b>09/05/2019</b></span>

						{ordersList.map((item, i) => (
							<div key={i}>
								<li className="user-order order--pedidos">
									<div className="user-img">
										<img src={item.img} alt="" />
									</div>
									<div className="style-text">
										<div className="">
											<span>{item.products.join(', ')}</span>
										</div>
										<div>
											<b className="">{formatter.format(item.price)}</b>
										</div>
									</div>
								</li>
							</div>
						))}
					</ul>
				</div>
			</div>
		</main>
	)
}
export default Dashboard;
