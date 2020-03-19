module.exports = {
  push: function (route) {
      let url = "http://localhost:4200"+route;
      open(url, '_self')
  }
};
