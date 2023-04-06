import { useState } from "react";
import ResultItem from "./ResultItem";

const ResultList = () => {
  let [results] = useState([
    {
        id:1,
        name:"Adobe",
        url:'https://www.adobe.com',
        title:'Adobe: Creative, marketing and document management ...',
        description:'Adobe is changing the world through digital experiences. We help our customers create, deliver and optimize content and applications.',
        tags:['adobe' , 'design' , 'creative' , 'photoshop' , 'illustrator']
    },
    {
        id:2,
        name:"Adobe",
        url:'https://www.adobe.com',
        title:'Adobe: Creative, marketing and document management ...',
        description:'Adobe is changing the world through digital experiences. We help our customers create, deliver and optimize content and applications.',
        tags:['adobe' , 'design' , 'creative' , 'photoshop' , 'illustrator']
    },
    {
        id:3,
        name:"Adobe",
        url:'https://www.adobe.com',
        title:'Adobe: Creative, marketing and document management ...',
        description:'Adobe is changing the world through digital experiences. We help our customers create, deliver and optimize content and applications.',
        tags:['adobe' , 'design' , 'creative' , 'photoshop' , 'illustrator']
    },
    {
        id:4,
        name:"Adobe",
        url:'https://www.adobe.com',
        title:'Adobe: Creative, marketing and document management ...',
        description:'Adobe is changing the world through digital experiences. We help our customers create, deliver and optimize content and applications.',
        tags:['adobe' , 'design' , 'creative' , 'photoshop' , 'illustrator']
    },
]);

  return (
  <div>
    {
        results.map((result , index)=>{
            return(
                <ResultItem
            key={index}
            {...result}
            />
            )

        })
    }
  </div>
  )
};

export default ResultList;
