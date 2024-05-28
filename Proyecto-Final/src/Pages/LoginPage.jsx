import React, { useState, useEffect } from "react";
import LoginForm from "../Components/LoginForm"; 
import CustomH1 from "../Components/CustomH1"; 
import CustomP from "../Components/CustomP";
import CustomCheckbox from "../Components/Checkbox";
import classes from "../Pages/LoginPage.module.css"; 

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
        <div className={classes.container}>
            <CustomH1 fontFamily="Exo" fontSize="20px" fontWeight="700"> Welcome! Log in or register</CustomH1>
            <CustomP fontFamily="Exo" fontSize="16px" fontWeight="400">Log in to find the games you're looking for!</CustomP>
            <form onSubmit={isLogin ? handleLogin : handleRegister}>
                <div className={classes.inputBlock}>
                    <input 
                        type="text" 
                        name="usuario" 
                        value={usuario} 
                        onChange={(e) => setUsuario(e.target.value)} 
                        placeholder="Email"
                    />
                </div>
                <div className={classes.inputBlock}>
                    <input 
                        type="password" 
                        name="contraseña" 
                        value={contraseña} 
                        onChange={(e) => setContraseña(e.target.value)} 
                        placeholder="Password"
                    />
                </div>
                <div className={classes.checkboxContainer}>
                    <CustomCheckbox checked={rememberMe} onChange={handleRememberMe} label="Remember me" />
                    <CustomP fontFamily="Open Sans" fontSize="14px" fontWeight="400">
                        <a href="#" style={{ color: '#5FE19B', textDecoration: 'none' }}>Forgot password?</a>
                    </CustomP>
                </div>
                <button type="submit" className="custom-button" style={{ fontFamily: 'Exo', fontSize: '18px', fontWeight: '700' }}>
                    {isLogin ? "Log in" : "Register"}
                </button>
            </form>
            <button className="switch" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 
                    <CustomP fontFamily="Open Sans" fontSize="14px" fontWeight="400">Not registered yet? <span style={{ color: '#5FE19B' }}>Register Now</span></CustomP> :
                    <CustomP fontFamily="Open Sans" fontSize="14px" fontWeight="400">Already registered? Log in</CustomP>
                }
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
