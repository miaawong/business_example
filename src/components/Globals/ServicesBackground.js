import React, { Component } from "react"
import Title from "./Title"
import BackgroundImage from "gatsby-background-image"
import Services from "../Home/Services"

export default function ServicesBackground({
  img,
  styleClass,
  title,
  children,
}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <div className="container">
        <Title title={title} className="py-5" />
        <div className="wrapper text-center">
          <Services
            serviceLinks="services/irrigation"
            serviceName="IRRIGATION"
          />
          <Services serviceLinks="services/drainage" serviceName="DRAINAGE" />
          <Services
            serviceLinks="services/hardscapes"
            serviceName="HARDSCAPES"
          />
          <Services
            serviceLinks="services/maintenance"
            serviceName="MAINTENANCE"
          />
          <Services
            serviceLinks="services/seasonal"
            serviceName="SEASONAL COLOR"
          />
          <Services
            serviceLinks="services/install&design"
            serviceName="INSTALL & DESIGN"
          />
        </div>
      </div>
    </BackgroundImage>
  )
}

ServicesBackground.defaultProps = {
  title: "Our Services",
  styleClass: "servicesStyle",
}
