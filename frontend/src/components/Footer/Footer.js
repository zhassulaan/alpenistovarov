import React from "react";
import styled from "styled-components";
import LinkMenu from "./LinksMenu";
import ShopMenu from "./ShopMenu";
import ContactsMenu from "./ContactsMenu";
import arrow from "../../resources/arrow.svg";

function Footer() {
	return (
		<Wrapper>
			<ShopMenu arrow={ arrow } />
			<LinkMenu arrow={ arrow } />
			<ContactsMenu arrow={ arrow } />
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
		display: flex;
		justify-content: space-between;
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

	.footer_menu-header-icon {
		display: none;
	}

	.footer_menu-item {
		line-height: 1.875em;
		margin-top: .625em;
	}

	.footer_menu-name {
		font-size: 18px;
		font-weight: 400;
		color: var(--clr-white);
	}

	@media (max-width: 480px) {
		flex-direction: column;
		padding: 1.875em 5.5556vw 1.5625em;

		.footer_menu,
		.footer_menu:last-child {
			width 100%;
		}

		.footer_menu-header {
			padding-bottom: 0;
		}

		.footer_menu-header:before {
			width: 100%;
		}

		.footer_menu-title {
			height: 1.875em;
			font-size: 16px;
		}

		.footer_menu-header-icon {
			display: block;
			transition: .75s;
		}
		
		.footer_menu-open .footer_menu-item,
		.footer_menu-open .footer_menu-container {
			height: 100%;
		}

		.footer_menu-close .footer_menu-item,
		.footer_menu-close .footer_menu-container {
			height: 0;
			overflow: hidden;
			margin: 0;
		}

		.footer_menu-item {
			margin: 0 0 .625em 1.25em;
			line-height: 1.25em;
		}

		.footer_menu-item:before {
			position: absolute;
			content: "·";
			font-size: 20px;
			margin: -.125em 0 0 -.75em;
		}
		
		.footer_menu-close .footer_menu-item:before {
			content: "
			";
		}
		
		.footer_menu-open .footer_menu-header-icon {
			transform: rotate(0deg);
		}
		
		.footer_menu-close .footer_menu-header-icon {
			transform: rotate(180deg);
		}
		
		.footer_menu-name {
			font-size: 16px;
		}
	}
`;

export default Footer;