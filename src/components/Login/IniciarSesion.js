import React from 'react';
import styles from '../../styles/Login.module.css';
function IniciarSesion() {
	return (
		<div className={styles.container}>
			<form class={styles.loginForm}>
				<input
					className={styles.login__input}
					type='text'
					placeholder='username'
				/>
				<input
					className={styles.login__input}
					type='password'
					placeholder='password'
				/>
				<button className={styles.login__button}>login</button>
			</form>
		</div>
	);
}

export default IniciarSesion;
