const moduleA = {
  x: 42,
  //   getX: function () {
  //   return this.x;
  // },

  getX: function (num) {
    return num;
  },
};
console.log(moduleA.getX(moduleA.x));
