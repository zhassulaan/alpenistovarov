import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

function Header() {
	return (
		<Wrapper>
			<ul className='header-menu'>
				<li className='header-item'>
					<a href="tel:+77011354146" className='header-item_link'>
						+7 701 135 41 46
					</a>
				</li>
				<li className='header-item'>
					<a href="tel:+77756564827" className='header-item_link'>
						+7 775 656 48 27
					</a>
				</li>
				<li className='header-item'>
					<a href="/" className='header-item_link'>
						WhatsApp
					</a>
				</li>
				<li className='header-item'>
					<a href="/" className='header-item_link'>
						Дисконтная система
					</a>
				</li>
				<li className='header-item'>
					<a href="/" className='header-item_link'>
						Доставка и оплата
					</a>
				</li>
				<li className='header-item'>
					<a href="/" className='header-item_link'>
						FAQ
					</a>
				</li>
			</ul>

      <Navbar />
		</Wrapper>
	);
}

const Wrapper = styled.header`
	height: 8.125em;
	margin: 0 13.125vw;

	.header-menu {
		position: static;
		height: 3.125em;
		display: flex;
		justify-content: end;
		align-items: center;
	}

	.header-item {
		height: 100%;
		padding: 1.25em 0 0.625em 0.75vw;
	}
	
	.header-item_link {
		font-size: 14px;
		font-weight: 500;
		color: var(--clr-primary-4);
	}
`;

export default Header;