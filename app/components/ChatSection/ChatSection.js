import React from "react";
import styles from "./Chat.module.css";
import Image from "next/image";
import ChatList from "./ChatList/ChatList";
import ChatDetail from "./ChatDetail/ChatDetail";

const ChatSection = () => {
  return (
    <div className={`d-flex ${styles.wrapper}`}>
      <ChatList />
      <ChatDetail />
    </div>
  );
};

export default ChatSection;
