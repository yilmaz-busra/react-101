import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("Connecting....");
  socket = io("http://localhost:3000", {
    transports: ["websocket"],
  });

  socket.on("connect", () => console.log("bağlantı kuruldu"));
};
//backend e mesaj iletmek icin
export const sendMessage = (message) => {
  if (socket) socket.emit("new-message", message);
};

export const subscribeChat = (cb) => {
  if (!socket) return;

  socket.on("receive-message", (message) => {
    console.log("yeni mesaj var", message);
    cb(message);
  });
};
