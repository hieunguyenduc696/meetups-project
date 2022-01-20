import MeetupItem from "./MeetupItem";

import styles from './MeetupList.module.css'
const MeetupList = (props) => {
  return (
    <ul className={styles['meetup-list']}>
      {props.items.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          title={meetup.title}
          description={meetup.description}
          address={meetup.address}
          image={meetup.image}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
