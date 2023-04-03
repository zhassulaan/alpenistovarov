import React from "react";
import styled from "styled-components";

function Footer() {
	return (
		<Wrapper>
			<footer>Footer</footer>
		</Wrapper>
	);
}

const Wrapper = styled.footer`
	background-color: var(--clr-black);
`;

export default Footer;