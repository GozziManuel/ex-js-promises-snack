function lanciaDado() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = Math.round(Math.random() * (6 - 1) + 1);
      if (value > 1) {
        resolve(value);
      } else {
        reject("inceppato");
      }
    }, 3000);
  });
}
lanciaDado()
  .then((num) => console.log(num))
  .catch((err) => console.error(err));
