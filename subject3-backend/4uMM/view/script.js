// alert("hi there, I am working");

async function handleSubmit(event) {
  event.preventDefault();
  // console.log("Signup fucntion is working");

  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  //console values
  console.log(email, username, password);

  //user data we want to send to the server
  const userData = {
    email: email,
    username: username,
    password: password,
  };

  //Get the URL to make the sign up (Post request)
  const url = "http://localhost:3000/signup";
  try {
    //make the post request
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const res = await fetch(url, options);
    if (res.status === 200) {
      //destructure the response
      const { message } = await res.json();
      alert(message);

      //redirect the user to the login page
      setTimeout(function () {
        window.location.href = "login.html";
      }, 2000); //2 second delay
    } else {
      const { message } = await res.json();
      alert(message);
    }
  } catch (error) {
    console.log(`Error siging up from frontend ${error}`);
  }
}

async function handleLogin(event) {
  event.preventDefault();
  // console.log("Signup fucntion is working");

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  //console values

  //user data we want to send to the server
  const userData = {
    username: username,
    password: password,
  };

  //Get the URL to make the sign up (Post request)
  const url = "http://localhost:3000/login";
  try {
    //make the post request
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const res = await fetch(url, options);
    if (res.status === 200) {
      //destructure the response
      const { message } = await res.json();
      alert(message);

      //redirect the user to the login page
      setTimeout(function () {
        window.location.href = "index.html";
      }, 2000); //2 second delay
    } else {
      const { message } = await res.json();
      alert(message);
    }
  } catch (error) {
    console.log(`Error siging up from frontend ${error}`);
  }
}
