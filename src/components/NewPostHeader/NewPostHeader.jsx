import "./NewPostHeader.scss";

export default function NewPostHeader() {
  return (
    <div className="new-post-header">
      <button className="button button--cancel">Cancel</button>
      <h4 className="new-post-header__title">Create a new post</h4>
      <button className="button button--submit">Publish</button>
    </div>
  );
}
