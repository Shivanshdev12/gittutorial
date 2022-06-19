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

function createPost(post) {
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
      let error = false;
      if (posts.length > 0) {
        posts.pop();
      } else {
        error = true;
      }
      if (!error) {
        resolve();
      } else {
        reject("Error: Array is Empty!");
      }
    }, 1000);
  });
}

createPost({
  title: "Post Three",
  body: "This is post three",
})
  .then(getPosts)
  .catch((err) => {
    console.log(err);
  });

deletePost()
  .then(getPosts)
  .catch((err) => {
    console.log(err);
  });

deletePost()
  .then(getPosts)
  .catch((err) => {
    console.log(err);
  });

deletePost()
  .then(getPosts)
  .catch((err) => {
    console.log(err);
  });

deletePost()
  .then(getPosts)
  .catch((err) => {
    console.log(err);
  });
