import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-project-a9a58-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>All Meetups</h1>
      {!isLoading && <MeetupList items={loadedMeetups} />}
    </div>
  );
};

export default AllMeetupsPage;
