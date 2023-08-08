import { useState } from "react";
import styles from "./styles.module.css";
import { sendMessage } from "../SocketApi";
import { useChat } from "../contxt/ChatContext";

function ChatForm() {
  const [message, setMessage] = useState("");
  const { setMessages } = useChat();
  const handleSubmit = (e) => {
    e.preventDefault(); // sayfa yenilemesini durdurdu
    console.log(message);

    setMessages((prevState) => [...prevState, { message }]);
    sendMessage(message); //backend e mesaj iletmek icin
    setMessage("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.textInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
}

export default ChatForm;
