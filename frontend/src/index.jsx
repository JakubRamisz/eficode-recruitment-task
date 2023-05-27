/* global navigator */
import React from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async (lat, lon) => {
  try {
    const response = await fetch(`${baseURL}/weather?lat=${lat}&lon=${lon}`);
    return response.json();
  } catch (error) {
    // continue regardless of error
  }

  return {};
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: '',
    };
  }

  async componentDidMount() {
    const defaultCoordinates = [60.192059, 24.945831];

    navigator.geolocation.getCurrentPosition(async (position) => {
      // on success query api for current coordinates
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const forecast = await getWeatherFromApi(lat, lon);
      this.setState({ icon: forecast.list[1].weather[0].icon.slice(0, -1) });
    }, async () => {
      // on error query api for default coordinates
      const forecast = await getWeatherFromApi(defaultCoordinates[0], defaultCoordinates[1]);
      this.setState({ icon: forecast.list[1].weather[0].icon.slice(0, -1) });
    });
  }

  render() {
    const { icon } = this.state;

    return (
      <div className="icon">
        { icon && <img src={`/img/${icon}.svg`} alt="icon" /> }
      </div>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app'),
);
