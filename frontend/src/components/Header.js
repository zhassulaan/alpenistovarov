import React from 'react';
import styled from "styled-components";

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
		</Wrapper>
	);
}

const Wrapper = styled.header`
	.header-item_link {
		font-size: 14px;
		font-weight: 500;
		color: var(--clr-primary-4);
	}
`;

export default Header;