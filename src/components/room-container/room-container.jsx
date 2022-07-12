import RoomCard from "../room-card/room-card";
import "./room-container.scss";

const RoomContainer = ({ rooms }) => {
  if (rooms.length > 0) {
    return (
      <>
        <div className="rooms-heading">
          <h4>Stays in Finland</h4>
          <p>{rooms.length} stays</p>
        </div>
        <div className="rooms-container">
          {rooms.map((e) => (
            <RoomCard room={e} />
          ))}
        </div>
      </>
    );
  } else {
    return <p>Sorry, no match found</p>;
  }
};

export default RoomContainer;
