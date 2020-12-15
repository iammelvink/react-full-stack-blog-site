import React from 'react';

// passing all needed props
// to UpvotesSection
const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {

    // fetching logic
    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'post', //options method
        });

        // constains article info
        const body = await result.json();

        // set articleInfo to what is in the body
        setArticleInfo(body);
    }

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
            <div id="upvotes-section">
                {/* button to upvote an article */}
                <button onClick={() => upvoteArticle()}>Add Upvote</button>

                {/* Display article upvotes */}
                <p>This post has been upvoted {upvotes} times</p>
            </div>
        </>
    );
}

export default UpvotesSection;