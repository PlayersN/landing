import React from 'react';
import Heading from "components/shared/Heading";
import ContentWrapper from "components/shared/ContentWrapper";
import DeviceBadge from "components/shared/DeviceBadge";
import SignupForm from "components/SignupForm";
import Slide from 'react-reveal/Slide';

import "stylesheets/components/Devices.css";

export default function Devices() {
  return(
      <section className="devices">
        <ContentWrapper className="devices-wrapper">
          <Slide bottom>
            <Heading>Connect where you <strong>need</strong> them <strong>most</strong>.</Heading>
            <h2 className="sub-heading">Everywhere.</h2>
            <ul className="devices-list">
              <li className="device laptop">
                <DeviceBadge>Any Desktop Computer!</DeviceBadge>
              </li>
              <li className="device watch">
              <DeviceBadge>In Future!</DeviceBadge>
              </li>
              <li className="device phone">
                <DeviceBadge>Any Mobile Device!</DeviceBadge>
              </li>
              <li className="device tablet">
                <DeviceBadge>Any Tablet!</DeviceBadge>
              </li> 
            </ul>
            <SignupForm />
          </Slide>
        </ContentWrapper>
      </section>
  );
}