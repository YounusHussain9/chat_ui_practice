import React from "react";
import styles from "./ChatList.module.css";
import Image from "next/image";

const users = [
  {
    name: "Cameron Williamson",
    time: "12",
    message: "Hey there! I have to clarity over your experience",
    image: "",
  },
  {
    name: "Marvin McKinney",
    time: "12",
    message: "Please tell me the reference number for you",
    image: "",
  },
  {
    name: "Annette Black",
    time: "12",
    message: "Yes sure!",
    image: "",
  },
];
const ChatList = () => {
  return (
    <div className={`${styles.rightSide} bg-white`}>
      <div className={styles.rightSide_search}>
        <span>Chat</span>
        <Image src={"/images/search.svg"} width={24} height={24} />
      </div>

      <div>
        {users.map((user) => (
          <div className={styles.rightSide_user}>
            <Image src={"/images/avatar.svg"} width={48} height={48} />
            <div>
              <span className={styles.time}>{user.time} min ago</span>
              <div className={styles.name}>{user.name}</div>
              <div className={`${styles.message}`}>{user.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
