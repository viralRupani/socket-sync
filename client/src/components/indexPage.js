import { useNavigate } from "react-router-dom"
import { socket } from "../socket";
import { useEffect } from "react";

export function IndexPage() {
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
                socket.emit('send_nav_url', '/not_index_page')
                navigator('/not_index_page')
            }}>go to not index page</button>
            <h1 style={{ color: "green" }}>Navigator page </h1>
        </>
    )
}