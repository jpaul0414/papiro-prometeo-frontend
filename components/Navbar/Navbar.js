import React, { useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCartContext } from "../../contexts/ShoppingCart/ShoppingCart";
import {
  Nav,
  LogoContainer,
  NavbarContainer,
  Menu,
  MenuWrapper,
  MenuItem,
  ShoppingBag,
  MobileIcon,
  ShoppingBagButton,
  ShoppingBagLabel,
} from "./Navbar.elements";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { showDrawer, setShowDrawer, cartItems } =
    useContext(ShoppingCartContext);
  const handleClick = () => {
    if (window.innerWidth < 960) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <Nav>
      <NavbarContainer>
        <LogoContainer>
          <Link href={"/"} passHref>
            <Image
              src="/img/logo_udemedellin.png"
              width={483}
              height={150}
              alt="Logo UdeM"
            ></Image>
          </Link>
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
              <Link href={"/store"}>Tienda</Link>
            </MenuItem>
            <MenuItem>
              <Link href={"/auth/login"}>Ingresa</Link>
            </MenuItem>
          </Menu>
          <ShoppingBagButton
            onClick={() => {
              setShowDrawer(!showDrawer);
            }}
          >
            <ShoppingBagLabel>{cartItems.length}</ShoppingBagLabel>
            <ShoppingBag></ShoppingBag>
          </ShoppingBagButton>
        </MenuWrapper>
      </NavbarContainer>
    </Nav>
  );
};

export default NavBar;
