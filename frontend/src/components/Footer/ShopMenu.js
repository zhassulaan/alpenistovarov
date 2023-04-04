import React from "react";
import { Link } from "react-router-dom";

function ShopMenu() {
	return (
		<ul className="footer_menu">
			<div className="footer_menu-header">
				<h4 className="footer_menu-title title">МАГАЗИН</h4>
			</div>
      
      <li className="footer_menu-item">
        <Link to="/" className="footer_menu-name">
          Главная
        </Link>
      </li>
      <li className="footer_menu-item">
        <Link to="/products/clothes" className="footer_menu-name">
          Одежда
        </Link>
      </li>
      <li className="footer_menu-item">
        <Link to="/products/clothes/shoes" className="footer_menu-name">
          Обувь
        </Link>
      </li>
      <li className="footer_menu-item">
        <Link to="/products/equipment" className="footer_menu-name">
          Снаряжение
        </Link>
      </li>
      <li className="footer_menu-item">
        <Link to="/products/accessories" className="footer_menu-name">
          Аксессуары
        </Link>
      </li>
      <li className="footer_menu-item">
        <Link to="/products/run" className="footer_menu-name">
          Бег
        </Link>
      </li>
		</ul>
	);
}

export default ShopMenu;