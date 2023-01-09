import React from 'react';
import AddBurgerForm from './AddBurgerForm';
import EditBurgerForm from './EditBurgerForm';

const MenuAdmin = (props) => (
    <div className="menu-admin">
      <h2>Управление Меню</h2>
      {Object.keys(this.props.burgers)}
      <AddBurgerForm addBurger={props.addBurger}/>
      <button onClick={props.loadSampleBurgers}>Загрузить бургеры</button>
    </div>
    
);

export default MenuAdmin;