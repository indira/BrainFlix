import avatar from "../../assets/images/mohan-muruge.jpg"
import views from "../../assets/icons/views.svg"
import likes from "../../assets/icons/likes.svg"
/*This component is for the comment section of the page*/
const Comments = ({ selectedVideo }) => {
  //let comments = selectedVideo
  //format date function to format the date
  const formatDate = timestamp => {
    const date = new Date(timestamp).toLocaleDateString() // No need to multiply by 1000 if timestamp is in milliseconds
    // const formattedDate = format(date, "MM/dd/yyyy")
    return date
  }
  //Click handler for the form
  const clickHandler = e => {
    e.preventDefault()
  }
  return <h1>Title</h1>
}

export default Comments
