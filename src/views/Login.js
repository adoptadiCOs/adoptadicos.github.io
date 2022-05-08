import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { openQuestionPopup } from "./components/PopupQuestion";

import { User } from "../models";
import { UserContext } from "../environment/UserProvider";

function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  //TODO:funcionalidad
  const loginEmail = async (e) => {
    e.preventDefault();
    console.log("Email:" + state.email + "Contraseña:" + state.password);

    setUser(User.preview());
    navigate("/");
  };

  //TODO:funcionalidad
  const loginGoogle = async (e) => {
    e.preventDefault();
    console.log(
      "Cuenta-google:" + state.email + "Contraseña:" + state.password
    );
  };

  //TODO:funcionalidad
  const loginTwitter = async (e) => {
    e.preventDefault();
    console.log(
      "Cuenta-google:" + state.email + "Contraseña:" + state.password
    );
  };

  const handleRecoverPassword = (e) => {
    e.preventDefault();
    openQuestionPopup("¿Enviar correo de recuperación de contraseña?", () => {
      console.log(
        "Recuperar contraseña al correo " + state.email + " del form"
      );
    });
  };

  return (
    <div className="login">
      <header className="mt-0 px-5 pb-0 pt-3">
        <h1 className="font-weight-light text-center fw-bold">Inicio Sesión</h1>
      </header>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 col-sm-8 col-md-6 col-lg-4 text-center">
            <div className="text-center my-3 ">
              <img
                src="assets/person-circle.svg"
                className="img-fluid"
                alt="Icon Twitter"
              ></img>
            </div>
            <div className="mb-3">
              <input
                type="email"
                id="email"
                className="form-control "
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Contraseña"
                onChange={handleChange}
              />
            </div>
            <p className="text-center">
              <button
                className="btn-unstyled text-warning"
                onClick={handleRecoverPassword}
              >
                ¿Has olvidado la contraseña?
              </button>
            </p>
            <div className="justify-content-center mt-4">
              <button
                className="btn btn-primary login-button"
                onClick={loginEmail}
              >
                Iniciar Sesión
              </button>
            </div>
            <div className="justify-content-center mt-4">
              <button
                className="btn btn-secondary login-button"
                onClick={() => navigate("/registro")}
              >
                Registrarse
              </button>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="text-center mb-0 col-4 ">
                <div className="btn btn-default" onClick={loginGoogle}>
                  <img
                    src="assets/logo-google.svg"
                    className="img-fluid"
                    alt="Logo Google"
                  ></img>
                </div>
              </div>
              <div className="text-center mb-0 col-4">
                <div className="btn btn-default" onClick={loginTwitter}>
                  <img
                    src="assets/twitter.svg"
                    className="img-fluid"
                    alt="Icon Twitter"
                  ></img>
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
