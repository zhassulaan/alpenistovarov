import React, { useState } from "react";
import { Link } from "react-router-dom";

function LinkMenu({ arrow }) {
  const [isOpne, setIsOpne] = useState("false");

  const handleToggle = () => {
    setIsOpne(!isOpne);
  };

	return (
		<ul className={ isOpne ? "footer_menu footer_menu-close" : "footer_menu footer_menu-open" }>
			<div className="footer_menu-header">
				<h4 className="footer_menu-title title">ПОЛЕЗНЫЕ ССЫЛКИ</h4>
        <img
          src={ arrow }
          alt="arrow icon"
          className="footer_menu-header-icon"
          onClick={ handleToggle }
        />
			</div>
			
			<li className="footer_menu-item">
				<Link to="/discount_system" className="footer_menu-name">
					Дисконтная система
				</Link>
			</li>
			<li className="footer_menu-item">
				<Link to="/about" className="footer_menu-name">
					О компании
				</Link>
			</li>
			<li className="footer_menu-item">
				<Link to="/terms_of_use" className="footer_menu-name">
					Пользовательское соглашение
				</Link>
			</li>
			<li className="footer_menu-item">
				<Link to="/faq" className="footer_menu-name">
					FAQ
				</Link>
			</li>
			<li className="footer_menu-item">
				<Link to="/delivery_&_payment" className="footer_menu-name">
					Доставка и оплата
				</Link>
			</li>
			<li className="footer_menu-item">
				<Link to="/return_conditions" className="footer_menu-name">
					Условия возврата
				</Link>
			</li>
		</ul>
	);
}

export default LinkMenu;