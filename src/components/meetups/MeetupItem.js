import styles from "./MeetupItem.module.css";
import Card from "../ui/Card";

const MeetupItem = (props) => {
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
            <button className={styles.btn}>To Favorites</button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
