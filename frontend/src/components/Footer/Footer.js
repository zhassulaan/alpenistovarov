import React from "react";
import styled from "styled-components";
import LinkMenu from "./LinksMenu";
import ShopMenu from "./ShopMenu";
import ContactsMenu from "./ContactsMenu";

function Footer() {
	return (
		<Wrapper>
			<ShopMenu />
			<LinkMenu />
			<ContactsMenu />
		</Wrapper>
	);
}

const Wrapper = styled.footer`
	display: flex;
	color: var(--clr-white);
	background-color: var(--clr-black);
	padding: 5em 13.125vw 6.25em;
	
	.footer_menu {
		width 25.42373%;
	}
	
	.footer_menu:last-child {
		width: 49.152542%;
	}
	
	.footer_menu-header {
		position: relative;
		padding-bottom: 1.25em;
		margin-bottom: 1.25em;
	}
	
	.footer_menu-header:before {
		content: "";
		position: absolute;
		width: 11.25em;
		height: 1px;
		bottom: 0;
		background-color: var(--clr-white);
	}

	.footer_menu:last-child .footer_menu-header:before {
		width: 100%;
	}

	.footer_menu-title {
		font-size: 20px;
		font-weight: 500;
	}

	.footer_menu-item {
		height: 1.875em;
		margin-top: .625em;
	}

	.footer_menu-name {
		font-size: 18px;
		font-weight: 400;
		color: var(--clr-white);
	}
`;

export default Footer;