import React from 'react'
import '../App.css'

export default function catcard(props) {
  return (
     <div className="catcard" style={{ backgroundImage: `url(${props.src})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        {/* <div className="image">
             <img src={props.src} alt="" />
        </div> */}
        <div className="h2">
            <h2>{props.title}</h2>
        </div>
    </div>
  )
}
