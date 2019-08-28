import React from 'react';

const News =props=>{
    return(
        <div>
            {props.news.map(n => <div key={n.id}>
                <div>{n.title}</div>
                <div>{n.text}</div>
            </div>  )}
        </div>
    )
}


export default News;