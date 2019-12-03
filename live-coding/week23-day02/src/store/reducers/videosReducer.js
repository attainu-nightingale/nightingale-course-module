import { fetchVidoes } from "../api/youtube"
import {store} from "../store";

function videoReducer(videos = [], action){

    if(action.type == "FETCH_VIDEOS"){
        fetchVidoes(store);
    }

    if(action.type == "VIDEOS_LOADED"){
        videos = action.videos
    }

    return videos
}

export default videoReducer;