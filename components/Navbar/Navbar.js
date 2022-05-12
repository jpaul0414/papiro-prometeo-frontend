import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import {
  Nav,
  LogoContainer,
  NavbarContainer,
  Menu,
  MenuWrapper,
  MenuItem,
  ShoppingBag,
  MobileIcon,
} from "./NavBar.elements";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    if (window.innerWidth < 960) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <Nav>
      <NavbarContainer>
        <LogoContainer>
          <Image
            src="/img/logo_udemedellin.png"
            width={483}
            height={150}
            alt="Logo UdeM"
          ></Image>
        </LogoContainer>
        <MobileIcon onClick={handleClick}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <MenuWrapper>
          <Menu onClick={handleClick} isOpen={isOpen}>
            <MenuItem>
              <Link href={"/"}>Inicio</Link>
            </MenuItem>
            <MenuItem>
              <Link href={"/tienda"}>Tienda</Link>
            </MenuItem>
          </Menu>
          <ShoppingBag></ShoppingBag>
        </MenuWrapper>
      </NavbarContainer>
    </Nav>
  );
};

export default NavBar;
