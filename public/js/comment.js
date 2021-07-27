const commentFormHandler = async function(event) {
    event.preventDefault();

    const postID = document.querySelector('#newComment').dataset.postid;
    const postComment = document.querySelector('#postComment').value.trim();

    if (postComment) {
        await fetch('/api/comments', {
            method : 'POST',
            body: JSON.stringify({
                comment_id,
                new_comment,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        document.location.reload();
    }
};

document
    .querySelector('#newComment')
    .addEventListener('submit', commentFormHandler);


