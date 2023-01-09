import React from "react";
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import Burger from "./Burger";
import PropTypes from 'prop-types';
import sampleBurgers from "../sample-burgers";
import base from "../base";

class App extends React.Component {
  static propTypes = {
    match: PropTypes.object,
    
  }

  state = {
    burgers: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match;

    const localStorageRef = localStorage.getItem(params.restaurantId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.restaurantId}/burgers`, {
      context: this,
      state: "burgers",
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentDidUpdate() {
    const { params } = this.props.match;
    localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order));
  }

  addBurger = (burger) => {
    //1. Делаем копию объекта state
    const burgers = { ...this.state.burgers };
    //2. Добавляем новый бургер в переменную burgers
    burgers[`burger${Date.now()}`] = burger;
    //3. Записываем наш новый объект burgers в state
    this.setState({ burgers: burgers });
  };

  updateBurger = (key, updatedBurger) => {
    //1. Делаем копию объекта state
    const burgers = { ...this.state.burgers };
    //2. Обновляем нужный бургер
    burgers[key] = updatedBurger;
    //3. Записываем наш новый объект burgers в state
    this.setState({ burgers: burgers });
  };

  deleteBurger = (key) => {
    //1. Делаем копию объекта state
    const burgers = { ...this.state.burgers };
    //2. Удаляем бургер
    burgers[key] = null;
    //3. Записываем наш новый объект burgers в state
    //3. Записываем наш новый объект burgers в state
    this.setState({ burgers: burgers });
  };

  deleteFromOrder = (key) => {
    //1. Делаем копию объекта state
    const order = { ...this.state.order };
    //2. Удаляем ордер
    delete order[key];
    //3. Обновляем ордер в state
    this.setState({ order : order });
  };

  loadSampleBurgers = (burgers) => {
    this.setState({ burgers: sampleBurgers });
  };

  addToOrder = (key) => {
    //1. Делаем копию объекта state
    const order = { ...this.state.order };
    //2. Добывить ключ к заказу со значением 1 либо обновить текущее значение
    order[key] = order[key] + 1 || 1;
    //3. Запичываем новый объект order в state
    this.setState({ order: order });
  };

  render() {
    return (
      <div className="burger-paradise">
        <div className="menu">
          <Header title="Very Hot Burger" />
          <ul className="burgers">
            {Object.keys(this.state.burgers).map((key) => {
              return (
                <Burger
                  key={key}
                  index={key}
                  ditales={this.state.burgers[key]}
                  addToOrder={this.addToOrder}
                />
              );
            })}
          </ul>
        </div>
        <Order burgers={this.state.burgers} order={this.state.order} deleteFromOrder={this.deleteFromOrder}/>
        <MenuAdmin
          addBurger={this.addBurger}
          loadSampleBurgers={this.loadSampleBurgers}
          burgers={this.state.burgers}
          updateBurger={this.updateBurger}
          deleteBurger={this.deleteBurger}
        />
      </div>
    );
  }
}

export default App;
