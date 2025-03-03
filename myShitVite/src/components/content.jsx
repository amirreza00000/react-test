// import React from "react";
import { Card } from "../card";

const Content = ({cardList,itDelete}) =>{
    return(
        <div className="content">

    {cardList.map((item,index) => {
        return (
          <Card
            key={index}
            title={item.title}
            desc={item.desc}
            date={item.date}
            onDelete={() => itDelete(item.title)}
          />
        );
      })}       
        </div>
    )
}


export {Content};