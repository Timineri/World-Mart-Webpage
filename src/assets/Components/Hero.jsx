// import React from "react";
import styled from "styled-components";
import Cart from "../Images/Cart.png";
import Man from "../Images/Man.jpg";

export default function Hero() {
  return (
    <>
      <HeroContainer>
        <Header>
          <h1>Fufil Your Shopping Dreams with World Mart</h1>
        </Header>
        <Paragraph>
          <p>
            Dive into a world of endle possibiities as you explore our curated
            collections tailored to your unique style. From trendy essentials to
            timeless classics we've got you covered. Enjoyy seamless browsing.
          </p>
        </Paragraph>
        <div>
          <ButtonOne>View Products</ButtonOne>
          <ButtonTwo>Exciting Offers</ButtonTwo>
        </div>
      </HeroContainer>
      <Image>
        <img src={Cart} alt="" />
        <img src={Man} alt="" />
      </Image>
    </>
  );
}

const HeroContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 30em;
  font-weight: 400;
  font-size: 20px;
  margin-top: 2em;
`;

const Header = styled.div`
  margin-bottom: 1em;
`;

const Paragraph = styled.div`
  margin-bottom: 2em;
`;

const ButtonOne = styled.button`
  background-color: #5c7bb4;
  border: none;
  color: white;
  padding: 0.37em;
  border-radius: 0.3em;
`;

const ButtonTwo = styled.button`
  border: 1px solid #5c7bb4;
  color: #5c7bb4;
  margin-left: 1em;
  padding: 0.3em;
  border-radius: 0.3em;
`;
const Image = styled.div`
  display: flex;
  width: 34em;
  align-items: center;
`;
