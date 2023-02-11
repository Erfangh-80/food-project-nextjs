// components
import Attributes from "../module/Attributes";
import Banner from "../module/Banner";
import Companies from "../module/Companies";
import Definition from "../module/Definition";
import Guide from "../module/Guide";
import Instruction from "../module/Instruction";
import Restrictions from "../module/Restrictions";
// styles
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Attributes />
      <Definition />
      <Companies />
      <Instruction />
      <Guide />
      <Restrictions />
    </div>
  );
};

export default HomePage;
