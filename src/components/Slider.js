import React from 'react'

export default class Slider extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }

  redner(){
    return(
      <>
        {this.props.text}
      </>
    )
  }
}