import React, { Component } from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default class Bio extends Component {
  render() {
    return (
      <section className="py-5">
        <div className="container">
          <Title title="Our Experience" />
          <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
              <p className="lead text-muted mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ut elementum eros. Nulla ac mi at elit commodo
                pellentesque ac eu ex. Sed cursus libero quis porttitor
                consectetur. Pellentesque finibus scelerisque odio, nec aliquam
                mauris placerat vel. Mauris vitae justo non elit scelerisque
                blandit ac sit amet sem. Duis eu sollicitudin enim, ut aliquet
                nisi.
              </p>
              <Link to="/about/">
                <button className="btn text-uppercase btn-white mt-3">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
