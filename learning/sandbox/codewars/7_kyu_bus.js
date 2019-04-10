var number = function(busStops) {
  let totalOn = 0;
  let totalOff = 0;
  busStops.forEach(function(stop) {
    let [on, off] = stop;
    totalOn += on;
    totalOff += off;
  });
  let countOnBus = totalOn - totalOff;
  return countOnBus;
};

console.log(number([[10, 0], [3, 5], [5, 8]]));
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]));
console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]));
