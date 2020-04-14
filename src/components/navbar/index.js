import React from "react";
import IconAppetit from "../../assets/icons/logoAppetit";
import MenuCardapio from "../../assets/icons/menuCardapio";
import MenuCliente from '../../assets/icons/menuCliente';

function Navbar() {
	return (
		<div className="navbar">
			<div className="logo">
				<IconAppetit appetitfill="#FFFFFF" />
			</div>
			<ul className="nav-lista">
				<li className="nav-item">
					<a className="nav-item-a" data-selected={true} href="/pedido"><MenuCardapio className="icon-svg" />pedidos</a>
					<div className="nav-list-sub">
						<a className="nav-item-a-sub" data-selected={true} href="/pedidos/abertos">Em aberto</a>
						<a className="nav-item-a-sub" href="/pedidos/encerrados">Encerrados</a>
					</div>
				</li>
				<li className="nav-item">
					<a className="nav-item-a" href="/userorders"><MenuCliente className="icon-svg" /> cliente</a>
				</li>
			</ul>

			<footer className="footer">
				<p className="copyright-navbar">Infoway Gestão em Saúde &copy;, 2019. </p>
			</footer>
		</div>
	)
}

export default Navbar;


