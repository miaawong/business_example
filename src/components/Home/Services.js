import React from "react"

export default function Services({ serviceName, serviceLinks }) {
  return (
    <div className="servLinks">
      <a href={serviceLinks}>
        <h3>{serviceName}</h3>
      </a>
    </div>
  )
}
