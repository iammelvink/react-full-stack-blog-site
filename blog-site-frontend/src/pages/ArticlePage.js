import React, { useEffect, useState } from 'react';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
    // allows us to access the exact article
    const name = match.params.name;

    // find article by name
    const article = articleContent.find(article => article.name === name);

    /**
     * an anonymous function
     * to update on component refresh
     */
    useEffect(() => {
        const fetchData = async () => {
            // fetch the article by name
            const result = await fetch(`/api/articles/${name}`);

            // constains article info
            const body = await result.json();

            console.log(body);

            // set articleInfo to what is in the body
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);

    /**
     * Using React hooks
     * articleInfo will be populated by sending a req to the server
     * setArticleInfo will be used to update articleInfo
     */
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    // temp fix for non-existent article
    if (!article) return <NotFoundPage />
    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
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
            <h1>{article.title}</h1>
            {/* Display article upvotes */}
            <p>This post has been upvoted {articleInfo.upvotes} times</p>
            {article.content.map((paragraph, key) => (<p key={key}>{paragraph}</p>
            ))}
            {/* Dissplay comments from CommentsList component.
            comments prop */}
            <CommentsList comments={articleInfo.comments} />
            {/* Display related articles EXCEPT the one that we are on */}
            <h3>Related Articles:</h3>
            <ArticlesList articles={otherArticles} />
        </>
    );
}

export default ArticlePage;