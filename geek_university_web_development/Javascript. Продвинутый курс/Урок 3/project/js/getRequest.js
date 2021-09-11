// only promise without fetch
export const getRequest = (url) => {

  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {

          const error = new Error(xhr.statusText);
          error.code = xhr.status;
          console.log('Error');
          reject(error);
        }
        else {
          resolve(xhr.response);
        }
      }
    };

    xhr.onerror = () => {
      reject(new Error('Network Error'));
    };

    xhr.send();
  });
};

// export const getRequest = (url, cb) => {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status !== 200) {
//         console.log('Error');
//       } else {
//         cb(xhr.responseText);
//       }
//     }
//   };
//   xhr.send();
// };
