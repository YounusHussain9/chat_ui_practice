"use client";
import Image from "next/image";
import React, { useState } from "react";

import styles from "./ChatDetail.module.css";

const ChatDetail = () => {
  const [messages, setMessages] = useState([
    {
      msg: "Hey there! I have to clarity over your experience",
      type: "unsender",
    },
  ]);
  // const message = [
  //   {
  //     msg: "Yes sure! let me find a new contact over there, give me 2 hours I’ll reach out you again in this chat",
  //     type: "sender",
  //   },
  //   {
  //     msg: "Hey there! I have to clarity over your experience",
  //     type: "unsender",
  //   },
  //   {
  //     msg: "Yes sure! let me find a new contact over there, give me 2 hours I’ll reach out you again in this chat",
  //     type: "sender",
  //   },
  // ];
  let text;
  const handleChange = (e) => {
    text = e.target.value;
  };

  console.log(messages);
  return (
    <div className="p-3 w-100 ">
      <div className=" h-100 bg-white rounded">
        <div className="d-flex justify-content-between border-bottom ">
          {/* Candidate info section */}
          <div className="d-flex gap-4 align-items-center p-4">
            <Image src={"/images/avatar.svg"} width={112} height={112} />

            <div>
              <h4 className="m-0">Cameron Williamson</h4>
              <div className={`${styles.text_gray}`}>
                <Image
                  src={"/images/email_icon.svg"}
                  width={24}
                  height={24}
                  className="me-2"
                />

                <span>camron.williamson@gmail.com</span>
                <Image
                  src={"/images/content_copy_icon.svg"}
                  width={18}
                  height={18}
                  className="ms-2"
                />
              </div>
              <div className={`${styles.text_gray}`}>
                <Image
                  src={"/images/call_icon.svg"}
                  width={24}
                  height={24}
                  className="me-2"
                />
                <span>+44 20 7123 4567</span>
              </div>
            </div>
          </div>

          {/* Candidate Status section */}
          <div className={`${styles.candidate_wrap} p-4`}>
            <div className="d-flex align-items-center gap-3">
              <span>Candidate Status</span>
              <div className={`${styles.candidate_status}`}>
                In Progress
                <Image
                  src={"/images/down_chevron.svg"}
                  width={18}
                  height={18}
                />
              </div>
            </div>
            <div className={`${styles.progress_wrap} mt-3 rounded`}>
              <div className={`${styles.text} p-2`}>
                This show the candidate data collection status
              </div>
              <div className={`${styles.progress} d-flex gap-3`}>
                <div className="d-flex align-items-center justify-content-center">
                  <Image
                    src={"/images/progress_check.svg"}
                    width={9}
                    height={7}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <Image
                    src={"/images/progress_check.svg"}
                    width={9}
                    height={7}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <Image
                    src={"/images/progress_check.svg"}
                    width={9}
                    height={7}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <Image
                    src={"/images/export_notes_icon.svg"}
                    width={10}
                    height={10}
                  />
                </div>{" "}
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className={`${styles.message}`}>
          <div className={`${styles.message_wrap} d-flex `}>
            <div
              className={`${styles.message_time} text-center  position-relative`}
            >
              <span>Thu 04/03/2024</span>
            </div>
            {messages.map((item) => (
              <div
                className={`${styles.sender_message} ${
                  item.type == "sender"
                    ? styles.sender_left
                    : styles.sender_right
                } `}
              >
                <p>{item.msg}</p>
                <span className={`${styles.time}`}>12:00 PM</span>
              </div>
            ))}
          </div>

          {/* Message feild */}
          <div className=" position-relative">
            <textarea
              className={`${styles.message_box} w-100`}
              onChange={handleChange}
              rows={6}
            />
            <button
              className={`${styles.button}`}
              onClick={() => {
                if (text) {
                  setMessages([
                    {
                      msg: text,
                      type: "sender",
                    },
                    ...messages,
                  ]);
                }
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
