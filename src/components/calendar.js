import React, { Component } from 'react';
import { days, hours } from './dateData'
import HoursList from './hoursList';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = { days: days, hours: hours }
  }

  render() {
  return (
    <HoursList hours={this.state.hours} days={this.state.days} />

  )

    //   <div>
    //   <div className="header">
    //     <h2>Terminplaner</h2>
    //     <div className="control">
    //       <span className="prev">&lt;</span>
    //       <span className="date">6 &mdash; 12. Juli 2015</span>
    //       <span className="next">&gt;</span>
    //     </div>
    //     <span className="month"></span>
    //     <span className="slider"></span>
    //   </div>
    //   <div className="table">
		// 		<div className="events">
		// 			<div className="day" data-day="1">
		// 				<a href="">
    //           <div className="event q4 past" draggable="true" style={{ top: 0 }}>
		// 					<p className="hours"></p>
		// 					<p className="description">Meier</p>
		// 				</div>
    //       </a>
		// 			</div>
		// 			<div className="day" data-day="2">
    //
		// 			</div>
		// 			<div className="day" data-day="3">
    //
		// 			</div>
		// 			<div className="day" data-day="4">
    //
		// 			</div>
		// 			<div className="day" data-day="5">
    //
		// 			</div>
		// 			<div className="day"  data-day="6"></div>
		// 			<div className="day" data-day="7"></div>
		// 		</div>
    //   <table>
    //     <thead>
    //       <tr>
    //         <td>Uhrzeit</td>
    //         <td>Mo 06.07.</td>
    //         <td>Di 07.07.</td>
    //         <td className="active">Mi 08.07.</td>
    //         <td>Do 09.07.</td>
    //         <td>Fr 10.07.</td>
    //         <td className="free" >Sa 11.07.</td>
    //         <td className="free" >So 12.07.</td>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <td className="hour">08:00</td>
    //         <td
    //           onClick={() => console.log('chuj')}></td>
    //         <td></td>
    //         <td className="active"></td>
    //         <td></td>
    //         <td ></td>
    //         <td ></td>
    //         <td ></td>
    //       </tr>
    //       <tr>
    //         <td className="hour">09:00</td>
    //         <td></td>
    //         <td></td>
    //         <td className="active"></td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //       </tr>
    //       <tr>
    //         <td className="hour">10:00</td>
    //         <td></td>
    //         <td></td>
    //         <td className="active"></td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //       </tr>
    //       <tr>
    //         <td className="hour">11:00</td>
    //         <td></td>
    //         <td></td>
    //         <td className="active"></td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //       </tr>
    //       <tr>
    //         <td className="hour">12:00</td>
    //         <td></td>
    //         <td></td>
    //         <td className="active"></td>
    //         <td></td>
    //         <td ></td>
    //         <td ></td>
    //         <td ></td>
    //       </tr>
    //       <tr>
    //         <td className="hour">13:00</td>
    //         <td></td>
    //         <td></td>
    //         <td className="active"></td>
    //         <td ></td>
    //         <td ></td>
    //         <td ></td>
    //         <td ></td>
    //       </tr>
    //       <tr>
    //         <td className="hour">14:00</td>
    //         <td></td>
    //         <td></td>
    //         <td className="active"></td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //       </tr>
    //       <tr>
    //         <td className="hour">15:00</td>
    //         <td></td>
    //         <td></td>
    //         <td className="active"></td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //       </tr>
    //       <tr>
    //         <td className="hour">16:00</td>
    //         <td></td>
    //         <td></td>
    //         <td className="active"></td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //       </tr>
    //       <tr>
    //         <td className="hour">17:00</td>
    //         <td></td>
    //         <td></td>
    //         <td className="active"></td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //       </tr>
    //       <tr>
    //         <td className="hour">18:00</td>
    //         <td></td>
    //         <td></td>
    //         <td className="active"></td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //       </tr>
    //       <tr>
    //         <td className="hour">19:00</td>
    //         <td></td>
    //         <td></td>
    //         <td className="active"></td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //       </tr>
    //       <tr>
    //         <td className="hour">20:00</td>
    //         <td></td>
    //         <td></td>
    //         <td className="active"></td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
    // </div>
    // )
  }
}

export default Calendar;
