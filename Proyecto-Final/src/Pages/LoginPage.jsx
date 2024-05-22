// LoginPage.jsx
import React, { useState, useEffect } from "react";
import LoginForm from "../Components/LoginForm"; 
import MiBoton from "../Components/button";
import CustomH1 from "../Components/CustomH1"; 
import CustomP from "../Components/CustomP";
import CustomCheckbox from "../Components/Checkbox";

const LoginPage = () => {
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [usuarios, setUsuarios] = useState([]);
    const [isLogin, setIsLogin] = useState(true);
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];
        setUsuarios(usuariosGuardados);
    }, []);

    const handleRegister = (e) => {
        e.preventDefault();
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
        const usuarioEncontrado = usuarios.find(
            (u) => u.usuario === usuario && u.contraseña === contraseña
        );
        if (usuarioEncontrado) {
            alert("Login exitoso");
        } else {
            alert("Usuario o contraseña incorrectos");
        }
        setUsuario("");
        setContraseña("");
    };

    const handleRememberMe = (e) => {
        setRememberMe(e.target.checked);
    };

    return (
        <div className="container">
            <CustomH1 fontFamily="Exo" fontSize="20px" fontWeight="700"> Welcome! Log in or register</CustomH1>
            <CustomP fontFamily="Exo" fontSize="16px" fontWeight="400">Log in to find the games you're looking for!</CustomP>
            <form onSubmit={isLogin ? handleLogin : handleRegister}>
                <label>Email</label>
                <input 
                    type="text" 
                    name="usuario" 
                    value={usuario} 
                    onChange={(e) => setUsuario(e.target.value)} 
                />
                <label>Password</label>
                <input 
                    type="password" 
                    name="contraseña" 
                    value={contraseña} 
                    onChange={(e) => setContraseña(e.target.value)} 
                />
                <div className="extra-options">
                    <CustomCheckbox checked={rememberMe} onChange={handleRememberMe} />
                    <CustomP fontFamily="Exo" fontSize="14px" fontWeight="400">Remember me</CustomP>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit">{isLogin ? "Log in" : "Register"}</button>
            </form>
            <button className="switch" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Not registered yet? Register now" : "Already registered? Log in"}
            </button>
            <div className="social-login-buttons">
                <button className="facebook">Login with Facebook</button>
                <button className="twitter">Login with Twitter</button>
                <button className="google">Login with Google</button>
            </div>
        </div>
    );
};

export default LoginPage;
