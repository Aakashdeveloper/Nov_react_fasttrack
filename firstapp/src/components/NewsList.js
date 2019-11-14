import React from 'react';

 const NewsList = (props) => {
     console.log("In News List>>>>", props)
     const items = props.newsData.map((mynews) => {
         return(
             <div>
                 <h3>{mynews.title}</h3>
                 <div>
                     {mynews.feed}
                 </div>
             </div>
         )
     })
        return(
            <React.Fragment>
                {items}
            </React.Fragment>
        )

}

export default NewsList;

/*
function add(a,b){
    return a+b
}

add(1,2)
*/
