import React from 'react';
import AddBurgerForm from './AddBurgerForm';

const MenuAdmin = (props) => (
    <div className="menu-admin">
      <h2>Управление Меню</h2>
      <AddBurgerForm addBurger={props.addBurger}/>
      <button onClick={props.loadSampleBurgers}>Загрузить бургеры</button>
    </div>
    
);

export default MenuAdmin;