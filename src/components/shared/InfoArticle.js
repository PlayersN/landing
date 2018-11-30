import React from 'react';
import Slide from 'react-reveal/Slide';

export default function InfoArticle({
  iconclassName = null,
  header = null,
  text = null,
}) {
  return(
    <Slide bottom>
      <article className="info-article bottom">
        { iconclassName && <i className={iconclassName} /> }
        { header && 
          <header className="heading">
            {header}
          </header>
        }
        { text &&
          <p className="text">
            {text}
          </p>
        }
      </article>
    </Slide>
  );
}