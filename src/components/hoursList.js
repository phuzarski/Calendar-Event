import React from 'react';


const HoursList = ({ hours, days, selectedHour }) => {
  console.log('hours', hours)
  console.log('days', days)
  console.log('selectedHour', selectedHour)

  // const hoursItems = hours.map((hour) => {
  //   return <HourListItem key={hour.hour_number} hour={hours} />
  // });
  const hour89 = hours.map(x => {
    return x.days
  });
  console.log('--->', hour89)

  const aa = hour89.map(every => {
    return (
      every.map(x => {
        return (
        <td onClick={() => console.log(x.dayId)}>
          {x.dayId}
        </td>
        )
      })
    )
  })
  console.log('selectedHour', selectedHour)
  console.log('aa', aa)
  const daysName = days.map((day) => {
    return <th>{day.day_name}</th>
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Unhrezeit</th>
          {daysName}
        </tr>
      </thead>
      <tbody>
          <tr>
            <td className="hours">8:00 - 9:00</td>
            {aa[0]}
          </tr>
          <tr>
            <td>9:00 - 10:00</td>
            {aa[1]}
          </tr>
          <tr>
            <td>10:00 - 11:00</td>
            {aa[2]}
          </tr>
          <tr>
            <td>11:00 - 12:00</td>
            {aa[3]}
          </tr>
          <tr>
            <td>12:00 - 13:00</td>
            {aa[4]}

          </tr>
          <tr>
            <td>13:00 - 14:00</td>
            {aa[5]}

          </tr>
          <tr>
            <td>14:00 - 15:00</td>
            {aa[6]}

          </tr>
          <tr>
            <td>15:00 - 16:00</td>
            {aa[7]}

          </tr>
          <tr>
            <td>16:00 - 17:00</td>
            {aa[8]}

          </tr>
          <tr>
            <td>17:00 - 18:00</td>
            {aa[9]}

          </tr>
          <tr>
            <td>18:00 - 19:00</td>
            {aa[10]}

          </tr>
          <tr>
            <td>19:00 - 20:00</td>
            {aa[11]}

          </tr>
      </tbody>
    </table>
  )
}

export default HoursList;
