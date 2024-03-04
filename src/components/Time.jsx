const Time = () => {
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

  if (today === 6 || today === 0 || today === 5)
    return <div>It's the weekend! Let's go out and eat!</div>
  return <div>Stay home. You have work tomorrow.</div>
}

export default Time
