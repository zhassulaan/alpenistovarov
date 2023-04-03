import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import logo from "../../resources/logo.svg";
import search from "../../resources/search.svg";
import favourites from "../../resources/favourites.svg";
import purchase from "../../resources/purchase.svg";

function Navbar() {
	return (
		<Wrapper className="navbar-container">
      <div className="navbar-left_bar">
        <div className="navbar-logo logo">
	        <img src={logo} alt="logo" />
        </div>

        <ul className="navbar-catalog">
          <li className="navbar-catalog-item">
		        <Link to="/" className="navbar-catalog-name">
              ГЛАВНАЯ
            </Link>
          </li>
          <li className="navbar-catalog-item">
            <Link to="/products/clothes" className="navbar-catalog-name">
              ОДЕЖДА
            </Link>
          </li>
	        <li className="navbar-catalog-item">
	          <Link to="/products/clothes/shoes" className="navbar-catalog-name">
	            ОБУВЬ
	          </Link>
	        </li>
          <li className="navbar-catalog-item">
            <Link to="/products/equipment" className="navbar-catalog-name">
              СНАРЯЖЕНИЕ
            </Link>
          </li>
          <li className="navbar-catalog-item">
            <Link to="/products/accessories" className="navbar-catalog-name">
              АКСЕССУАРЫ
            </Link>
          </li>
          <li className="navbar-catalog-item">
            <Link to="/products/run" className="navbar-catalog-name">
              БЕГ
            </Link>
          </li>
					<li className="navbar-catalog-item">
						<Link to="/contacts" className="navbar-catalog-name">
							КОНТАКТЫ
				    </Link>
          </li>
				</ul>
			</div>

			<div className='navbar-right_bar'>
        <span className="navbar-button login_button button">ВХОД</span>
        <Button icon={ search } />
        <Button icon={ favourites } link={"/favourites"} count={ 0 } />
        <Button icon={ purchase } count={ 0 } />
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.nav`
	// position: fixed;
	display: flex;
  justify-content: space-between;
	align-items: center;
	height: 5rem;
	background: var(--clr-white);
	z-index: 2;

	.navbar-catalog {
		display: flex;
    align-items: center;
	}
  
  .navbar-left_bar,
  .navbar-right_bar {
    display: flex;
    align-items: center;
  }
  
  .navbar-left_bar {
    height: 100%;
  }

  .navbar-logo {
    margin-right: 2.625vw;
  }
  
  .navbar-catalog-item {
    margin: 0 .625vw;
  }
  
  .navbar-catalog-name {
    font-size: 16px;
  }
  
  .navbar-catalog-name:hover {
    color: var(--clr-primary-2);
    text-decoration: underline;
  }
  
  .navbar-right_bar {
    gap: .9375em
  }

  .login_button {
    margin-right: .625em;
  }
  
  .navbar-button:last-child {
    margin-left: .3125em
  }
`;

export default Navbar;