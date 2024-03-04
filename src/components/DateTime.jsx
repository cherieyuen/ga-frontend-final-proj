const DateTime = (props) => {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  let today = new Date().getDay()

  const todayDay = weekday[today]

  const restaurantDay = '${props.hours.day}'

  if (todayDay === restaurantDay) {
    return <div>Yes</div>
  }
  return <div>No</div>
}

export default DateTime
