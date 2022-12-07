async function searchKpop(searchString){//this functions calls for the api and returns the result
    
    var response = await fetch('http://api.music-story.com/en/genre/search?oauth_signature=r7GFC1%2B1PieoLklNKSrLlmTEoFo%3D&oauth_token=34134ac56eb2116593792799212794a2584003a9&name=kpop'+ searchString);
        renderData(await response.json());
}
var apiKey= 'd99891b62630d21866ff2ebcd1b132fd494b5404'
var requestUrl = `http://api.music-story.com/en/genre/search?oauth_signature=r7GFC1%2B1PieoLklNKSrLlmTEoFo%3D&oauth_token=34134ac56eb2116593792799212794a2584003a9&name=kpop`
    console.log("request " + requestUrl);
        fetch(requestUrl)
        .then(response => {
           return response.json();
         })
function getCard(data){//gets the data and assigns certain parts to certain divs
    document.getElementById('image').firstElementChild.src = `${data.image.url}`;
    document.getElementById('name').innerHTML = `${data.name}`;
    document.getElementById('bio').innerHTML = displayparagraph(data.biography);
    
    const search=`${data.name}`; //pulls the name and saves it into search
    main(search);//calls the next function
}