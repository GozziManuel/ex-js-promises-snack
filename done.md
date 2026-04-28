SNACK 1
// METHOD 1
// function getPostId(userId) {
// return new Promise((resolve, reject) => {
// fetch(`https://dummyjson.com/users/${userId}`)
// .then((response) => response.json())
// .then((title) => resolve(title))
// .catch((error) => reject(error));
// });
// }
// function getPostTitle(id) {
// return new Promise((resolve, reject) => {
// fetch(`https://dummyjson.com/posts/${id}`)
// .then((response) => response.json())
// .then((title) => resolve(title.title))
// .catch((error) => reject(error));
// });
// }

// getPostTitle(2)
// .then((title) => console.log(title))
// .catch((error) => console.error(error));

// getPostId(2)
// .then((title) => console.log(title))
// .catch((error) => console.error(error));

// METHOD 2
// // let id = 2;
// let userId = id;

// const getPostId = new Promise((resolve, reject) => {
// fetch(`https://dummyjson.com/users/${userId}`)
// .then((response) => response.json())
// .then((title) => resolve(title))
// .catch((error) => reject(error));
// });

// const getPostTitle = new Promise((resolve, reject) => {
// fetch(`https://dummyjson.com/posts/${id}`)
// .then((response) => response.json())
// .then((title) => resolve(title.title))
// .catch((error) => reject(error));
// });

// Promise.all([getPostTitle, getPostId]).then((values) => {
// console.log(values);
// });

---

Snack 2
let rememberNumber = null;
function lanciaDado() {
return new Promise((resolve, reject) => {
setTimeout(() => {
const value = Math.round(Math.random() \* (2 - 1) + 1);

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
