import MYTUBE_API_CONFIG from "../../config";

function fetchVidoes(store){
    let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${MYTUBE_API_CONFIG.YOUTUBE_API_KEY}&chart=mostPopular&maxResults=10`;
    fetch(url)
    .then((data) => data.json())
    .then(response => {
        console.log("videos: ", response);
        store.dispatch({
            type: "VIDEOS_LOADED",
            videos: response.items
        })
    })    
}

export {
    fetchVidoes
}