import React from "react"
import ReactDOM from "react-dom/client"

import { BrowserRouter, Routes, Route } from "react-router-dom"
//Calling the stylesheet
import "../src/styles/App.scss"
import Header from "./components/Header/Header"
import HomePage from "./Pages/HomePage/HomePage"
import UploadVideo from "./Pages/UploadVideo/UploadVideo"
import PageNotFound from "./Pages/PageNotFound/PageNotFound"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video/:id" element={<HomePage />} />
        <Route path="/UploadVideo" element={<UploadVideo />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
