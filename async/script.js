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
        resolve("Post added successfully");
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
        resolve("Post deleted successfully");
      } else {
        reject("Error: Array is Empty!");
      }
    }, 5000);
  });
}

const user = {
  username: "Shivansh",
  lastactivitytime: "",
};

function updateLastActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.lastactivitytime = new Date().toLocaleTimeString();
      resolve(user.lastactivitytime);
    }, 1000);
  });
}

// createPost({
//   title: "Post Three",
//   body: "This is post three",
// })
//   .then(getPosts)
//   // .then(deletePost)
//   .catch((err) => {
//     console.log(err);
//   });

// deletePost()
//   .then(getPosts)
//   .catch((err) => {
//     console.log(err);
//   });

// const p1 = Promise.resolve("Hello World");
// const p2 = 10;
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "Goodbye");
// });

// Promise.all([p1, p2, p3]).then((values) => console.log(values));

// const promisePost = createPost({
//   title: "Post Four",
//   body: "This is post Four",
// });

// const lastActive = updateLastActivityTime();
// Promise.all([promisePost, lastActive])
//   .then(() => {
//     console.log(posts);
//     console.log(user.lastactivitytime);
//   })
//   .then(deletePost)
//   .then(() => {
//     console.log("New set of posts:", posts);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function doPost() {
  const response = await createPost({
    title: "Post Three",
    body: "This is post three",
  });
  console.log(response);
  getPosts();
  const deleteresponse = await deletePost();
  console.log(deleteresponse);
}

async function lastactivity() {
  const response = await Promise.all([
    createPost({ title: "Post Four", body: "This is post Four" }),
    updateLastActivityTime(),
  ]);
  console.log(response);
  const deleteresponse = await deletePost();
  console.log(deleteresponse);
  console.log("New set of posts", posts);
}

doPost();
lastactivity();
