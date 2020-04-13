import React, { useState } from "react";
import Navbar from "../../components/navbar";

import IconResume from "../../assets/icons/IconResume"
import VoltarIcon from "../../assets/icons/voltar";

function Detalhes() {

    const [count, setCount] = useState(0);

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
                            <h3 className="content-title">Detalhes do pedido</h3>
                        </div>
                        <p className="p-info">Aproveite para adicionar alguma observação para este pedido, caso queira.</p>

                        <ul>

                            {ordersList.map((item) => (
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
                            ))}
                        </ul>
                        <h6 className="opcoes">Opções</h6>
                        <p className="texto-pag-detalhes">Escolha dentre as opções de massas abaixo.</p>


                        <form className="form-radio form-radio--responsive">
                            <div className="div-input-radio">
                                <input type="radio" id="male" name="gender" defaultValue="male" />
                                <label htmlFor="male">Milho</label>
                            </div>
                            <div className="div-input-radio">
                                <input type="radio" id="female" name="gender" defaultValue="female" />
                                <label htmlFor="female">Arroz</label><br />
                            </div>
                        </form>


                        <div className="order-separator"></div>

                        <p className="text-obs">Observações</p>

                        <input className="input-obs" type="text" placeholder="Deseja adicionar alguma observação?" id="milho" />

                    </div>


                    <div className="contador-pedidos">

                        <div className="container-contador">
                            <button className="btn-menos" onClick={() => setCount(count - 1)}>-</button>
                            <p>{count}</p>
                            <button className="btn-mais" onClick={() => setCount(count + 1)}>+</button>
                        </div>

                        <div className="container-button">
                            <a href="comprador"> <button className="btn-adicionar">Adicionar</button></a>
                        </div>

                    </div>


                </div>
            </div>
        </main>
    )
}
export default Detalhes;