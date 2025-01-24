import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);

    const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <Container ref={navbarRef}>
            <Logo href="/">Joel Harawa</Logo>
            <Hamburger onClick={() => setIsOpen((prev) => !prev)}>
                <i className="fa-solid fa-bars"></i>
            </Hamburger>
            <MenuItems isOpen={isOpen}>
                <MenuItem href="/">About</MenuItem>
                <MenuItem href="/skills">Skills</MenuItem>
                <MenuItem href="/projects">Projects</MenuItem>
                <MenuItem href="/contact">Contact</MenuItem>
            </MenuItems>
        </Container>
    );
};

const Container = styled.div`
    height: 10%;
    background-color: #1A1A1A;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
    position: relative;

    @media (max-width: 768px) {
        height: 6%;
    }
`;

const Logo = styled.a`
    color: white;
    font-size: 32px;
    text-decoration: none;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    justify-content: space-around;
    height: 20px;
    cursor: pointer;

    @media (max-width: 768px) {
        display: flex;
        font-size: 20px;
        color: white;
    }
`;

const MenuItems = styled.div`
    display: flex;
    justify-content: space-around;
    width: 30%;

    @media (max-width: 768px) {
        position: absolute;
        top: 8%;
        right: 2.5%;
        background-color: #1A1A1A;
        flex-direction: column;
        align-items: center;
        width: 30%;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease-in-out;
        display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
        z-index: 1;
    }
`;

const MenuItem = styled.a`
    position: relative;
    font-size: 18px;
    color: white;
    text-decoration: none;
    padding-bottom: 5px;

    &:hover::after {
        transform: scaleX(1);
    }

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 3px;
        background-color: white;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease-in-out;
    }

    @media (max-width: 768px) {
        font-size: 14px;
        margin: 10px 0;
    }
`;

export default Navbar;