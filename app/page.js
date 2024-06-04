import Image from "next/image";
import styles from "./page.module.css";
import ChatSection from "./components/ChatSection/ChatSection";

export default function Home() {
  return (
    <main >
      <ChatSection />
    </main>
  );
}
