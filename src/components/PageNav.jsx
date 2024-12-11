import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/BegginerGuitar">Begginer Guitar</NavLink>
        </li>
        <li>
          <NavLink to="/IntermediateGuitar">Intermediate Guitar </NavLink>
        </li>
        <li>
          <NavLink to="/EarTrainer">Ear Trainer</NavLink>
        </li>
        <li>
          <NavLink to="/FretboardSimulator">Fretboard Simulator </NavLink>
        </li>
        <li>
          <NavLink to="/ChordChartCreator">Chord Chart Creator</NavLink>
        </li>
        <li>
          <NavLink to="/Metronome">Metronome</NavLink>
        </li>
        <li>
          <NavLink to="/Login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
