console.log("Hello world!");

const API_URL = "https://api.github.com/users/pank5214";
const promiseHandle = async () => {
  try {
    const data = await fetch(API_URL);

    const json = await data.json();
    console.log(json);
  } catch (err) {
    console.log("404 : Not Found", err);
  }
};

promiseHandle();
