import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import orange_logo from "../../resources/footer_logo1.svg";
import green_logo from "../../resources/footer_logo2.svg";
import phone from "../../resources/phone.svg";
import message from "../../resources/message.svg";
import instagram from "../../resources/instagram.svg";
import telegram from "../../resources/telegram.svg";
import whatsapp from "../../resources/whatsapp.svg";

function ContactsMenu({ arrow }) {
	const [isOpne, setIsOpne] = useState("false");

  const handleToggle = () => {
    setIsOpne(!isOpne);
  };

	return (
		<Wrapper className={ isOpne ? "footer_menu footer_menu-close" : "footer_menu footer_menu-open" }>
			<div className="footer_menu-header">
				<h4 className="footer_menu-title title">КОНТАКТЫ</h4>
				<img
          src={ arrow }
          alt="arrow icon"
          className="footer_menu-header-icon"
          onClick={ handleToggle }
        />
			</div>

			<div className="footer_menu-container">
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

        <div className="footer_menu-contacts">
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

				<p className="footer_menu-link footer_menu-policy_text">
          Сайт создан 
					<a href="http://athenaplus.kz/" className="footer_menu-policy_link"> athenaplus.kz</a>
        </p>

        <div className="footer_menu-container-bottom">
					<p className="footer_menu-policy_text">© 2023. Магазин одежды и снаряжения для туризма, кемпинга и путешествий «ЯК». Все права защищены.</p>
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
			'logos contacts'
			'medias contacts'
			'bottom bottom';
	}

	.footer_menu-logos {
		grid-area: logos;
		height: 3.125em;
		margin-top: .625em;
	}
	
	.footer_menu-logo {
		height: 100%;
		margin-right: .75vw;
	}

	.footer_menu-social_medias {
		display: flex;
		grid-area: medias;
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

	.footer_menu-contacts {
		display: flex;
		flex-direction: column;
		grid-area: contacts;
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

	.footer_menu-link {
		display: none;
	}
	
	.footer_menu-container-bottom {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		grid-area: bottom;
		height: 4.6875em;
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

	@media (max-width: 480px) {
		.footer_menu-container {
			grid: 
				'contacts medias'
				'logos link'
				'bottom bottom';
		}

		.footer_menu-logos {
			height: 1.875em;
			margin-top: 0;
		}
		
		.footer_menu-logo {
			margin-right: .3125em;
		}

		.footer_menu-social_medias,
		.footer_menu-contacts {
			width: 43.0556vw;
		}
		
		.footer_menu-social_medias {
			gap: 4.861vw;
			margin: .3125em 0 0 .625em;
		}

		.footer_menu-contacts {
			margin: 0 0 1.875em;
		}

		.footer_menu-contact {
			display: block;
			height: 1.25em;
		}
		
		.footer_menu-contact-icon {
			display: none;
		}
		
		.footer_menu-contact-text {
			font-family: 'Jost', sans-serif;
			font-weight: 400;
			font-size: 16px;
		}
		
		.footer_menu-contact:last-child {
			width: calc(100vw - 2 * 5.5556vw);
		}
		
		.footer_menu-contact:last-child .footer_menu-contact-text {
			font-family: 'Oswald', sans-serif;
			font-weight: 500;
			text-align: end;
		}
		
		.footer_menu-container-bottom:before,
		.footer_menu-policy_text:last-child {
			display: none;
		}
		
		.footer_menu-policy_text:first-child {
			width: 100%;
			text-align: center;
		}
		
		.footer_menu-link {
			display: block;
			text-align: right;
			line-height: 20px;
			margin-top: 10px;
		}
		
		.footer_menu-container-bottom {
			display: block;
			height: 3.75em;
			margin-top: .9375em;
			padding-top: 0;
		}
	}
`;

export default ContactsMenu;