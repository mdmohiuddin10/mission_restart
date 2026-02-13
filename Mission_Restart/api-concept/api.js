// const posts = fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))


const loadData = () =>{
      const url = 'https://jsonplaceholder.typicode.com/users';
      fetch(url)
      .then((res) => res.json())
      .then((data) => {
            // console.log(data);
            // displayPost(data)
      });

}
const loadPost = () =>{
      const url = 'https://jsonplaceholder.typicode.com/users';
      fetch(url)
      .then((res) => res.json())
      .then((json) => {
            //  console.log(json);
            displayPost(json);
           
      })
}


const displayPost = (posts)=>{
    posts.forEach(post => {
      console.log(post);
    })
}
