import moment from 'moment' // we have imported entity moment with the help of which we can work with date and time

import 'moment-precise-range-plugin'

export const getTodayDateFormat = (date) => {
  return moment(date).format("MMM Do YY");
}

export const getPreciseDifDifference = (date1, date2) => {
  const date1Format = moment(date1) // for what we use here function
  const date2Format = moment(date2) // for what we use here function

  return moment.preciseDiff(date1Format, date2Format)
}