const compare = (a,b) => {
    const restA = a.restaurant.average_cost_for_two;
    const restB = b.restaurant.average_cost_for_two;
  
  let compare = 0;
  if (restA > restB){
      compare = 1
  } 
  else if (restA < restB){
      compare = -1
  }
  return compare;
  }
  
  const sortByPrice = restoArray => {
      return restoArray.sort(compare);
  }
  