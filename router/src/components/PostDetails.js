import React from 'react';

const PostDetails = (props) => {
    console.log(props.match.params.topic)
    return(
        <div class="panel panel-success">
            <div class="panel-heading">Post Details Heading</div>
            <div class="panel-body">Post Details Content
            for <h1>{props.match.params.topic}</h1>
            </div>
        </div>
    )
}

export default PostDetails