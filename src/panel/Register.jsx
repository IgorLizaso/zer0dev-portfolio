import React from 'react';
import styles from '../css/panel/Register.module.css';

function Register() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Crear Cuenta</h1>
      <form className={styles.form}>
        <input type="text" placeholder="Nombre de usuario" className={styles.input} />
        <input type="email" placeholder="Correo electrónico" className={styles.input} />
        <input type="password" placeholder="Contraseña" className={styles.input} />
        <button type="submit" className={styles.button}>Registrarse</button>
      </form>
      <a href="/panel/login" className={styles.link}>¿Ya tienes cuenta? Inicia sesión</a>
    </div>
  );
}

export default Register;
