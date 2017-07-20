import React from 'react';
import HourListItem from './hour_list_item';


const HoursList = ({ hours }) => {
  const hoursItems = hours.map((hour) => {
    return <HourListItem hour={hour} />
  });


  return (
    <table>
      <thead>
        <tr>
          <td>{hoursItems}</td>
        </tr>
      </thead>
    </table>
  )
}

export default HoursList;
