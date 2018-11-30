import React from 'react';
import Heading from "components/shared/Heading";
import ContentWrapper from "components/shared/ContentWrapper";
import InfoArticle from "components/shared/InfoArticle";

import "stylesheets/components/Info.css";

export default function Info() {
  const articles = [{
    iconclassName: "icon-heart-outline",
    header: "Follow Players Like You",
    text: "There’s no limit, follow as many as you like!",
  }, {
    iconclassName: "fa fa-crown",
    header: "Make a Name for Yourself",
    text: "Let the world know what’s happening with you with a Post of your own",
  }, {
    iconclassName: "icon-arrow-repeat",
    header: "Join the conversation",
    text: "Share, +Rep, Comment or Reply to Posts in your timeline",
  }]

  return(
    <section className="info" id="info">
      <ContentWrapper className="info-wrapper" >
        <Heading><span>How does</span><span className="logo typeface purple"></span> <span>work?</span></Heading>
        <h2 className="sub-heading">All you need is to sign up! We’ll take care of the rest.</h2>
        <section className="info-articles">
          {
            articles.map((article, idx) => {
              return (
                <React.Fragment key={`${idx}-${article.header}`}>
                  { (idx === 1) && <span className="divider"/> }
                  <InfoArticle {...article} />
                  { (idx === 1) && <span className="divider"/> }
                </React.Fragment>
              );
            })
          }
        </section>
      </ContentWrapper>
    </section>
  );
}