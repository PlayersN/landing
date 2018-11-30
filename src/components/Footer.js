import React from 'react';
import ContentWrapper from "components/shared/ContentWrapper";
import JumpTo from "components/shared/JumpTo";

import 'stylesheets/components/Footer.css';

export default function Footer() {
  return(
    <footer className="footer">
      <ContentWrapper className="footer-wrapper">
          <p>© 2018 PlayersN.com. All rights reserved.</p>
          <p>We are also on</p>
          <div className="social">
            <a target="_blank" href="https://twitter.com/PlayersNtweets" rel="noopener noreferrer"><i className="icon-twitter"></i></a>
            <JumpTo target="hero">
              <i className="icon-arrow-up"/>
            </JumpTo>
          </div>
      </ContentWrapper>
    </footer>
  );
}