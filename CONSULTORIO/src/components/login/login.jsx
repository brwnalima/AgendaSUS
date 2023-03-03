import React from 'react';
import '../login/login.css'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="row1">
      <div className="col-md-4 mx-auto p-2">
        <div className="card1">
          <div className="login-box">
            <div className="login-snip">
              <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
              <label htmlFor="tab-1" className="tab">Login</label>
              <input id="tab-2" type="radio" name="tab" className="sign-up" />
              <label htmlFor="tab-2" className="tab">Cadastro</label>
              <div className="login-space">
                <div className="login">
                  <div className="group">
                    <label htmlFor="user" className="label">Username</label>
                    <input id="user" type="text" className="input" placeholder="Digite seu username" />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">Password</label>
                    <input id="pass" type="password" className="input" data-type="password" placeholder="Digite sua senha" />
                  </div>
                  <div className="group">
                    <input id="check" type="checkbox" className="check" defaultChecked />
                    <label htmlFor="check"><span className="icon"></span> Lembrar-me</label>
                  </div>
                  <div className="group">
                    <Link to='/admin'><input type="submit" className="button"  value="Login" /></Link>
                  </div>
                  <div className="hr"></div>
                  <div className="foot">
                  <input id="tab-3" type="radio" name="tab" className="forgot-pass" />
                    <label htmlFor="tab-3" className="tab">Esqueceu sua senha?</label>
                  </div>
                </div>
                <div className="sign-up-form">
                  <div className="group">
                    <label htmlFor="user" className="label">Username</label>
                    <input id="user" type="text" className="input" placeholder="Crie o seu Username" />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">Senha</label>
                    <input id="pass" type="password" className="input" data-type="password" placeholder="Crie sua senha" />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">Repita a Senha</label>
                    <input id="pass" type="password" className="input" data-type="password" placeholder="Sua senha novamente" />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">Email</label>
                    <input id="pass" type="text" className="input" placeholder="Digite seu Email" />
                  </div>
                  <div className="group">
                    <input type="submit" className="button" value="Cadastre-se" />
                  </div>
                  <div className="hr"></div>
                  <div className="foot">
                    <label htmlFor="tab-1">Ja tenho conta</label>
                  </div>
                </div>
                <div className="forgot-pass-form">
                  <div className="group">
                    <label htmlFor="pass" className="label">Email</label>
                    <input id="pass" type="text" className="input" placeholder="Digite seu Email" />
                  </div>
                  <div className="group">
                    <input type="submit" className="button" value="Enviar" />
                  </div>
                  <div className="hr"></div>
                  <div className="foot">
                    <label htmlFor="tab-1">Ja tenho conta</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
