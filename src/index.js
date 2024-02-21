import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
//Calling the stylesheet
import "../src/styles/main.css"
function App() {
  return (
    <>
      <Header />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)

if (module.hot) {
  module.hot.accept()
}
