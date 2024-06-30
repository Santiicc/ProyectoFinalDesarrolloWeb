import React from "react";
import styles from "./../../Styles/sidebar.module.css"
import estrella from "../../assets/icons/estrella.svg";
import calendario from "../../assets/icons/calendario.svg";
import reloj from "../../assets/icons/reloj.svg";
import lupita from "../../assets/icons/lupita.svg";
import best from "../../assets/icons/best.svg";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className="container1">
        <h5 className={styles.title}>Home</h5>
        <h5 className={styles.titles}>Reviews</h5>
        <h5 className={styles.titles}>New Releases</h5>
        <div className={styles.iconTextContainer}>
          <img src={estrella} className={styles.icon} alt="Icono de estrella" />
          <h6 className={styles.miniTitles}>This Week</h6>
        </div>
        <div className={styles.iconTextContainer}>
          <img src={calendario} className={styles.icon} alt="Icono de calendario" />
          <h6 className={styles.miniTitles}>This Month</h6>
        </div>
        <div className={styles.iconTextContainer}>
          <img src={reloj} className={styles.icon} alt="Icono de reloj" />
          <h6 className={styles.miniTitles}>Coming Soon</h6>
        </div>
      </div>
      <div className="container2">
        <h5 className={styles.titles}>Popular</h5>
        <div className={styles.iconTextContainer}>
          <img src={lupita} className={styles.icon} alt="Icono de lupita" />
          <h6 className={styles.miniTitles}>Last Searches</h6>
        </div>
        <div className={styles.iconTextContainer}>
          <img src={best} className={styles.icon} alt="Icono de best" />
          <h6 className={styles.miniTitles}>Best of the Year</h6>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

