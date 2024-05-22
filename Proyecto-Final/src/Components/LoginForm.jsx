// LoginForm.jsx
import React from "react";

const LoginForm = ({ usuario, contraseña, setUsuario, setContraseña, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label>Usuario</label>
            <input 
                type="text" 
                name="usuario" 
                value={usuario} 
                onChange={(e) => setUsuario(e.target.value)} 
            />
            <label>Contraseña</label>
            <input 
                type="password" 
                name="contraseña" 
                value={contraseña} 
                onChange={(e) => setContraseña(e.target.value)} 
            />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default LoginForm;
