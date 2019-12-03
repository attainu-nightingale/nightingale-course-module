import React from 'react';
import {connect} from "react-redux";
import { stateMapper } from '../store/store';

class TrendingComponet extends React.Component{

  componentDidMount(){
    this.props.dispatch({
      type: "FETCH_VIDEOS"
    })
  }

  render(){
    return (
      <div>
        <h2 className="text-danger">Trending Videos</h2>
        {
          this.props.videos.map(obj => {
            return <div key={obj.id}>
              <img src={obj.snippet.thumbnails.default.url} alt="img"></img>
              {obj.snippet.title}
            </div>
          })
        }
      </div>
    )
  }
}


let Trending = connect(stateMapper)(TrendingComponet)
export default Trending;