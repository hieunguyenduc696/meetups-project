import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (meetup) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(meetup);
    });
  };
  const removeFavoriteHanlder = (meetupId) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  };
  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};
