import React from 'react';
import '../css/article.css';



const Articles = ({articles, loading}) =>{

    if(loading){
        return(<h2>Loading....</h2>)
    }
    return(
        <div>
            <ul>
                {articles.map((article, index) => (
                    <li key={article.id}>
                        <h1 className="article-title">{article.title}</h1><br/>
                        <h2>{article.authors}</h2>
                        <span dangerouslySetInnerHTML={{__html:article.body}} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Articles;