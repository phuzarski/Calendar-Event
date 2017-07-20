import React from 'react';
import HourListItem from './hour_list_item';


const HoursList = ({ hours, days }) => {
  console.log('hours', hours)
  console.log('days', days)

  const hoursItems = hours.map((hour) => {
    return <HourListItem key={hour.hour_number} hour={hours} />
  });
  const daysName = days.map((day) => {
    return <th>{day.day_name}</th>
  });
  // console.log(daysName)

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
            <td>8:00 - 9:00</td>
          </tr>
          <tr>
            <td>9:00 - 10:00</td>
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
      </tbody>
    </table>
  )
}

export default HoursList;
