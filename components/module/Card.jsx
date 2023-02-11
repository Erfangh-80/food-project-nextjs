import styles from "./Card.module.css";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";
import Link from "next/link";

const Card = (food) => {
  const { id, name, price, details, discount } = food;

  return (
    <div className={styles.container}>
      <img src={`/images/${id}.jpeg`} alt={name} />
      <div>
        <h4>{name}</h4>
        <div className={styles.details}>
          <Location />
          {details[0].Cuisine}
        </div>
      </div>
      <div className={styles.price}>
        <Dollar />
        {discount ? (
          <span className={styles.discount}>
            {(price * (100 - discount)) / 100}$
          </span>
        ) : (
          <span>{price}$</span>
        )}
        {discount ? <div className={styles.badge}>{discount}%</div> : null}
      </div>
      <Link href={`/menu/${id}`}>See Details</Link>
    </div>
  );
};

export default Card;
