import React from "react";
import Avatar from "./Avatar.jsx";
import Paragraph from "./Paragraph.jsx";
function Card(props){
return(<div className="card">
         <div className="top">
        <Paragraph detailInfo={props.value+")"} />
          <h2 class="name">{props.name}</h2>
          <Avatar img={props.img}/>
         </div>
           <div className="bottom">
             <Paragraph detailInfo={props.tel}/>
             <Paragraph detailInfo={props.email}/>
           </div>
      </div>);
}
export default Card; 