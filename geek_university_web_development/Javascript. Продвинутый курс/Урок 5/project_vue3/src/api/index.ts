export default {
  getJson(url: string) {
    return fetch(url)
      .then(result => result.json())
      .catch(error => {
        console.log(error);
      })
  },

}
