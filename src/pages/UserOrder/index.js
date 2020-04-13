import React from "react";
import Navbar from "../../components/navbar";

import VoltarIcon from "../../assets/icons/voltar";

function Dashboard() {
    const ordersList = [
        {
            name: 'Marcel Batista',
            products: [
                '2x Bolo frito + Café c/leite',
            ],
            price: 3.5
        },
    ];

    const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <main className="">
            <Navbar />
            <div className="contentDashboard contentDashboard--UserOrder">
                <a href="/"><VoltarIcon /></a>
                <h3 className="content-title">Pedidos de Luiz</h3>

                <div className="orders-list">
                    <span><b>13/05/2019</b></span>

                    <ul>
                        {ordersList.map((item) => (
                            <li className="user-order order--pedidos">
                                <div className="user-img">{item.photo}</div>
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

                        {ordersList.map((item) => (
                            <li className="user-order order--pedidos">
                                <div className="user-img"></div>
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

                    </ul>
                </div>
            </div>
        </main>
    )
}
export default Dashboard;
