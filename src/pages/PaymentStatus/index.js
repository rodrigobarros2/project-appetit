import React from "react";
import Navbar from "../../components/navbar";

import img from "../../assets/IMG.png"

import VoltarIcon from "../../assets/icons/voltar";

function PaymentStatus() {
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
                obs: 'Não adicionar manteigaa',
            },
        ],
    };


    const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });


    return (
        <main className="#">
            <Navbar className="navbar-novo-pedido" />
            <div class="grid-container">
                <div className="container-1">
                    <div className="conteudo-comprador">
                        <div className="title-container title-container-comprador">
                            <a href="/"><VoltarIcon /></a>
                            <h3 className="content-title">Novo pedido</h3>
                        </div>
                        <h4 className="produtos-comprador">Produtos</h4>
                        <ul>
                            {ordersList1.pedido.map((item) => (
                                <div>
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
                            {ordersList.cliente.map((item) => (
                                <li className="user-order user-order--novo-pedido clientes-passo3">
                                    <div className="user-img"><img src={item.img} alt="" /></div>
                                    <div className="order-details">
                                        <span>{item.name}</span>
                                    </div>
                                </li>
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

                        <form className="form-radio radio-response">
                            <div className="div-input-radio">
                                <input type="radio" id="male" name="gender" defaultValue="male" />
                                <label htmlFor="male">Não está pago</label>
                            </div>
                            <div className="div-input-radio">
                                <input type="radio" id="female" name="gender" defaultValue="female" />
                                <label htmlFor="female">Já está pago</label><br />
                            </div>
                        </form>

                        <p className="text-obs">Em qual data foi realizado?</p>

                        <input className="input-obs" type="text" placeholder="Seleciona uma data" id="milho" />

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