let posts = [
  {
    title: "Post One",
    body: "This is post one",
    createdAt: new Date().getTime(),
  },
  {
    title: "Post Two",
    body: "This is post two",
    createdAt: new Date().getTime(),
  },
];

let timerId = 0;
function getPosts() {
  clearInterval(timerId);
  timerId = setInterval(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title} - last updated ${Math.round(
        (new Date().getTime() - post.createdAt) / 1000
      )} seconds ago</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ ...post, createdAt: new Date().getTime() });
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error : Something went wrong!");
      }
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.pop();
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong!");
      }
    }, 1000);
  });
}

// function create4thPost(post, callback) {
//   setTimeout(() => {
//     callback(post, getPosts);
//   }, 1000);
// }

// create4thPost(
//   {
//     title: "Post Four",
//     body: "This is post four",
//   },
//   createPost
// );

createPost({
  title: "Post Three",
  body: "This is post three",
})
  .then(getPosts)
  .then(deletePost)
  .then(deletePost)
  .then(deletePost)
  .catch((err) => {
    console.log(err, "Array is empty now");
  });

// deletePost()
//   .then(getPosts)
//   .catch((err) => {
//     console.log(err);
//   });
