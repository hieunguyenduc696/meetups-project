import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

const FavoritesPage = () => {
  const FavoritesCtx = useContext(FavoritesContext);

  let content;
  if (FavoritesCtx.totalFavorites === 0) {
    content = <p>There is no favorites meetup.</p>;
  } else {
    content = <MeetupList items={FavoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1 style={{ textAlign: "center" }}>My Favorites</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
