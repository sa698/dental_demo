import { Avatar } from "antd";
import React from "react";

function AppBar() {
  return (
    <div
      style={{
        // border:"1px solid #000",
        background: "#184b54",
        height: "50px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "10px",
      }}
    >
      <Avatar
        size={"medium"}  
        style={{
          backgroundColor: "green", 
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        {"S"}
      </Avatar>
      <b
        style={{
          paddingLeft: "10px",
          color: "white",  
          textTransform: "uppercase",
          fontWeight: "bold",
          paddingLeft: "10px",
          
        }}
      >
        Abdul Sajeer
       
      </b>
      <p  style={{
          paddingLeft: "10px",
          color: "white", 
        
         
          
        }}>Mr.No :125822</p>
    </div>
  );
}

export default AppBar;
