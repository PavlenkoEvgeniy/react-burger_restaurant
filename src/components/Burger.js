import React from "react";
import PropTypes from "prop-types";

class Burger extends React.Component {
  static propTypes = {
    ditales: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string,
      status: PropTypes.string,
    }),
    index: PropTypes.string,
    addToOrder: PropTypes.func,
  };

  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };

  render() {
    const { image, name, price, desc, status } = this.props.ditales;

    const isAvailable = status === "available";

    return (
      <li className="menu-burger">
        <div className="image-container">
          <img src={image} alt={name} title={name} />
        </div>
        <div className="burger-ditales">
          <h3 className="burger-name">
            {name}
            <span className="price">{price} ₽</span>
          </h3>
          <p className="desc">{desc}</p>
          <button
            className="button-order"
            disabled={!isAvailable}
            onClick={this.handleClick}
          >
            {isAvailable ? "Заказать" : "Временно нет"}
          </button>
        </div>
      </li>
    );
  }
}

export default Burger;
