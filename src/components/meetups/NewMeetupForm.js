import Card from "../ui/Card";
import styles from "./NewMeetupForm.module.css";

const NewMeetupForm = () => {
  return (
    <Card>
      <form className={styles.form}>
        <div className={styles["form-control"]}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" required />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" required />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" id="address" required />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="description">Meetup Description</label>
          <textarea id="description" required rows={5} />
        </div>
        <div className={styles.action}>
            <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
