import { async } from 'regenerator-runtime';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    let data = await Promise.race([fetch(url), timeout(5)]);
    // const data = await ;
    const dataJson = await data.json();
    return dataJson;
  } catch (error) {
    throw error;
  }
};
