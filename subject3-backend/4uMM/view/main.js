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

      console.log("Data is coming from backend", data.data);


      //select the ul container
      const ul = document.getElementById('subform-list');
      let postsHTML = '';
      for (let i=0; i < data.data.length; i++){
        // console.log(data.data[i].title);
        // console.log(data.data[i].content);
        postsHTML += `
        <li class="subforum-row">
          <div class="subforum-icon subforum-column center">
            <i class="fa fa-car center"></i>
          </div>
          <div class="subforum-description subforum-column">
            <h4><a href="#" id="title">${data.data[i].title}</a></h4>
            <p id="content">
              ${data.data[i].content}
            </p>
          </div>
        </li>`
      }

      ul.innerHTML = postsHTML;
    } catch (error) {
      console.log(error);
    }
  });
}
