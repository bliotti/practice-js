const lister = (max, current) => {
  if (current > max || max < 0 || current < 0) {
    return "NOPE"
  }
  console.log(current+ ".")
  
  if (current === max) {
    return 1
  }

  
  return lister(max,current + 1)

}

lister(6,1)
