import React from "react";
import Navbar from "../../components/navbar";

import img from "../../assets/IMG.png"

import SearchIcon from "../../assets/icons/Search"
import IconResume from "../../assets/icons/IconResume"
import VoltarIcon from "../../assets/icons/voltar";

function Dashboard() {
    const ordersList = {
        cuscuz: [
            {
                name: 'Cuscuz simples',
                img: img,
                price: 2.25
            },
            {
                name: 'Cuscuz completo',
                img: img,
                price: 3.25
            },
        ],
        breads: [
            {
                name: 'Pão caseiro',
                img: img,
                price: 2.25
            },
            {
                name: 'Pão caseiro completo',
                img: img,
                price: 2.25
            },
        ],
        salgados: [
            {
                name: 'Pastelzinho de carne',
                img: img,
                price: 2.25
            },
            {
                name: 'Esfirra de frango',
                img: img,
                price: 2.25
            },
            {
                name: 'Enrolado de presunto',
                img: img,
                price: 2.25
            },
        ],
    };

    const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <main className="">
            <Navbar className="navbar-novo-pedido" />
            <div class="grid-container">
                <div className="container-1">
                    <div className="title-container">
                        <a href="/"><VoltarIcon /></a>
                        <h3 className="content-title">Novo pedido</h3>
                    </div>

                    <div className="icon-resume-container">
                        <IconResume class="icon-resume" />
                        <p className="legenda-svg-cozinha">Acompanhe aqui um resumo desta venda</p>
                    </div>
                </div>

                <div className="container-2">
                    <div className="conteudo-container-2">
                        <div className="title-container title-container--2 ">
                            <a className="voltaicon-oculto" href="/"><VoltarIcon /></a>
                            <h3 className="content-title">Informações para o pedido</h3>
                        </div>
                        <p className="p-info">Preencha as informações abaixo para concluir esta venda.</p>

                        <p className="passo-bar-progress">Passo 1 de 3</p>

                        <div className="progress-bar-gray">
                            <div className="progress-bar-orange">

                            </div>
                        </div>

                        <h6 className="esta-vendendo">O que você está vendendo?</h6>

                        <div className="search-area">
                            <SearchIcon />
                            <input className="order-search" type="text" placeholder="Procure o produto aqui" />
                        </div>

                        <ul>
                            <h6 className="foods">Cuzcuz</h6>
                            {ordersList.cuscuz.map((item, i) => (
                                <a href="/detalhes" key={i}><li className="user-order user-order--novo-pedido">
                                    <div className="user-img"><img src={item.img} alt="" /></div>
                                    <div className="order-details">
                                        <span>{item.name}</span>
                                    </div>
                                    <div>
                                        <b className="user-price">{formatter.format(item.price)}</b>
                                    </div>
                                </li></a>
                            ))}
                            <div className="order-separator"></div>
                            <h6 className="foods">Pães</h6>
                            {ordersList.breads.map((item, i) => (
                                <a href="/detalhes" key={i}><li className="user-order user-order--novo-pedido">
                                    <div className="user-img"><img src={item.img} alt="" /></div>
                                    <div className="order-details">
                                        <span>{item.name}</span>
                                    </div>
                                    <div>
                                        <b className="user-price">{formatter.format(item.price)}</b>
                                    </div>
                                </li></a>
                            ))}
                            <div className="order-separator"></div>
                            <h6 className="foods">Salgados</h6>
                            {ordersList.salgados.map((item, i) => (
                                <a href="/detalhes" key={i}><li className="user-order user-order--novo-pedido">
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
                                <a href="/comprador"><button className="btn-scrol-pedido">avançar</button></a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Dashboard;