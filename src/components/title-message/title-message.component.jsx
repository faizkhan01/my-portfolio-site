import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;

   strong {
     font-size: 1.50em;
  }
  div {
    color: blueviolet;

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;

    .main {
      font-size: 50px;
    }

    .sub {
      font-size: 35px;
      letter-spacing: 2px;
      color: green;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3" variant='primary'>
          Hi, I'm
          <br />
          <span>
            <strong>Md. Faizur Rahman Khan</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["MERN Stack Web Developer", "Problem Solver", "Learner"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
