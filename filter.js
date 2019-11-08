const filterOnReviews = (restos, rating) => {
  let newArray = restos.filter(function(rest) {
    return rest.restaurant.user_rating.rating_text === rating;
  });

  return newArray;
};
