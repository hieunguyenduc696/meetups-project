import styles from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";
import { useContext } from "react";

const MeetupItem = (props) => {
  const FavoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = FavoritesCtx.itemIsFavorite(props.id);
  const toggleFavorites = () => {
    console.log(props.id)
    if (itemIsFavorite) {
      FavoritesCtx.removeFavorite(props.id);
    } else {
      FavoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        address: props.address,
        image: props.image,
      });
    }
  };
  return (
    <li className={styles["meetup-item"]}>
      <Card>
        <div>
          <img src={props.image} alt={props.title} className={styles.image} />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h2>{props.title}</h2>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </div>
          <div className={styles.actions}>
            <button className={styles.btn} onClick={toggleFavorites}>
              {itemIsFavorite ? "Remove from favorites" : "To Favorites"}
            </button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
