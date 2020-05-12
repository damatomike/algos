var UndergroundSystem = function () {
  this.checkIns = {};
  this.trips = {};
};

UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.checkIns[id] = { t: t, stationName: stationName };
};

UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  let route = this.checkIns[id].stationName + ' to ' + stationName;
  if (route in this.trips === false) {
    this.trips[route] = [];
  }
  this.trips[route].push(t - this.checkIns[id].t);
};

UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  //sum of all checkout times - sum of all check in times / number of passengers
  let route = startStation + ' to ' + endStation;
  let sum = 0;

  for (let i = 0; i < this.trips[route].length; i++) {
    sum += this.trips[route][i];
  }

  return sum / this.trips[route].length;
};
