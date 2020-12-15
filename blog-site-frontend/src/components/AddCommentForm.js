import React, { useState } from 'react';

// passing all needed props
// to AddCommentForm
const AddCommentForm = ({ articleName, setArticleInfo }) => {

    // states for add comment form text fields
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    // fecth logic
    // function to add a comment
    const addComment = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comment`, {
            method: 'post', //options method
            body: JSON.stringify({ username, text: commentText }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        // constains article info
        const body = await result.json();

        // set articleInfo to what is in the body
        setArticleInfo(body);

        // Clear text fields after submission
        setUsername('');
        setCommentText('');
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
            {/* Add comment form */}
            <div id="add-comment-form">
                <h3>Add a Comment</h3>

                <label>
                    Name:
                <input type="text" value={username}
                        // when value changes, update it
                        onChange={(event) => setUsername(event.target.value)} />
                </label>

                <label>
                    Comment:
                <textarea rows="4" cols="50" value={commentText}
                        // when value changes, update it
                        onChange={(event) => setCommentText(event.target.value)} />
                </label>

                {/* button to to add comment to article */}
                <button onClick={() => addComment()}>Add Comment</button>
            </div>

        </>
    );
}

export default AddCommentForm;