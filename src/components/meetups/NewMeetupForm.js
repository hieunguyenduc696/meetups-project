import { useRef } from "react";

import Card from "../ui/Card";
import styles from "./NewMeetupForm.module.css";

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const newMeetup = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(newMeetup)
  };
  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles["form-control"]}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" required ref={titleInputRef} />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" required ref={imageInputRef} />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" id="address" required ref={addressInputRef} />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            id="description"
            required
            rows={5}
            ref={descriptionInputRef}
          />
        </div>
        <div className={styles.action}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
