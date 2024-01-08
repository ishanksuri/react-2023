//gives online status of a particular user
//contract
// 1. what is the input of the hook: None in this case
// 2. what is the output of the hook: return boolean value
import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  //initial value is true means internet is working fine
  const [onlineStatus, setOnlineStatus] = useState(true);

  //check if online: logic
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  //boolean value
  return onlineStatus;
};

export default useOnlineStatus;
