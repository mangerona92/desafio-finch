import React, { Component } from "react";

export default class Sidebar extends Component {
  state= {
    modules: [
      {
        id: 1,
        title: 'test'
      },
      {
        id: 2,
        title: 'tes3'
      }
    ]
  }
  render() {
    const { modules } = this.state;

    return (
      <aside>
        { modules.map(module => (
          <div>
            <strong>
              {module.title}
            </strong>
          </div>
        )) }
      </aside>
    )
  }
}
