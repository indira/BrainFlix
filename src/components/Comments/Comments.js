import avatar from "../../assets/images/mohan-muruge.jpg"
import views from "../../assets/icons/views.svg"
import likes from "../../assets/icons/likes.svg"
import { format } from "date-fns"
/*This component is for the comment section of the page*/
const Comments = ({ selectedComments, comments }) => {
  //format date function to format the date
  // Corrected formatDate function
  const formatDate = timestamp => {
    const date = new Date(timestamp) // No need to multiply by 1000 if timestamp is in milliseconds
    const formattedDate = format(date, "MM/dd/yyyy")
    return formattedDate
  }
  //Click handler for the form
  const clickHandler = e => {
    e.preventDefault()
  }
  return (
    <section>
      <div className="wrapper--comment">
        <div className="headline--vlarge headline--margin-top ">{comments.title}</div>
        <div className="selectedComment">
          <div className="selectedComment__main">
            <div className="selectedComment__main--one">
              <div className="selectedComment__main-by headline--medium--big">By {comments.channel}</div>
              <div className="selectedComment__main-date headline--medium headline--silver">{comments.timestamp}</div>
            </div>
            <div className="selectedComment__main--two headline--silver">
              <div className="selectedComment__main-view ">
                <img className="selectedComment__main--icon" src={views} alt="views" />
                <h2 className="headline--medium ">{comments.views}</h2>
              </div>
              <div className="selectedComment__main-like">
                <img className="selectedComment__main--icon" src={likes} alt="likes" />
                <h2 className="headline--medium">{comments.likes}</h2>
              </div>
            </div>
          </div>
          <div className="selectedComment__description">
            <p className="selectedComment__description--text">{comments.description}</p>
          </div>
        </div>

        <div className="comment">
          <h2 className="headline-medium ">{selectedComments.length} Comments</h2>
          <div className="comment-main">
            <div className="comment-main__avatar">
              <img className="comment-main__avatar-img" src={avatar} alt="Image" />
            </div>
            <form className="comment-main__form" id="commentForm" onSubmit={clickHandler}>
              <div className="comment-main__form-inputlab">
                <label className="headline--small" to="name">
                  Join the Conversation:{" "}
                </label>
                <input type="text" id="name" name="name" placeholder="Add a new comment." />
              </div>
              <button className="comment-main__form-button" type="submit">
                Comment
              </button>
            </form>
          </div>
          {selectedComments.map(comment => (
            <div className="comment-default" key={comment.id}>
              <div className="comment-default-line">
                <div className="comment-default__avatar">Avatar</div>
                <div className="comment-default__textarea">
                  <div className="comment-default__HD">
                    <div className="comment-default__header">{comment.name}</div>
                    <div className="comment-default__date">{comment.timestamp}</div>
                  </div>
                  <div className="comment-default__text">{comment.comment}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Comments
