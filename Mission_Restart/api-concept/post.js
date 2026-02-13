const loadPost = () =>{
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then((res) => res.json())
    .then((json) =>{
    // console.log(json);
    displayPost(json)
    })
}


const displayPost =(posts) => {
    // get the container
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = "";
    // console.log(postContainer);
    posts.forEach(post => {
    //   console.log(post.title);
    //   create element
    // const li = document.createElement('li');
    // li.innerText = post.title;
    // console.log(li);
    const postCard = document.createElement('div');
    postCard.innerHTML= `
    <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
    `

    // add to the container
        postContainer.append(postCard)

    // add li to container
    // postContainer.appendChild(li)
    })
}

loadPost()

