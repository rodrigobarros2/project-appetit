import React from 'react';
import Navbar from "../../components/navbar";

import IconResume from "../../assets/icons/IconResume"

import { GridContainer, Titulo, Button, Container1, Container2 } from './styles';

function Finalizado() {
    return (
        <GridContainer>

            <Navbar />

            <div>
                <Container1>
                    <IconResume />
                    <Titulo>Pedido feito com sucesso</Titulo>
                </Container1>
                <Container2>
                    <a href="/">  <Button cor="rgba(0, 0, 0, 0.88);" bg="transparent" border="2px solid rgba(0, 0, 0, 0.88);">Voltar para lista de pedidos</Button></a>
                    <a href="/pedido"><Button cor="fff" bg="#FF8822">Fazer novo pedido</Button></a>
                </Container2>
            </div>

        </GridContainer>
    );
}

export default Finalizado;