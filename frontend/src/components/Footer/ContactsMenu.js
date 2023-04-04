import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import orange_logo from "../../resources/footer_logo1.svg";
import green_logo from "../../resources/footer_logo2.svg";
import phone from "../../resources/phone.svg";
import message from "../../resources/message.svg";
import instagram from "../../resources/instagram.svg";
import telegram from "../../resources/telegram.svg";
import whatsapp from "../../resources/whatsapp.svg";

function ContactsMenu() {
	return (
		<Wrapper className="footer_menu">
			<div className="footer_menu-header">
				<h4 className="footer_menu-title title">КОНТАКТЫ</h4>
			</div>

			<div className="footer_menu-container">
        <div className="footer_menu-container-left">
					<div className="footer_menu-logos">
            <img
              src={ orange_logo }
              alt="orange colored logo"
              className="footer_menu-logo"
            />
            <img
              src={ green_logo }
              alt="green colored logo"
              className="footer_menu-logo"
            />
          </div>

					<div className="footer_menu-social_medias">
            <Link to="/" className="footer_menu-social_media">
              <img
								src={ instagram }
								alt="instagram link"
              	className="footer_menu-icon"
							/>
            </Link>

            <Link to="/" className="footer_menu-social_media">
              <img
								src={ telegram }
								alt="telegram link"
              	className="footer_menu-icon"
							/>
            </Link>
            
						<Link to="/" className="footer_menu-social_media">
              <img
								src={ whatsapp }
								alt="telegram link"
              	className="footer_menu-icon"
							/>
            </Link>
          </div>
				</div>

        <div className="footer_menu-container-right">
					<Link to="/" className="footer_menu-contact">
						<img
							src={ phone }
							alt="phone icon"
							className="footer_menu-contact-icon"
						/>
						<p className="footer_menu-contact-text" >+7 775 656 48 27</p>
					</Link>
					<Link to="/" className="footer_menu-contact">
						<img
							src={ phone }
							alt="phone icon"
							className="footer_menu-contact-icon"
						/>
						<p className="footer_menu-contact-text" >+7 701 135 41 46</p>
					</Link>
					<Link to="/" className="footer_menu-contact">
						<img
							src={ message }
							alt="message icon"
							className="footer_menu-contact-icon"
						/>
						<p className="footer_menu-contact-text">yakastana@gmail.com</p>
					</Link>
				</div>

        <div className="footer_menu-container-bottom">
					<p className="footer_menu-policy_text">© 2023. Магазин одежды и снаряжения для бега и активного отдыха «YAQ». Все права защищены.</p>
					<p className="footer_menu-policy_text">
            Сайт создан 
						<a href="http://athenaplus.kz/" className="footer_menu-policy_link"> athenaplus.kz</a>
          </p>
				</div>
      </div>
    </Wrapper>
	);
}

const Wrapper = styled.ul`
	.footer_menu-container {
		display: grid;
		grid: 
			'left right'
			'bottom bottom';
		justify-content: space-between;
	}

	.footer_menu-container-left {
		grid-area: left;
		margin-top: .625em;
	}
	
	.footer_menu-logos {
		height: 3.125em;
	}
	
	.footer_menu-logo {
		height: 100%;
		margin-right: .75vw;
	}

	.footer_menu-social_medias {
		display: flex;
		align-items: center;
		gap: 1.25vw;
		margin-top: 1.875em;
	}
	
	.footer_menu-social_media {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5em;
		height: 2.5em;
		border: 1px solid var(--clr-white);
		border-radius: 50%;
	}

	.footer_menu-container-right {
		display: flex;
		flex-direction: column;
		grid-area: right;
		gap: .625em;
		margin-top: 1.25em;
	}

	.footer_menu-contact {
		display: flex;
		justify-content: end;
		align-items: center;
		height: 1.875em;
	}
	
	.footer_menu-contact-icon {
		width: 1.25em;
		margin-right: .625vw;
	}

	.footer_menu-contact-text {
		font-family: 'Oswald', sans-serif;
		font-size: 18px;
		font-weight: 500;
		color: var(--clr-white);
	}
	
	.footer_menu-container-bottom {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		grid-area: bottom;
		margin-top: 1.875em;
		padding-top: 1.5625em;
	}
	
	.footer_menu-container-bottom:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 1px;
		top: 0;
		background: var(--clr-white);
	}
	
	.footer_menu-policy_text {
		font-size: 14px;
		font-weight: 400;
	}

	.footer_menu-policy_text:first-child {
		width: 65.51724%;
	}
	
	.footer_menu-policy_text:last-child {
		width: 31.0345%;
		text-align: right;
	}

	.footer_menu-policy_link {
		text-decoration: underline;
		color: var(--clr-white);
	}
`;

export default ContactsMenu;