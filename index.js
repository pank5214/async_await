console.log("Hello world!");

// async returns a promise => Promise is an object which represents the eventual completion or failure of an async operation.

// await can only use inside an async function, if use somewhereElse it's give an Error.

const API_URL = "https://api.github.com/users/pank5214";
const promiseHandle = async () => {
  const data = await fetch(API_URL);

  // fetch() => Response => Response.json() => jsonValue

  const jsonValue = await data.json();
  console.log(jsonValue);
};


// another way of handling error instead of using "try{} catch{}" method.
promiseHandle().catch((err) => console.log(err));
