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
  setTimeout(() => {
    posts.push({
      ...post,
      createdAt: new Date().getTime(),
    });
    callback();
  }, 1000);
}

function create4thPost(post, callback) {
  setTimeout(() => {
    callback(post, getPosts);
  }, 1000);
}

create4thPost(
  {
    title: "Post Four",
    body: "This is post four",
  },
  createPost
);

createPost(
  {
    title: "Post Three",
    body: "This is post three",
  },
  getPosts
);
