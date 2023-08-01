import io from "socket.io-client";

let socket;
//baglantı saglamak icin fonksiyon olusturuldu, bunu app.js comp. uzerinde baglantı olusacak
export const init = () => {
  console.log("Sunucuya bağlanılıyor... ");
  socket = io("localhost:3001", {
    transports: ["websocket"],
  });
  socket.on("connect", () => console.log("Sunucuya bağlantı gerçekleşti"));
};
// bu fonksiyon bi rengi parametre olarak alıp sunucuya iletecek
export const send = (color) => {
  socket.emit("newColor", color);
  //emit  methodu eger clientta isek backend' e,
  // backend de isek client a bir data göndermeyi saglar
};

export const subscribe = (cb) => {
  socket.on("receive", (color) => {
    console.log(color);
    cb(color);
  });
};
