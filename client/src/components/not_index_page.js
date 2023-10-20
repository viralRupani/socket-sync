import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { socket } from '../socket';

export function NotIndexPage() {
    const navigator = useNavigate();

    function receiveNavUrl(value) {
        navigator(value)
      }

      useEffect(() => {
        socket.on('receive_nav_url', receiveNavUrl);

        return () => {
            socket.off('receive_nav_url', receiveNavUrl);
        }
    }, [])

    return (
        <>
            <button onClick={() => {
                socket.timeout(1000).emit('send_nav_url', '/');
                navigator('/')
            }}>go to index page</button>
            <h1 style={{ color: "green" }}>Not navigator page </h1>
        </>
    )
}