import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import firebase from '../../database/fireConnection'
import IconAppetit from "../../assets/icons/logoAppetit"

import { useSelector, useDispatch } from 'react-redux';

function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();

    const dispatch = useDispatch();

    function logar() {
        /* then é uma promessa entra uma requesição e quem requisita, se email e senha der errado entara na condição error */
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('sucesso')
            setTimeout(() => {
                dispatch({ type: 'LOG_IN', usuarioEmail: email })
            }, 2000);
        }).catch(erro => {
            setMsgTipo('erro')
        });
    }

    return (
        <div className="login">
            {useSelector(state => state.usuarioLogado) > 0 ? <Redirect to="/" /> : null}

            <form className="login-form">
                <IconAppetit appetitfill="#ff8822" />
                <h3 className="title">Seja bem-vindo!</h3>
                <p className="subtitle">Nós sabemos a importância de estar sempre de barriga cheia e o quanto isso pode ajudar no seu dia.</p>
                <label htmlFor="email"></label>
                <input
                    className="logim-input"
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    autocomplete="off"

                />
                <label htmlFor="password"></label>
                <input
                    className="logim-input"
                    onChange={(e) => setSenha(e.target.value)}
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Senha"
                />
                <button className="recover-btn btn-logim" type="button">recuperar minha senha</button>
                <button
                    onClick={logar}
                    className="btn-entrar btn-logim"
                    type="button">
                    Entrar
                </button>
                <div>
                    {/*  === é igual e do msm tipo? */}
                    {msgTipo === 'sucesso' && <span>Usuário Logado</span>}
                    {msgTipo === 'erro' && <span>Verifique se a senha e usuário estão corretos</span>}
                </div>
                <p className="copyright-login">Infoway Gestão em Saúde ©,2019.</p>
            </form>
        </div>
    );
}
export default Login;