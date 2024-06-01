import React from "react";
import styled from "styled-components";
import ManTwo from "../Images/ManTwo.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "../../index.css";

export default function Footer() {
  return (
    <Container>
      <Text>
        <Header>Features & Benefit</Header>
        <Paragraph>
          Your go-to for rapid delivery, ensuring your satisfacion at the speed
          of light.
        </Paragraph>
        <Link>
          <LinkChild>
            <AccessTimeIcon />
            Get your delivery in 48 hours
          </LinkChild>
          <LinkChild>
            <CurrencyExchangeIcon />
            Cash on Delivery available
          </LinkChild>
          <LinkChild>
            <CalendarMonthIcon />
            7-days easy return
          </LinkChild>
        </Link>
      </Text>
      <div>
        <img src={ManTwo} alt="" className="img" />
      </div>
    </Container>
  );
}
const Container = styled.div`
  background: linear-gradient(to top, #2d388a 0%, #828cda 100%);
  margin: 0px;
  display: flex;
  justify-content: space-between;

  padding-top: 5em;
`;

const Text = styled.div`
  width: 20em;
  margin-left: 3em;
  color: white;
`;

const Header = styled.h1`
  width: 6em;
  font-size: 2.5em;
`;

const Paragraph = styled.p`
  margin-bottom: 2em;
`;

const Link = styled.ul`
  list-style: none;
  padding-left: 0px;
`;

const LinkChild = styled.li`
  margin-bottom: 0.9em;
  display: flex;
`;
