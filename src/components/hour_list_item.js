import React from 'react';

const HourListItem = ({ hour, onHourChange }) => {
  console.log('hors!!', hour)
  const signeHour = hour.map(x => {
    return x.days
  });
  console.log('--->', hour89)

  const aa = hour89.map(every => {
    return (
      every.map(x => {
        return (
        <td>{x.dayId}</td>
        )
      })
    )
  })
  return (
      <tr>
        <td>8:00 - 9:00</td>
      </tr>
      <tr>
        <td>9:00 - 10:00</td>
      </tr>
      <tr>
        <td>10:00 - 11:00</td>
      </tr>
      <tr>
        <td>11:00 - 12:00</td>
      </tr>
      <tr>
        <td>12:00 - 13:00</td>

      </tr>
      <tr>
        <td>13:00 - 14:00</td>

      </tr>
      <tr>
        <td>14:00 - 15:00</td>

      </tr>
      <tr>
        <td>15:00 - 16:00</td>

      </tr>
      <tr>
        <td>16:00 - 17:00</td>

      </tr>
      <tr>
        <td>17:00 - 18:00</td>

      </tr>
      <tr>
        <td>18:00 - 19:00</td>

      </tr>
      <tr>
        <td>19:00 - 20:00</td>
      </tr>
  )
}

export default HourListItem
