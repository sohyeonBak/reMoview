import React, { useEffect } from "react";
import Card from '../../assets/styles/card.module.scss';
import { cardProps, cardList } from '../../types/card/card';

const ReviewCard = ({card}: cardProps): React.ReactElement => {
  useEffect(() => {
    console.log(card)
  },[])

  return (
    <>
      <div className={Card.card}>
        <div className={Card.cardTitle}>
          <h2>{card.title}</h2>
          <p></p>
        </div>
        <div className={Card.cardImage}>
          <img src={card.url} alt="" />

        </div>
        <div className={Card.cardReaction}>
          <div className={Card.like}>
            <span className="" onClick={() => console.log('onclick')} ></span>
            <em></em>
            <span className="" onClick={() => console.log('onclick')} > </span>
            <em></em>
          </div>
          <div className={Card.comment}>
            <span onClick={() => console.log('onclidk')} className=""> </span>
            <span onClick={() => console.log('onclick')} className=""> </span>
          </div>
        </div>
        <div className={Card.reviewconent}>
          <div className={Card.star}></div>
          <p></p>
          <em></em>
        </div>
      </div>
      {/* {comment && <Comment card={card} setLoginModal={setLoginModal} />} */}
    </>
  );
};

export default ReviewCard;
