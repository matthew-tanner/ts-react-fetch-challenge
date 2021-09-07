import React, { Component } from "react";
import WeatherDisplay from "./WeatherDisplay";

interface WeatherIndexState {
  lat: number;
  long: number;
  loc_name: string;
  temp: number;
  feels_like: number;
  temp_desc: string;
}

class WeatherIndex extends Component<{}, WeatherIndexState> {
  constructor(props: any) {
    super(props);
    this.state = {
      lat: 0,
      long: 0,
      loc_name: "",
      temp: 0,
      feels_like: 0,
      temp_desc: "",
    };
    this.success = this.success.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  success(position: any) {
    this.setState({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
    this.getWeather();
  }

  getGeo() {
    navigator.geolocation.getCurrentPosition(this.success);
  }

  getWeather() {
    const key = "629a82e5d646cf93d0af2764851b73c4";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&units=imperial&appid=${key}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          temp: data.main.temp,
          feels_like: data.main.feels_like,
          temp_desc: data.weather[0].description,
          loc_name: data.name,
        });
      });
  }

  componentDidMount() {
    this.getGeo();
  }

  render() {
    return (
      <div>
        <WeatherDisplay
          temp={this.state.temp}
          feels_like={this.state.feels_like}
          temp_desc={this.state.temp_desc}
          loc_name={this.state.loc_name}
        />
      </div>
    );
  }
}

export default WeatherIndex;
