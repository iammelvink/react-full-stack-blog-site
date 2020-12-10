import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
    /**
     * React fragments enables a component to 
     * return multiple elements at the same level
     * Long hand/way
     * < React.Fragment >
     * </React.Fragment>
     * 
     * Short hand/way
     * <>
     * </>
     */

    <>
        {/* create an element for each article */}
        {articles.map((article, key) => (
            <Link className="article-list-item" key={key} to={`/article/${article.name}`}>
                <h3>{article.title}</h3>
                {/* article preview
                First 150 chars */}
                <p>{article.content[0].substring(0, 150)}...</p>
            </Link>
        ))}
    </>
);

export default ArticlesList;