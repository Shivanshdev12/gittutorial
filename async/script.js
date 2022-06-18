let posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 1000);
}

function create4thPost(post, callback) {
  setTimeout(() => {
    callback(post, getPosts);
  }, 1000);
}

create4thPost({ title: "Post Four", body: "This is post four" }, createPost);

createPost({ title: "Post Three", body: "This is post three" }, getPosts);
