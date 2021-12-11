import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Menu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faUser,
	faTags,
	faParachuteBox,
	faMoneyCheckAlt,
} from '@fortawesome/free-solid-svg-icons';

function Menu() {
	return (
		<div className={styles.container}>
			<nav className={styles.navbar}>
				<div className={styles.logo}>Zabud</div>
				<input type='checkbox' className={styles.click} id='click' />
				<label for='click' className={styles.menubtn}>
					<FontAwesomeIcon icon={faBars} className={styles.icon} />
				</label>
				<ul className={styles.menu}>
					<li className={styles.menu__item}>
						<Link
							to={'/Inicio'}
							className={styles.menu__link}
							id={styles.active}>
							Inicio
						</Link>
					</li>
					<li className={styles.menu__item}>
						<Link to={'/Clientes'} className={styles.menu__link}>
							<FontAwesomeIcon
								icon={faUser}
								className={styles.icon__menu}
							/>
							Clientes
						</Link>
					</li>
					<li className={styles.menu__item}>
						<Link to={'/Productos'} className={styles.menu__link}>
							<FontAwesomeIcon
								icon={faTags}
								className={styles.icon__menu}
							/>
							Productos
						</Link>
					</li>
					<li className={styles.menu__item}>
						<Link to={'/Proveedores'} className={styles.menu__link}>
							<FontAwesomeIcon
								icon={faParachuteBox}
								className={styles.icon__menu}
							/>
							Proveedores
						</Link>
					</li>
					<li className={styles.menu__item}>
						<Link to={'/Factura'} className={styles.menu__link}>
							<FontAwesomeIcon
								icon={faMoneyCheckAlt}
								className={styles.icon__menu}
							/>
							Factura
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Menu;
