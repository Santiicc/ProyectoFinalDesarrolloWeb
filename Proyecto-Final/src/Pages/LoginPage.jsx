import React, { useState, useEffect } from "react";
import CustomH1 from "../Components/CustomH1";
import CustomP from "../Components/CustomP";
import CustomCheckbox from "../Components/Checkbox";
import {
  IconEye,
  IconRedEye,
  IconEyeOff,
  IconFacebook,
  IconTwitter,
  IconGoogle,
} from "../Utils/Icons";
//import classes from "../Pages/LoginPageLight.module.css";  // Importa tus estilos aquí
import classes from "../Pages/LoginPage.module.css";  // Importa tus estilos aquí
const LoginPage = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [isLogin, setIsLogin] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const [contraseñaVisible, setContraseñaVisible] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];
    setUsuarios(usuariosGuardados);
  }, []);

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
    } else {
      setPasswordError("Invalid email or password");
      setContraseñaVisible(true);
    }

    setUsuario("");
    setContraseña("");
  };

  const handleRememberMe = (e) => setRememberMe(e.target.checked);

  return (
    <div className={classes.container}>
      <div className="conteiner-login">
        <CustomH1 fontFamily="Exo" fontSize="20px" fontWeight="700" className={classes.textModeDos}>
          Welcome! Log in or register
        </CustomH1>
        <CustomP fontFamily="Exo" fontSize="16px" fontWeight="400" className={classes.textModeDos}>
          Log in to find the games you're looking for!
        </CustomP>
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          <div className={`${classes.inputBlock} ${emailError || passwordError ? classes.error : ''}`}>
            <input
              type="text"
              name="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Email"
              className={classes.inputField}
            />
            {emailError && <p className={classes.errorMessage}>{emailError}</p>}
          </div>
          <div className={`${classes.inputBlock} ${passwordError ? classes.error : ''}`}>
            <div className={classes.passwordContainer}>
              <input
                type={contraseñaVisible ? "text" : "password"}
                name="contraseña"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                placeholder="Password"
                className={classes.inputField}
              />
              <button
                type="button"
                className={classes.eyeButton}
                onClick={() => setContraseñaVisible(!contraseñaVisible)}
              >
                {passwordError ? <IconRedEye /> : contraseñaVisible ? <IconEye /> : <IconEyeOff />}
              </button>
            </div>
            {passwordError && <p className={classes.errorMessage}>{passwordError}</p>}
          </div>
          <div className={classes.checkboxContainer}>
            <CustomCheckbox
              checked={rememberMe}
              onChange={handleRememberMe}
              label="Remember me"
              className={classes.textModeDos}
            />
            <CustomP
              fontFamily="Open Sans"
              fontSize="14px"
              fontWeight="400"
              
            >
              <a
                href="#"
                style={{ color: "#5FE19B", textDecoration: "none" }}
              >
                Forgot password?
              </a>
            </CustomP>
          </div>
          <button
            type="submit"
            className={classes.customButton} 
            style={{
              fontFamily: "Exo",
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            {isLogin ? "Log in" : "Register"}
          </button>
        </form>
        <button className={classes.switchButton} onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? (
            <CustomP fontFamily="Open Sans" fontSize="14px" fontWeight="400" className={classes.textModeDos}>
              Not registered yet?{" "}
              <span style={{ color: "#5FE19B" }}>Register Now</span>
            </CustomP>
          ) : (
            <CustomP fontFamily="Open Sans" fontSize="14px" fontWeight="400">
              Already registered? Log in
            </CustomP>
          )}
        </button>
        <div className={classes.lineContainer}>
          <div className={classes.line}></div>
          <CustomP
            margin="20px 0;"
            fontFamily="Open Sans"
            fontSize="14px"
            fontWeight="400"
            className={classes.textModeDos}
            
          >
            or
          </CustomP>
          <div className={classes.line}></div>
        </div>
        <div className={classes.socialButtons}>
          <button className={classes.facebook}>
            <div className={classes.icon}>
              <IconFacebook />
            </div>
            <CustomP
              fontFamily="Exo"
              fontWeight="700"
              fontSize="18px"
              className={classes.textMode}
            >
              Login with Facebook
            </CustomP>
          </button>
          <button className={classes.twitter}>
            <div className={classes.icon}>
              <IconTwitter />
            </div>
            <CustomP
              fontFamily="Exo"
              fontWeight="700"
              fontSize="18px"
              className={classes.textMode}
            >
              Login with Twitter
            </CustomP>
          </button>
          <button className={classes.google}>
            <div className={classes.icon}>
              <IconGoogle />
            </div>
            <CustomP
              fontFamily="Exo"
              fontWeight="700"
              fontSize="18px"
              className={classes.textMode}
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
