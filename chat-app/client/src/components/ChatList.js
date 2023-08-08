import React from "react";
import styles from "./styles.module.css";
import { useChat } from "../contxt/ChatContext";
import ChatItem from "./ChatItem";
import ScrollableFeed from "react-scrollable-feed";
function ChatList() {
  const { messages } = useChat();

  return (
    <div className={styles.chatlist}>
      <ScrollableFeed forceScroll={true}>
        {messages.map((item, key) => {
          return <ChatItem item={item} key={key} />;
        })}
      </ScrollableFeed>
    </div>
  );
}

export default ChatList;
