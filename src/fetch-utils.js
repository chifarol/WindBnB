const Rooms = require("./stays.json");

const fetchMyData = async () => {
  const rooms = await JSON.parse(Rooms);
  return rooms;
};

export default fetchMyData;
