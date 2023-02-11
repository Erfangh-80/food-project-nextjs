import Link from "next/link";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftBanner}>
        <h2>order food</h2>
        <p>Food Delivery and Takeout!</p>
        <span>
          BotoFood is an online food ordering and delivery platform launched by
          Uber in 2014. Meals are delivered by couriers using cars, scooters,
          bikes, or on foot.
        </span>
        <Link href="/menu">See All</Link>
      </div>
      <div className={styles.rightBanner}>
        <img src="/images/banner.png" alt="food" />
      </div>
    </div>
  );
};

export default Banner;
