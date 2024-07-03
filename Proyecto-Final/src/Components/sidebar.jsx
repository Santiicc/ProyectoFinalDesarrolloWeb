import React from "react";
import styles from '../Styles/sidebar.module.css'
import estrella from "../assets/icons/estrella.svg";
import calendario from "../assets/icons/calendario.svg";
import reloj from "../assets/icons/reloj.svg";
import lupita from "../assets/icons/lupita.svg";
import best from "../assets/icons/best.svg";
import styles2 from '../Styles/sidebar2.module.css'



const Sidebar = ({mode}) => {

  const currentClasses = mode.includes('dark') ? styles2 : styles;

  return (
    <div className={styles.sidebar}>

      <div className="container1">
        <h5 className={currentClasses.title}>Home</h5>
        <h5 className={currentClasses.titles}>Reviews</h5>
        <h5 className={currentClasses.titles}>New Releases</h5>

        <div className={currentClasses.iconTextContainer}>
          <img src={estrella} className={currentClasses.icon} alt="Icono de estrella" />
          <h6 className={currentClasses.miniTitles}>This Week</h6>
        </div>

        <div className={currentClasses.iconTextContainer}>
          <img src={calendario} className={currentClasses.icon} alt="Icono de calendario" />
          <h6 className={currentClasses.miniTitles}>This Month</h6>
        </div>

        <div className={currentClasses.iconTextContainer}>
          <img src={reloj} className={currentClasses.icon} alt="Icono de reloj" />
          <h6 className={currentClasses.miniTitles}>Coming Soon</h6>
        </div>

      </div>

      <div className="container2">

        <h5 className={currentClasses.titles}>Popular</h5>

        <div className={currentClasses.iconTextContainer}>
          <img src={lupita} className={currentClasses.icon} alt="Icono de lupita" />
          <h6 className={currentClasses.miniTitles}>Last Searches</h6>
        </div>

        <div className={currentClasses.iconTextContainer}>
          <img src={best} className={currentClasses.icon} alt="Icono de best" />
          <h6 className={currentClasses.miniTitles}>Best of the Year</h6>
        </div>

      </div>

    </div>
  );
};

export default Sidebar;
