import React, { useState } from "react";
import { Link } from "react-router-dom";

function ShopMenu({ arrow }) {
  const [isOpne, setIsOpne] = useState("false");

  const handleToggle = () => {
    setIsOpne(!isOpne);
  };

	return (
		<ul className={ isOpne ? "footer_menu footer_menu-close" : "footer_menu footer_menu-open" }>
			<div className="footer_menu-header">
				<h4 className="footer_menu-title title">МАГАЗИН</h4>
        <img
          src={ arrow }
          alt="arrow icon"
          className="footer_menu-header-icon"
          onClick={ handleToggle }
        />
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