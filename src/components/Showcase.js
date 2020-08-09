import React, { Component } from 'react';
import '../style.css';
import Clear from '../images/Clear.jpg';
import Thunderstorm from '../images/Thunderstorm.jpg';
import Atmosphere from '../images/Atmosphere.jpg';
import Clouds from '../images/Clouds.jpg';
import Rain from '../images/Rain.jpg';
import Snow from '../images/Snow.jpg';
import Drizzle from '../images/Drizzle.jpg';
class Showcase extends Component {
	getStyle = (main) => {
		let style = {
			backgroundImage: '',
			color: 'white'
		};

		if (main === 'Clouds') {
			style.backgroundImage = `url(${Clouds})`;
		}
		if (main === 'Clear') {
			style.backgroundImage = `url(${Clear})`;
		}
		if (main === 'Drizzle') {
			style.backgroundImage = `url(${Drizzle})`;
		}
		if (main === 'Atmosphere') {
			style.backgroundImage = `url(${Atmosphere})`;
			style.color = '#333';
		}
		if (main === 'Rain') {
			style.backgroundImage = `url(${Rain})`;
		}
		if (main === 'Snow') {
			style.backgroundImage = `url(${Snow})`;
			style.color = '#333';
		}
		if (main === 'Thunderstorm') {
			style.backgroundImage = `url(${Thunderstorm})`;
		}
		return style;
	};

	render() {
		const day = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
		let date = new Date();
		let hours = date.getHours();
		let AmOrPm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12 || 12;
		let minutes = date.getMinutes();

		if (minutes in [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]) {
			minutes = '0' + minutes;
		}

		const {
			city,
			temp,
			description,
			lowTemp,
			highTemp,
			sunrise,
			sunset,
			feelsLike,
			humidity,
			visibility,
			windSpeed,
			main
		} = this.props;
		return (
			<div className="showcase-container">
				<div className="day" style={this.getStyle(main)}>
					<p>{day[date.getDay()]}</p>
				</div>
				<div className="city" style={this.getStyle(main)}>
					<p>{city}</p>
				</div>
				<div className="time" style={this.getStyle(main)}>
					<p>
						{hours}:{minutes}
						{''} {AmOrPm}
					</p>
				</div>
				<div className="temp-container" style={this.getStyle(main)}>
					<p>
						<span className="temp-container-span">{temp}</span>
						<span id="temp-unit"> {'  '}&#8457;</span>
						<br /> {description}
					</p>
				</div>
				<div className="high-low-temp" style={this.getStyle(main)}>
					<p>
						High | Low <br />
						<span className="high-temp-span">{highTemp + ' '} </span> |
						<span className="low-temp-span"> {' ' + lowTemp}</span>
					</p>
				</div>
				<div className="sunrise-sunset" style={this.getStyle(main)}>
					<p>
						<i className="fas fa-sun" /> {sunrise} <br />
						<i className="fas fa-cloud-sun" />
						{' ' + sunset}
					</p>
				</div>
				<div className="feels-like" style={this.getStyle(main)}>
					<p>
						Feels Like <br /> {feelsLike + ' '}&#8457;
					</p>
				</div>
				<div className="humidity" style={this.getStyle(main)}>
					<p>
						Humidity <br /> {humidity}%
					</p>
				</div>
				<div className="visibility" style={this.getStyle(main)}>
					<p>
						Visibility <br /> {visibility} ft
					</p>
				</div>
				<div className="wind-speed" style={this.getStyle(main)}>
					<p>
						Wind Speed <br /> {windSpeed} mph
					</p>
				</div>
			</div>
		);
	}
}

export default Showcase;
