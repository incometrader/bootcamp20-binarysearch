Array.prototype.toTwenty = () => {
  const arr = [];
  for (let i = 1; i <= 20; i += 1) {
    arr.push(i);
  }

  return arr;
};

Array.prototype.toForty = () => {
  const arr = [];
  for (let i = 2; i <= 40; i += 2) {
    arr.push(i);
  }

  return arr;
};

Array.prototype.toOneThousand = () => {
  const arr = [];
  for (let i = 10; i <= 1000; i += 10) {
    arr.push(i);
  }

  return arr;
};

Array.prototype.indexOf = () => {
  throw new Error('You are not allowed to use the indexOf function');
};

Array.prototype.search = function binarySearch(num) {
  const searchResult = { count: 0, index: 0, length: this.length };
  let stopIndex = this.length - 1;
  let startIndex = 0;
  let midIndex;
  if (num === this[stopIndex]) {
    searchResult.index = stopIndex;
    return searchResult;
  }

  if (num === this[startIndex]) {
    searchResult.index = startIndex;
    return searchResult;
  }

  while (startIndex < stopIndex) {
    midIndex = Math.floor((startIndex + stopIndex) / 2);
    if (num === this[midIndex]) {
      searchResult.index = midIndex;
      return searchResult;
    }

    if (num === this[midIndex - 2]) {
      searchResult.index = midIndex - 2;
      return searchResult;
    }

    if (num < this[midIndex]) {
      stopIndex = midIndex - 1;
      searchResult.count += 1;
    } else if (num > this[midIndex]) {
      startIndex = midIndex + 1;
      searchResult.count += 1;
    }
  }

  searchResult.index = -1;
  return searchResult;
};

module.exports = Array.prototype;
