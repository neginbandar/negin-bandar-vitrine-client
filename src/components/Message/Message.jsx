import "./Message.scss";

export default function Message() {
  return (
    <div className="message__container">
      <div className="message__from">
        <h5>username</h5>
      </div>
      <div className="message__content">
        <p>Hello, this is a message</p>
      </div>
    </div>
  );
}
