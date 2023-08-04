import React from "react";
import styles from "./styles.module.css";
import { useChat } from "../contxt/ChatContext";
import ChatItem from "./ChatItem";

function ChatList() {
  const { messages } = useChat();

  return (
    <div className={styles.chatlist}>
      <div>
        {messages.map((item, key) => {
          return <ChatItem item={item} key={key} />;
        })}
      </div>
    </div>
  );
}

export default ChatList;
