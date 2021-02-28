function positiveOrNegative(number) {
  if (number%2 == 0) {
    console.log("positive");
  }
  else if (number%2 != 0) {
    console.log("negative");
  }
  else {
    console.log("zero");
  }
}

positiveOrNegative(10);