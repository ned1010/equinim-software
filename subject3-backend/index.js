url = "http://localhost:3000/get-posts";

async function getPosts(){
    try {
        const posts = await fetch(url, {
            method: 'GET'
        });
        // console.log(posts)
        if (posts.status == 200) {
            const data = await posts.json()
            console.log(data.data)
        }
    } catch (error) {
        console.log(`Error getting posts ${error}`)
    }
}

getPosts();


//update

url = 'http://localhost:3000/update-post/5b778c5c-b7d7-4ef1-875e-f3d50f8771e3'

async function updatePost(){
    //post that we would update 
    const update = {
        title: 'updating from VS code 1',
        content: "Hi there, we are connecting our frontend with the backend"
    }
    try {
        const updateItem = await fetch(url, {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(update)
        })
       if (updateItem.status === 200){
            // console.log("item updated")
       } else {
        console.log("Failed to update")
       }
        
    } catch (error) {
        console.log(`Error updating the post in the frontend ${error}`)
    }
}
updatePost()