async function fetchPost() {
    try {
    const response = await fetch("http://127.0.0.1:80/api/get/all/text");

    if (response.ok){
        throw new Error (`falha no fetch do textos: ${response.status}`)
    }

    return response.json();
} catch(e){
    console.log(e)
}
}

function listsPosts(postContainerElementId) {
    const postContainerElementId = document.getElementById
    (postContainerElementId);

    if(!postContainerElementId) {
        return;
    }

    fetchPost()
    .then(posts => {
        if(!post) {
            postContainerElementId.innerHTML = 'no posts fetched'
            return;
        }

        for(const post of posts) {
            postContainerElementId.appendChild(postElement(post))
        }

    })
    .catch(e =>{
        console.log(e);
    });
}

function postElement(post) {
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('href', `http://127.0.0.1:80/api/get/text?id=${post.id}`);

    const postTitleElement = document.createElement('h3');
    postTitleElement.appendChild(anchorElement);

    return postTitleElement;
}