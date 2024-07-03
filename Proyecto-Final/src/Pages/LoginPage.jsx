import React, { useState, useEffect } from "react";
import CustomH1 from "../Components/CustomH1";
import CustomP from "../Components/CustomP";
import CustomCheckbox from "../Components/Checkbox";
import Switch from "../Utils/Switch";
import {
  IconEye,
  IconRedEye,
  IconEyeOff,
  IconFacebookDark,
  IconGoogleDark,
  IconTwitterDark,
  IconFacebookLight,
  IconGoogleLight,
  IconTwitterLight,
} from "../Utils/Icons";

import classesDark from "../Styles/LoginPageDark.module.css";
import classesLight from "../Styles/LoginPageLight.module.css";
import "../styles.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [isLogin, setIsLogin] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const [contraseñaVisible, setContraseñaVisible] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [mode, setMode] = useState("dark");

  const navigate = useNavigate();

  useEffect(() => {
    const usuariosGuardados =
      JSON.parse(localStorage.getItem("usuarios")) || [];
    setUsuarios(usuariosGuardados);
  }, []);

  useEffect(() => {
    document.body.className = mode === "dark" ? "bodyDark" : "bodyLight";
  }, [mode]);

  const validateEmail = (email) => email.includes("@");

  const handleRegister = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (!validateEmail(usuario)) {
      setEmailError("Invalid email");
      return;
    }

    if (!contraseña) {
      setPasswordError("Invalid email or password");
      setContraseñaVisible(true);
      return;
    }

    const nuevoUsuario = { usuario, contraseña };
    const usuariosActualizados = [...usuarios, nuevoUsuario];
    setUsuarios(usuariosActualizados);
    localStorage.setItem("usuarios", JSON.stringify(usuariosActualizados));
    alert("Usuario registrado con éxito");
    setUsuario("");
    setContraseña("");
    setIsLogin(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (!validateEmail(usuario)) {
      setEmailError("Invalid email");
      return;
    }

    if (!contraseña) {
      setPasswordError("Invalid email or password");
      setContraseñaVisible(true);
      return;
    }

    const usuarioEncontrado = usuarios.find(
      (u) => u.usuario === usuario && u.contraseña === contraseña
    );
    if (usuarioEncontrado) {
      alert("Login exitoso");
      navigate("/games");
    } else {
      setPasswordError("Invalid email or password");
      setContraseñaVisible(true);
    }

    setUsuario("");
    setContraseña("");
  };

  const handleRememberMe = (e) => setRememberMe(e.target.checked);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  const currentClasses = mode === "dark" ? classesDark : classesLight;

  return (
    <div className={currentClasses.container}>
      <Switch color="#6e40c9" onChangeHandler={toggleMode} />
      <div className="conteiner-login">
        <CustomH1
          fontFamily="Exo"
          fontSize="20px"
          fontWeight="700"
          className={currentClasses.textModeDos}
        >
          Welcome! Log in or register
        </CustomH1>
        <CustomP
          fontFamily="Exo"
          fontSize="16px"
          fontWeight="400"
          className={currentClasses.textModeDos}
        >
          Log in to find the games you're looking for!
        </CustomP>
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          <div
            className={`${currentClasses.inputBlock} ${
              emailError || passwordError ? currentClasses.error : ""
            }`}
          >
            <input
              type="text"
              name="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Email"
              className={currentClasses.inputField}
            />
            {emailError && (
              <p className={currentClasses.errorMessage}>{emailError}</p>
            )}
          </div>
          <div
            className={`${currentClasses.inputBlock} ${
              passwordError ? currentClasses.error : ""
            }`}
          >
            <div className={currentClasses.passwordContainer}>
              <input
                type={contraseñaVisible ? "text" : "password"}
                name="contraseña"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                placeholder="Password"
                className={currentClasses.inputField}
              />
              <button
                type="button"
                className={currentClasses.eyeButton}
                onClick={() => setContraseñaVisible(!contraseñaVisible)}
              >
                {passwordError ? (
                  <IconRedEye />
                ) : contraseñaVisible ? (
                  <IconEye />
                ) : (
                  <IconEyeOff />
                )}
              </button>
            </div>
            {passwordError && (
              <p className={currentClasses.errorMessage}>{passwordError}</p>
            )}
          </div>
          <div className={currentClasses.checkboxContainer}>
            <CustomCheckbox
              checked={rememberMe}
              onChange={handleRememberMe}
              label="Remember me"
              className={currentClasses.textModeDos}
            />
            <CustomP fontFamily="Open Sans" fontSize="14px" fontWeight="400">
              <a href="#" style={{ color: "#5FE19B", textDecoration: "none" }}>
                Forgot password?
              </a>
            </CustomP>
          </div>
          <button
            type="submit"
            className={currentClasses.customButton}
            style={{
              fontFamily: "Exo",
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            {isLogin ? "Log in" : "Register"}
          </button>
        </form>
        <button
          className={currentClasses.switchButton}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? (
            <CustomP
              fontFamily="Open Sans"
              fontSize="14px"
              fontWeight="400"
              className={currentClasses.textModeDos}
            >
              Not registered yet?{" "}
              <span style={{ color: "#5FE19B" }}>Register Now</span>
            </CustomP>
          ) : (
            <CustomP fontFamily="Open Sans" fontSize="14px" fontWeight="400">
              Already registered? Log in
            </CustomP>
          )}
        </button>
        <div className={currentClasses.lineContainer}>
          <div className={currentClasses.line}></div>
          <CustomP
            margin="20px 0;"
            fontFamily="Open Sans"
            fontSize="14px"
            fontWeight="400"
            className={currentClasses.textModeDos}
          >
            or
          </CustomP>
          <div className={currentClasses.line}></div>
        </div>
        <div className={currentClasses.socialButtons}>
          <button className={currentClasses.facebook}>
            <div className={currentClasses.icon}>
              {mode === "dark" ? <IconFacebookDark /> : <IconFacebookLight />}
            </div>
            <CustomP
              fontFamily="Exo"
              fontWeight="700"
              fontSize="18px"
              className={currentClasses.textMode}
            >
              Login with Facebook
            </CustomP>
          </button>
          <button className={currentClasses.twitter}>
            <div className={currentClasses.icon}>
              {mode === "dark" ? <IconTwitterDark /> : <IconTwitterLight />}
            </div>
            <CustomP
              fontFamily="Exo"
              fontWeight="700"
              fontSize="18px"
              className={currentClasses.textMode}
            >
              Login with Twitter
            </CustomP>
          </button>
          <button className={currentClasses.google}>
            <div className={currentClasses.icon}>
              {mode === "dark" ? <IconGoogleDark /> : <IconGoogleLight />}
            </div>
            <CustomP
              fontFamily="Exo"
              fontWeight="700"
              fontSize="18px"
              className={currentClasses.textMode}
            >
              Login with Google
            </CustomP>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
