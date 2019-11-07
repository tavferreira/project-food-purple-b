const filterOnReviews = restos => {
  let newArray = restos.filter(function(rest) {
    return rest.restaurant.user_rating.rating_text === "Good";
  });

  return newArray;
};
