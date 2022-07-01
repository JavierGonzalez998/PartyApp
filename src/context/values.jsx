import {useState} from "react";

const Values = () => {
    const [userData,setUserData] = useState({});
  return {
    userData,
    setUserData
  };
};

export default Values;
