import React from "react";
import PropTypes from 'prop-types';
import AddBurgerForm from "./AddBurgerForm";
import EditBurgerForm from "./EditBurgerForm";

const MenuAdmin = (props) => (
  <div className="menu-admin">
    <h2>Управление Меню</h2>
    {Object.keys(props.burgers).map((key) => {
      return (
        <EditBurgerForm
          updateBurger={props.updateBurger}
          key={key}
          burger={props.burgers[key]}
          index={key}
          deleteBurger={props.deleteBurger}
        />
      );
    })}
    <AddBurgerForm addBurger={props.addBurger} />
    <button onClick={props.loadSampleBurgers}>Загрузить бургеры</button>
  </div>
);

MenuAdmin.propTypes = {
  burgers: PropTypes.object,
  deleteBurger: PropTypes.func,
  updateBurger: PropTypes.func,
  addBurger: PropTypes.func,
  loadSampleBurgers: PropTypes.func,
};

export default MenuAdmin;
