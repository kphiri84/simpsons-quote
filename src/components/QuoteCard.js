import React from 'react';
import './QuoteCard.css';

function QuoteCard ({card}){
    return (
      <figure className="QuoteCard">
        <figcaption>
          <p>
            <cite>{card.character}</cite>
          </p>
          <img src={card.image} alt={card.character} />
          <blockquote>{card.quote}</blockquote>
        </figcaption>
        
      </figure>
    );
  }

export default QuoteCard;