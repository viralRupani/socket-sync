import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
// replace below url with server hosted url and port
const URL = "10.10.0.67:5000";

export const socket = io(URL);
