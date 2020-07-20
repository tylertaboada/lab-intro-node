class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length++;
  }

  get(pos) {
    this.items.findIndex(pos);
    this.items.value(pos);
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
