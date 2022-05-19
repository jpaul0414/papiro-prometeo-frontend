import styled from "styled-components";
import { BsBag } from "react-icons/bs";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
`;

export const NavbarContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: center;
  } ;
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  width: 32px;
  height: 32px;
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-40%, 80%);
  } ;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: flex-end;
    padding-right: 3rem;
  }
`;

export const Menu = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  list-style: none;
  margin: 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    height: calc(100vh - 80px);
    opacity: 1;
    transition: all 0.3s ease;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1rem 0;
    justify-content: flex-start;
  }
`;

export const MenuItem = styled.li`
  padding: ${({ theme }) => theme.spacing.sm};
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid black;
  }
`;

export const ShoppingBag = styled(BsBag)`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: black;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const ShoppingBagButton = styled.button`
  border: none;
  outline: none;
  width: 40px;
  height: 40px;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const ShoppingBagLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text};
  position: absolute;
  top: 0px;
  left: 0px;
  transform: translate(150%, 45%);
  z-index: -1;
`;
