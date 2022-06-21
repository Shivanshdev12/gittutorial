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
  let [ticket, popcorn, butter, colddrink] = await Promise.all([
    promiseWifeBringsTicket,
    getPopCorn,
    getButter,
    getColdDrink,
  ]);

  console.log(`${ticket},${popcorn},${butter},${colddrink}`);
  return ticket;
};

preMovie().then((m) => console.log(m));

console.log("person4: shows ticket");
console.log("person5: shows ticket");
