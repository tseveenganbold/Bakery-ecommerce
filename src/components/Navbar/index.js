import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";

const Navbar = ({ toggle }) => {
	return (
		<>
			<Nav>
				<NavLink to="/">JuJu Cake</NavLink>
				<NavIcon onClick={toggle}>
					<p>Menu</p>
					<Bars />
				</NavIcon>
			</Nav>
		</>
	);
};

export default Navbar;
