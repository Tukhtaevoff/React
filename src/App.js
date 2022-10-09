import React from "react"
import ReactDOM from "react-dom"
import "../src/style/style.css"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/header"
import Main from "./components/Main/Main"

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}


ReactDOM.render(React.createElement(App), document.getElementById("root"));

// finished