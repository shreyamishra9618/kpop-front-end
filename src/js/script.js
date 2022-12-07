async function searchKpop(searchString){//this functions calls for the api with the users input and returns the result
    
    var response = await fetch('http://api.music-story.com/en/genre/search?oauth_signature=r7GFC1%2B1PieoLklNKSrLlmTEoFo%3D&oauth_token=34134ac56eb2116593792799212794a2584003a9&name=kpop'+ searchString);
        renderData(await response.json());
}