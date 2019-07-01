import React from "react"

export default function Title({ title }) {
  return (
    <div className="row">
      <div className="col text-center mb-3">
        <h1 className="title text-center display-5 text-capitalize">{title}</h1>
        <hr />
      </div>
    </div>
  )
}
