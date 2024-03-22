import React from "react";


export const _context = {
  width: "100%",
  margin: 0,
  border: "1px solid black",
  maxWidth: '100%', 
  backgroundColor: "#d5d7dd"
}


export const _title = {
  fontSize: '3vw' 
}


export const _scription = {
  fontSize: '1.5vw'
}


export const _position = {
  marginLeft: 20/2 + "%", 
  marginTop: 20/2 + "%"
}


const boxSizing: React.CSSProperties['boxSizing'] = 'border-box';
export const _rounded_box = {
  borderRadius: '15px',
  border: '1px solid #000',
  padding: '5px',
  boxSizing,
  width: '100%',
  height: '100%',
  maxWidth: '100%',
  maxHeight: '100%'
}