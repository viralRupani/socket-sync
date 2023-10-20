import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { socket } from "../socket";

export function NotIndexPage({ receiveNavUrl }) {
  const navigator = useNavigate();

  useEffect(() => {
    socket.on("receive_nav_url", receiveNavUrl);

    return () => {
      socket.off("receive_nav_url", receiveNavUrl);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => {
          socket.emit("send_nav_url", "/");
          navigator("/");
        }}
      >
        go to index page
      </button>
      <h1 style={{ color: "green" }}>Not navigator page </h1>
    </>
  );
}
