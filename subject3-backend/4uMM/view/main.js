//NavBar
function hideIconBar() {
  var iconBar = document.getElementById("iconBar");
  var navigation = document.getElementById("navigation");
  iconBar.setAttribute("style", "display:none;");
  navigation.classList.remove("hide");
}

function showIconBar() {
  var iconBar = document.getElementById("iconBar");
  var navigation = document.getElementById("navigation");
  iconBar.setAttribute("style", "display:block;");
  navigation.classList.add("hide");
}

//Comment
function showComment() {
  var commentArea = document.getElementById("comment-area");
  commentArea.classList.remove("hide");
}

//Reply
function showReply() {
  var replyArea = document.getElementById("reply-area");
  replyArea.classList.remove("hide");
}

getData();
function getData() {
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      const url = "http://localhost:3000/get-posts";
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);

      const title = document.getElementById("title");
      const content = document.getElementById("content");

      const firstItemTitle = data.data[0].title;
      const firstItemContent = data.data[0].content;

      title.innerText = firstItemTitle;
      content.innerText = firstItemContent;

      const title2 = document.getElementById("title2");
      const content2 = document.getElementById("content2");

      const secondItemTitle = data.data[1].title;
      const secondItemContent = data.data[1].content;

      title2.innerText = secondItemTitle;
      content2.innerText = secondItemContent;
    } catch (error) {
      console.log(error);
    }
  });
}
