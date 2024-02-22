import avatar from "../../assets/images/mohan-muruge.jpg"
const Comments = () => {
  return (
    <section>
      <div className="comment">
        <h2 className="headline-medium headline--margin-bottom">3 Comments</h2>
        <div className="comment__container">
          <div className="comment__container--avatar">
            <img className="comment__container-avatar-img" src={avatar} alt="Image" />
          </div>
          <form className="comment__container--form" id="commentForm">
            <div className="comment__container--form-inputlab">
              <label className="comment__container--form-label headline--small" to="name">
                Join the Conversation:{" "}
              </label>
              <input className="comment__container--form-input" type="text" id="name" name="name" placeholder="Add a new comment." />
            </div>
            <button className="comment__container--form-button" type="submit">
              Comment
            </button>
          </form>
        </div>
        <div className="comment__default">
          <div className="comment__default-line">
            <div className="comment__default-avatar">Avatar</div>
            <div className="comment__default-textarea">
              <div className="comment__default-HD">
                <div className="comment__default--header">Name</div>
                <div className="comment__default--date">Date</div>
              </div>
              <div className="comment__default--text">Comment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comments
