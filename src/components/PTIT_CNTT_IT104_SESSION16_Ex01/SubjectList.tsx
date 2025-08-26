import React, { Component } from 'react'
import './SubjectList.css'
type SubjectClass={}

type SubjectState={
    subjects:string[];
}
export default class SubjectList extends Component<SubjectClass,SubjectState> {
    constructor(props:SubjectClass){
        super(props);
            this.state={
            subjects:['Toán','Văn','Anh','Hoá','Sinh']
        }
    }
  render() {
    return (
      <div style={{justifyContent:"center",alignItems:"center",textAlign:"center",backgroundColor:"black",color:"white",paddingRight:"15px"}}>
        <h2><img src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png" alt='Books' style={{height:"25px",width:"25px"}} />Danh sách môn học</h2>
        <ul className="subject-list" style={{listStyleType:"none",color:"#4a77a0"}}>
          {this.state.subjects.map((subject, index) => (
            <li key={index} className="subject-item">{subject}  <br /><br /></li>
          ))}

        </ul>
      </div>
    )
  }
}
