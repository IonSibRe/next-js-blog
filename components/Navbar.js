import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.navInner}>
				<Link href="/">
					<a className={styles.navTitle}>Next Blog</a>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
