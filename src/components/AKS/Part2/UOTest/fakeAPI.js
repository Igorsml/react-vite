function randomDelay(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default function fakeAPIRoutine(likes, succeed = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (succeed)
        resolve(`Successfully saved the like with total likes:${likes}`);
      else reject(`Error occured while saving the likes:${likes}`);
    }, 2000);
  });
}
