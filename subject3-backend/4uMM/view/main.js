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
          <div class='buttons'>
          <button onclick="handleDeleteForum('${data.data[i].id}')">Delete</button>
          <button onclick="showUpdateForm('${data.data[i].id}','${data.data[i].title}', '${data.data[i].content}')">Edit </button>
          </div>
        </li>`
      }

      ul.innerHTML = postsHTML;
    } catch (error) {
      console.log(error);
    }
  });
}


//create a forum
async function handleCreateForum(event){
  event.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  console.log(title, content);

  const newForum = {
    title: title,
    content: content
  }

  //URL to makae the post request
  const url = 'http://localhost:3000/new-post';
  try {
    const options = {
      'method': "POST",
      "headers": {
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify(newForum)
    }

    const response = await fetch(url, options);
    if (response.status === 200){
      const {data, message} = await response.json();
      alert(message);
      window.location.href = 'index.html'
    } else{
      const {message} = await response.json();
      alert(message)
    }
  } catch (error) {
    console.log(`Error creating a forum from frontend ${error}`)
  }


}

//delete a forum
async function handleDeleteForum(id){
  console.log(id);
  
  const url = `http://localhost:3000/delete-post/${id}`
  try {
    const options = {
      'method': "DELETE",
      'headers': {
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch(url, options);
    if (response.status === 200){
      const {data, message} = await response.json();
      alert(message);
      window.location.href = 'index.html'
    } else{
      const {message} = await response.json();
      alert(message)
    }
  } catch (error) {
    console.log(`Error deleting a forum from frontend ${error}`)
  }
}

let todoId = '';
//edit a forum
 function showUpdateForm(id, title, content){
  // console.log(id);
  const updateContainer = document.getElementById('update-container');
  updateContainer.classList.remove('hide');

  const titleExtracted = document.getElementById('title');
  titleExtracted.value = title

  const contentExtracted = document.getElementById('content');
  contentExtracted.value = content

  // console.log(id, title, content)
  todoId = id;
}

async function handleUpdate(event){
  event.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const updatedForum = {
    title: title,
    content: content
  }
  // console.log(title, content);
  // console.log(todoId);

  const url = `http://localhost:3000/update-post/${todoId}`;
  try {
    const options = {
      'method': "PUT",
      'headers': {
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify(updatedForum)
    }
    const response = await fetch(url, options);
    if (response.status === 200){
      const {data, message} = await response.json();
      console.log(data)
      alert(message);
      window.location.href = 'index.html'
    } else{
      const {message} = await response.json();
      alert(message)
    }
  } catch (error) {
    console.log(`Error updating a forum from frontend ${error}`)
  }
}