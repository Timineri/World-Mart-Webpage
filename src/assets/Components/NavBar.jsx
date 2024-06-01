// import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import styled from "styled-components";
import "../../index.css";
import Hero from "./Hero";
import Footer from "./Footer";

export default function NavBar() {
  return (
    <Container>
      <Nav>
        <div>
          <img src="" alt="logo" />
        </div>
        <div>
          <Link>
            <LinkChild>Home</LinkChild>
            <LinkChild>About Us</LinkChild>
            <LinkChild>Fashion</LinkChild>
            <LinkChild>Offers</LinkChild>
            <LinkChild className="Services">
              Servies <ExpandMoreIcon />
            </LinkChild>
          </Link>
        </div>
        <Icon>
          <IconChild>
            <div>
              <SearchIcon />
            </div>
            <div>
              <ShoppingBagOutlinedIcon />
            </div>
          </IconChild>
          <div>
            <Button>
              <LoginOutlinedIcon /> Login
            </Button>
          </div>
        </Icon>
      </Nav>
      <Hero />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  margin: 1em 15em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-family: sans-serif;
  padding-top: 2em;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
`;
const Link = styled.ul`
  display: flex;
  background-color: #2457ae;
  border-radius: 0.8em;
  color: #d7dde5;
  padding: 5px 50px;
`;

const LinkChild = styled.li`
  list-style: none;
  margin-left: 2em;
`;

const Icon = styled.div`
  display: flex;
`;

const IconChild = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 1em;
`;

const Button = styled.button`
  background-color: #154392;
  display: flex;
  justify-content: space-between;
  color: #839abe;
  border: none;
  border-radius: 1em;
  padding: 5px 20px;
`;
