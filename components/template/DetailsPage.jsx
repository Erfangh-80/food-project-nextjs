// styles
import styles from "./DetailsPage.module.css";
// icons
import Dollar from "../icons/Dollar";
import Location from "../icons/Location";

const DetailsPage = (props) => {
  const {
    id,
    name,
    price,
    discount,
    details,
    introduction,
    ingredients,
    recipe,
  } = props;

  return (
    <div className={styles.container}>
      <h2>Details</h2>
      <div className={styles.subContainer}>
        <div className={styles.banner}>
          <img src={`/images/${id}.jpeg`} alt={name} />
          <div>
            <h3>{name}</h3>
            <span className={styles.location}>
              <Location />
              {details[0].Cuisine}
            </span>
            <span className={styles.price}>
              <Dollar />
              {discount ? (price * (100 - discount)) / 100 : price}$
            </span>
            {discount ? (
              <span className={styles.discount}>{discount}$ OFF</span>
            ) : null}
          </div>
        </div>
        <div className={styles.introduction}>
          <p>{introduction}</p>
        </div>
        <div className={styles.details}>
          <h3>details</h3>
          <ul>
            {details.map((detail, index) => (
              <li key={index}>
                <p>{Object.keys(detail)[0]}: </p>
                <span>{Object.values(detail)[0]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.details}>
          <h4>ingredients</h4>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.recipe}>
          <h4>recipe</h4>
          {recipe.map((item, index) => (
            <div
              key={index}
              className={index % 2 ? styles.odd : styles.even}
            >
                <span>{index + 1}</span>
                <p>{item}</p>
            </div>
          ))}
        </div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default DetailsPage;
