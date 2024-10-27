import "./MessagesPage.scss";
import Message from "../../components/Message/Message";

export default function MessagesPage() {
  return (
    <div className="messages__list">
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}
