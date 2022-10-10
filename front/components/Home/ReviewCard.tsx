import React from "react";
import Card from '../../assets/styles/card.module.scss';

const ReviewCard = () => {
  return (
    <>
      <div className={Card.card}>
        <div className={Card.cardTitle}>
          <h2></h2>
          <p></p>
        </div>
        <div className={Card.cardImage}>
          <img src="../../assets/img/7874_1.jpeg" alt="" />

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
