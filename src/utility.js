//import moment from "moment";

export var getUTCEpoch = function(date) {
  return moment.utc(date).valueOf();
};

export var customerConfig = {
  dateFormat: {
    hour: "%l %p",
    day: "%b %e '%y",
    week: "%b %e '%y",
    month: "%b '%y",
    year: "%b"
  }
};
