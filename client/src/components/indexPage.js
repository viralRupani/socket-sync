import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { socket } from "../socket";

export function IndexPage({ receiveNavUrl }) {
  const navigator = useNavigate();

  useEffect(() => {
    socket.on("receive_nav_url", receiveNavUrl);

    return () => {
      socket.off("receive_nav_url", receiveNavUrl);
    };
  }, [receiveNavUrl]);

  const handleGoToNotIndex = () => {
    socket.emit("send_nav_url", "/not_index_page");
    navigator("/not_index_page");
  };

  return (
    <>
      <button onClick={handleGoToNotIndex}>go to not index page</button>
      <h1 style={{ color: "green" }}>Navigator page </h1>
    </>
  );
}
