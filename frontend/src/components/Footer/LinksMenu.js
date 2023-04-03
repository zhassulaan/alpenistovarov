import React, { useState } from "react";

function LinkMenu() {
	const [isActive, setActive] = useState("false");

	const handleToggle = () => {
    setActive(!isActive);
  };

	return (
		<div>
			<footer>Footer</footer>
		</div>
	);
}

export default LinkMenu;