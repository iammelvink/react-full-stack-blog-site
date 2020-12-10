import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';

const ArticlesListPage = () => (
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
        <h1>Articles</h1>
        <ArticlesList articles={articleContent} />
    </>
);

export default ArticlesListPage;