import React from 'react';
import { connect } from 'react-redux';
import {setPhotos, setLoading, setPages,setText, setColor} from "../actions"
import '../assets/styles/Search.css';
import {request} from "../utils/unplash"

import Unsplash, { toJson } from "unsplash-js";
const unsplash = new Unsplash({
  accessKey: "YdwyPcttzIAetr16_G3AZ-mHAITgrQeO8T0ODhytZGQ",
});


const Search = props => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPages({
      actualPage: 0,
      totalPages :0
    })
    props.setPhotos([])

    props.setLoading(true);
    request(props.text, props.color, props.actualPage).then(json =>{
      console.log(json)
      if(json.results.length > 0){
        props.setPhotos(json.results)
        props.setPages({
          actualPage: 1,
          totalPages :json.total_pages
        })
      }
      props.setLoading(false);
    })

  };


  const handleClickColor = e => {
    props.setColor(
      e.target.value === props.color ? "" : e.target.value
    )
  }
  const handleClickRecomendation = (e) => {
    props.setText(e.target.value);

  }
  const colors =['black', 'white', 'yellow', 'orange', 'red', 'purple', 'magenta', 'green', 'teal', 'blue'];
  const colorList = colors.map(el =>(
    <button
      key={el}
      style={{backgroundColor: el}}
      type="button"
      className={props.color === el ? 'color-active' : 'color' }
      onClick={handleClickColor}
      value={el}
    >
    </button>
  ));

  const recomendations =['food','cars','houses','computers','dogs','cats','plants'];
  const recomendationsList = recomendations.map(el =>(
    <button
      key={el}
      type="button"
      className='recomendation'
      onClick={handleClickRecomendation}
      value={el}
    >
    {el}
    </button>
  ));

  return (
    <>
    <form className="main" onSubmit={handleSubmit}>
      <h2 className="main__title">Buscador de imágenes</h2>
      <div className="recomendation_group">
        {recomendationsList}
      </div>
      <input type="text" name="title" className="input" value={props.text} onChange={(e) => props.setText(e.target.value)} />
      <div className="color_group">
        {colorList}
      </div>

      <input type="submit" className="btn" value="Buscar"/>
    </form>

    </>
  );
}

const mapStateToProps = state => {
  return {
    photos : state.photos,
    actualPage : state.actualPage,
    totalPages : state.totalPages,
    text : state.text,
    color : state.color,
  }
}

const mapActions = {
  setPhotos,
  setLoading,
  setPages,
  setText,
  setColor
}

export default connect(mapStateToProps,mapActions)(Search);
