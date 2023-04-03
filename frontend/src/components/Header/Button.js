import React from "react";
import styled from "styled-components";

function Button({ icon, count, link }) {
	return (
		<Wrapper href={ link } className="navbar-button button">
      <img src={ icon } alt="navbar button icon" className="navbar-button-icon" />
      { (count >= 0) ? 
				<span className="navbar-button-count">{ count }</span> 
					: 
				null 
			}
		</Wrapper>
	);
}

const Wrapper = styled.a`{
	position: relative;
	height: 1.875em;

	.navbar-button-icon {
		height: 100%;
	}
	
	.navbar-button-count {
		position: absolute;
    bottom: 15px;
    left: 20px;
    width: 20px;
    height: 20px;
    background: var(--clr-primary-1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 12px;
    color: var(--clr-white);
	}
`;

export default Button;