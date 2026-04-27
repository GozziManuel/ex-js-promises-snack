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

// // let id = 2;
// let userId = id;

// METHOD 2
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
