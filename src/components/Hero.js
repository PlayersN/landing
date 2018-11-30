import React from 'react';
import Heading from "components/shared/Heading";
import ContentWrapper from "components/shared/ContentWrapper";
import Button from "components/shared/Button";
import JumpTo from "components/shared/JumpTo";

import 'stylesheets/components/Hero.css';

export default function Hero() {
  return(
    <header className="hero" id="hero">
    <ContentWrapper className="hero-wrapper">
      <Heading>The <strong>platform</strong> of choice to <strong>kickstart</strong> your <strong>gaming network.</strong></Heading>
      <section className="call-to-action">
        <div className="logo icon"></div>
        <div className="logo typeface white"></div>
        <div className="action-buttons">
          <a href="https://web.playersn.com" target="_blank" rel="noopener noreferrer"><Button className="button activate-install" >
            <span>Desktop</span>
            <i className="icon-device-desktop" />
          </Button></a>
          <a href="https://play.google.com/store/apps/details?id=com.playersn.app" target="_blank" rel="noopener noreferrer"><Button className="button activate-install" >
            <span>Mobile</span>
            <i className="icon-device-phone" />
          </Button></a>
        </div>
        <JumpTo target="info">
          <i className="icon-arrow-down"/>
        </JumpTo>
      </section>
    </ContentWrapper>
    </header>
  );
}