import React, { Component } from 'react'

export default class WhyNumber extends Component {
  render() {
    const number = this.props.number
    const numberDesc = this.props.numberDesc

    return (
     <div className="col order 3 menu">
        <h1 className='text-center head'> {number}+ </h1>
        <p className='text-center parap'>{numberDesc} </p>
      </div>
    )
  }
}
