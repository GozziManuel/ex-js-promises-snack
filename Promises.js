let rememberNumber = null;
function lanciaDado() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = Math.round(Math.random() * (2 - 1) + 1);

      if (value === rememberNumber) {
        resolve("WOW STESSO RISULTATO");
      }
      if (value > 1) {
        resolve(value);
      } else {
        reject(`inceppato ${value}`);
      }
      rememberNumber = value;
    }, 3000);
  });
}
lanciaDado()
  .then((num) => console.log(num))
  .catch((err) => console.error(err));
lanciaDado()
  .then((num) => console.log(num))
  .catch((err) => console.error(err));
