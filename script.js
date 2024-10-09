document.getElementById("postButton").addEventListener("click", function () {
  const postContent = document.getElementById("postContent").value;
  if (postContent.trim()) {
    const postFeed = document.getElementById("postFeed");

    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    const postText = document.createElement("p");
    postText.textContent = postContent;

    const likeButton = document.createElement("button");
    likeButton.classList.add("like-button");
    likeButton.textContent = "Like";
    let likeCount = 0;
    const likeCountDisplay = document.createElement("span");
    likeCountDisplay.classList.add("like-count");
    likeCountDisplay.textContent = `(${likeCount})`;

    likeButton.addEventListener("click", function () {
      likeCount++;
      likeCountDisplay.textContent = `(${likeCount})`;
    });

    const commentInput = document.createElement("div");
    commentInput.classList.add("comment-input");
    const commentTextArea = document.createElement("textarea");
    commentTextArea.placeholder = "Add a comment...";
    const commentButton = document.createElement("button");
    commentButton.textContent = "Comment";

    commentButton.addEventListener("click", function () {
      const commentText = commentTextArea.value;
      if (commentText.trim()) {
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.textContent = commentText;
        postDiv.appendChild(commentDiv);
        commentTextArea.value = ""; // Clear input
      } else {
        alert("Please enter a comment!");
      }
    });

    commentInput.appendChild(commentTextArea);
    commentInput.appendChild(commentButton);

    postDiv.appendChild(postText);
    postDiv.appendChild(likeButton);
    postDiv.appendChild(likeCountDisplay);
    postDiv.appendChild(commentInput);

    postFeed.prepend(postDiv); // Add new post at the top
    document.getElementById("postContent").value = ""; // Clear the textarea
  } else {
    alert("Please enter a post!");
  }
});
