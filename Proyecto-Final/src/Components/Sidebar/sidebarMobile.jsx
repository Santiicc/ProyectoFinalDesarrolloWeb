// src/components/Sidebar/SidebarMobile.jsx

import React from "react";
import { Link } from "react-router-dom";
import avatar from "./../../assets/icons/avatar.svg"
import styles from "./../../Styles/sidebarMobile.module.css"; // Ajuste para un nuevo CSS específico para móvil

const SidebarMobile = () => {
  return (
    <div className={styles.sidebarMobile}>
      <div className={styles.profileSection}>
        <img src={avatar} alt="Profile" className={styles.profileImage} />
        <p className={styles.profileName}>Jane Doe</p>
      </div>
      <nav className={styles.navSection}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/reviews" className={styles.navLink}>Reviews</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/new-releases" className={styles.navLink}>New Releases</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/popular" className={styles.navLink}>Popular</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.bottomSection}>
        <div className={styles.darkModeToggle}>
          <span>Dark mode</span>
          <input type="checkbox" id="darkModeToggle" />
        </div>
        <button className={styles.logoutButton}>Logout</button>
      </div>
    </div>
  );
};

export default SidebarMobile;
