//[label /pages/index.js]
import Link from 'next/link';
import React, { Component } from 'react'
import Layout from '../components/MyLayout.js';

const linkStyle = {
  marginRight: 15
}

export default class extends Component {
  render () {
    return (
      <Layout>
        <div>
        <div>Your Next.js App</div>
        
        </div>
      </Layout>
    )
  }
}
