import React from "react";
import restaurants from "../sample-restaurants";
import PropTypes from 'prop-types';

class Landing extends React.Component {
  static propTypes = {
    history: PropTypes.object,
  };

  state = {
    display: false,
    title: "",
    url: "",
  };

  displayList = () => {
    const { display } = this.state;
    this.setState({ display: !display });
  };

  getTitle = (restaurant) => {
    const { title, url } = restaurant;
    this.setState({ url: url, title: title, display: false });
  };

  goToRestaurant = () => {
    const {url} = this.state;
    this.props.history.push(`/restaurant/${url}`);
  };

  render() {
    return (
      <div className="restaurant_select">
        <div className="restaurant_select_top">
          <div
            onClick={this.displayList}
            className="restaurant_select_top-header font-effect-outline"
          >
            {this.state.title ? `${this.state.title}` : "Выбери рeсторан"}
          </div>
          <div className="arrow_picker">
            <div className="arrow_picker-up"></div>
            <div className="arrow_picker-down"></div>
          </div>
          {this.state.display ? (
            <div className="restaurant_select_bottom">
              <ul>
                {restaurants.map((restaurant) => {
                  return (
                    <li
                      onClick={() => this.getTitle(restaurant)}
                      key={restaurant.id}
                    >
                      {restaurant.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </div>
        {this.state.title ? (
          <button onClick={this.goToRestaurant}>Перейти в ресторан</button>
        ) : null}
      </div>
    );
  }
}

export default Landing;
