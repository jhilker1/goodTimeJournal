//[label /pages/index.js]
import Link from 'next/link';
import React, { Component } from 'react'
const linkStyle = {
  marginRight: 15
}

export default class extends Component {
  render () {
    return (
      <div>
      <div>Your Next.js App</div>
      <div> 
          <Link href="/SignUp">
              <a style={linkStyle}>SignUp</a>
          </Link>
      </div>
      </div>
    )
  }
}
