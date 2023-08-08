import { useEffect } from "react";
import ChatForm from "./ChatForm";
import ChatList from "./ChatList";
import { init, subscribeChat } from "../SocketApi";
import { useChat } from "../contxt/ChatContext";

function Container() {
  const { setMessages } = useChat();
  useEffect(() => {
    init();
    subscribeChat((message) => {
      setMessages((prevState) => [...prevState, { message }]);
    });
  }, []);
  return (
    <div className="App">
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;
