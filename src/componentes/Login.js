import React, {useState} from 'react'
import Logo from './img/casal-logo_transp-1.png'
import login from './useAuth'

export default function Login() {

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div className="container">
            <div className="login-screen">
                <img src={Logo} alt="Logo Casal" />
                <input type="text" placeholder="Nome" onChange={e => setName(e.target.value)}/>
                <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)}/>
                <button onClick={e => login(name, password)}>Acessar</button>
                <ul><li><a href="/">Recuperar senha</a></li></ul> 
            </div>
            <div className="msg-casal">
                <p>Desenvolvido por Lucas Gabriell © CASAL - 2021</p>
            </div>
        </div>
    )
}
