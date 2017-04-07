var moment = require('moment');
// moment is a date thingy

function dateFormat(date) {
  m = moment.utc(date);//utc=universal time
    //parse the date, then format output
  return m.parseZone().format("dddd, MMMM Do YYYY, h:mm a");
}
// helpers manipulate data for display
var helpers = {
  dateFormatter : dateFormat
};

module.exports = helpers;