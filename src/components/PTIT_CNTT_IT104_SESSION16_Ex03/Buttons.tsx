import React, { Component } from 'react'
type Btn={
    color:string;
    backgroundColor:string;
    label:string;
}
type State={
    array:Btn[];
}
export default class Buttons extends Component<{},State> {
    constructor(props:{}){
        super(props);
        this.state={
            array:[
                {
                    color:"white",
                    label:"Primary",
                    backgroundColor:"blue"
                },
                {
                    color:"white",
                    label:"Secondary",
                    backgroundColor:"#6c757d"
                },
                {
                    color:"white",
                    label:"Success",
                    backgroundColor:"green"
                },
                {
                    color:"black",
                    label:"Warning",
                    backgroundColor:"yellow"
                },
                {
                    color:"white",
                    label:"Danger",
                    backgroundColor:"red"
                },
                {
                    color:"black",
                    label:"Info",
                    backgroundColor:"#0dcaf0"
                },
                                {
                    color:"black",
                    label:"Light",
                    backgroundColor:"white"
                },                
                {
                    color:"white",
                    label:"Dark",
                    backgroundColor:"black"
                }
            ]
        }
    }
  render() {
    return (
      <div style={{backgroundColor:"black",padding:"10px",margin:"5px"}}>
        {this.state.array.map((item:Btn, index) => (
            <button key={index} style={{color:item.color,backgroundColor:item.backgroundColor}}>{item.label}</button>
        ))}
      </div>
    )
  }
}
