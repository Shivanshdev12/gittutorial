console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async () => {
  const promiseWifeBringsTicket = new Promise((res, rej) => {
    setTimeout(() => {
      res("ticket");
    }, 3000);
  });
  const getPopCorn = new Promise((res, rej) => {
    setTimeout(() => {
      res("popcorn");
    }, 3000);
  });
  const getButter = new Promise((res, rej) => {
    setTimeout(() => {
      res("butter");
    }, 3000);
  });
  const getColdDrink = new Promise((res, rej) => {
    setTimeout(() => {
      res("Cold drink");
    }, 3000);
  });
  let ticket = await promiseWifeBringsTicket;
  let popcorn = await getPopCorn;
  let butter = await getButter;
  let colddrink = await getColdDrink;
  console.log(`Wife : I have the ${ticket}`);
  console.log("Husband : we should go in");
  console.log("Wife : No i am hungry");

  console.log(`Husband : I got some ${popcorn}`);
  console.log("Husband : we should go in");
  console.log("Wife : I need butter on my popcorn");

  console.log(`Husband : I got some ${butter} on popcorn`);
  console.log(`Husband : And I got ${colddrink} as well`);
  console.log("Husband : Anything else darling");
  console.log("Wife : lets got we are getting late");
  console.log("Husband : thank you for the reminder *grins*");
  return ticket;
};

preMovie().then((m) => console.log(m));

// const promiseWifeBringsTicket = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("ticket");
//   }, 3000);
// });

// const getPopCorn = promiseWifeBringsTicket.then((t) => {
//   console.log("Wife : i have tickets");
//   console.log("Husband: we should go in");
//   console.log("Wife: no i am hungry");
//   return new Promise((res, rej) => res(`${t} popcorn`));
// });

// const getButter = getPopCorn.then((t) => {
//   console.log("Husband: i got some popcorn");
//   console.log("Husband: we should go in");
//   console.log("Wife: I need butter on my popcorn");
//   return new Promise((res, rej) => res(`${t} butter`));
// });

// getButter.then((t) => console.log(t));

console.log("person4: shows ticket");
console.log("person5: shows ticket");
