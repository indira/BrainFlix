import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import FutureAI from "./components/FutureAI/FutureAI"

//Calling the stylesheet
import "../src/styles/main.css"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FutureAI />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)

if (module.hot) {
  module.hot.accept()
}
