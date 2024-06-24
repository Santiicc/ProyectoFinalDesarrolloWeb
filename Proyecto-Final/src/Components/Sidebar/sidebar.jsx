import React from "react";
import { Link } from "react-router-dom";
import styles from "./../../Styles/sidebar.module.css";
import estrella from "./../../assets/icons/estrella.svg";
import calendario from "./../../assets/icons/calendario.svg";
import reloj from "./../../assets/icons/reloj.svg";
import lupita from "./../../assets/icons/lupita.svg"
import best from "./../../assets/icons/best.svg"

const Sidebar = () => {
  return (
    <div>
      <div className={styles.topBox}>
        <p>GameFinder</p>
      </div>
      <div>
        <h1 className={styles.top}>New and trending</h1>
        <p className={styles.top2}>Based on player counts and release date</p>
      </div>
      <div className={styles.sidebar}>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink}>Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/reviews" className={styles.navLink}>Reviews</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/new-releases" className={styles.navLink}>New Releases</Link>
              <ul className={styles.navList2}>
                <li className={styles.navItem2}>
                  <Link to="/new-releases/thisWeek" className={styles.navLink2}>
                    <div className={styles.iconTextContainer}>
                      <img src={estrella} className={styles.icon} alt="estrella" />
                      <span>This week</span>
                    </div>
                  </Link>
                </li>
                <li className={styles.navItem2}>
                  <Link to="/new-releases/thisWeek" className={styles.navLink2}>
                    <div className={styles.iconTextContainer}>
                      <img src={calendario} className={styles.icon} alt="calendario" />
                      <span>This month</span>
                    </div>
                  </Link>
                </li>
                <li className={styles.navItem2}>
                  <Link to="/new-releases/thisWeek" className={styles.navLink2}>
                    <div className={styles.iconTextContainer}>
                      <img src={reloj} className={styles.icon} alt="reloj" />
                      <span>Coming soon</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={styles.navItem}>
              <Link to="/popular" className={styles.navLink}>Popular</Link>
              <ul className={styles.navList2}>
                <li className={styles.navItem2}>
                  <div className={styles.iconTextContainer}>
                    <img src={lupita} className={styles.icon} alt="lupita" />
                    <span>Coming soon</span>
                  </div>
                </li>
                <li className={styles.navItem2}>
                  <div className={styles.iconTextContainer}>
                    <img src={best} className={styles.icon} alt="best" />
                    <span>Best Of The Year</span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
