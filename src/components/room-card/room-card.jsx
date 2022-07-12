import React from "react";
import "./room-card.scss";
import starIcon from "../../images/star.svg";

const RoomCard = ({ room }) => {
  return (
    <div className="room-card-container">
      <div className="room-image">
        <img src={room.photo} alt="" />
      </div>
      <div className="room-details">
        {room.superHost && (
          <>
            <div className="superhost">Super Host </div>
            <div className="type-beds">
              <span>{room.type}</span>
              <span>{room.beds && <> .{room.beds} beds</>}</span>
            </div>
          </>
        )}
        {!room.superHost && (
          <>
            <div className="type-beds">
              <span>{room.type}</span>
              <span>{room.beds && <> .{room.beds} beds</>}</span>
            </div>
          </>
        )}

        <div className="room-card-rating">
          <img src={starIcon} alt="" />
          <span>{room.rating}</span>
        </div>
      </div>
      <div className="room-title">{room.title}</div>
    </div>
  );
};

export default RoomCard;
