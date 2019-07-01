import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function Background({ img, title, children, styleClass }) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-center display-2 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}

Background.defaultProps = {
  title: "Welcome",
  styleClass: "default-bg",
}
