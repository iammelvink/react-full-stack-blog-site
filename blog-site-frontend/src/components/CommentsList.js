import React from 'react';

/**
 * Takes a single prop.
 * Our comments
 * @param {*} param0 
 */
const CommentsList = ({ comments }) => (
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
        <h3>Comments:</h3>
        {/* Display comments */}
        {comments.map((comment, key) => (
            <div className="comment" key={key}>
                {/* Display username */}
                <h4>{comment.username}</h4>
                {/* Display actual comment text */}
                <p>{comment.text}</p>
            </div>
        ))}
    </>
);

export default CommentsList;