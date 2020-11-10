export function getApiData(){
    return fetch('http://localhost:3001/mostCommentedPosts')
    .then((response)=>response.json())
    .then((res)=>res)
}