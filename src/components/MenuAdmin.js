import React from "react";
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

export default MenuAdmin;
