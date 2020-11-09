import React from 'react';
import { connect } from 'react-redux';
import CarouselItem from './CarouselItem.js';
import '../assets/styles/Carousel.css';
import {setPhotos, setPages, setLoading} from "../actions"

import Unsplash, { toJson } from "unsplash-js";
const unsplash = new Unsplash({
  accessKey: "YdwyPcttzIAetr16_G3AZ-mHAITgrQeO8T0ODhytZGQ",
});



const Carousel = (props) => {

  const peticion = () => {
    setLoading(true)

    unsplash.search
    .photos(props.text,props.actualPage+1, 10,{ orientation: "portrait", color: props.color })
    .then(toJson)
    .then((json) => {
      props.setPages(
        {
          actualPage: props.actualPage+1,
          totalPages :json.total_pages
        }
      )
      props.setLoading(false)

      props.setPhotos([...props.photos,...json.results])
    })
    .catch((err)=> alert("Error, limite de peticiones alcanzado"))
  }
  const handleLoadMore = ()=>{
    peticion()
  }



  if(props.isLoading && props.photos.length === 0 )
    return (
      <h1>Loading</h1>
    )
  return(
  <section className="carousel">
    <div className="carousel__container">
    { props.photos.length > 0 &&
      props.photos.map( (photo,index) => {
        return (
          <CarouselItem key={index} photo={photo} />

        )
      })
    }
    </div>
    {
      props.actualPage !== 0 && props.actualPage !== 0 &&
      <div className="container-pages">
        <p>{`${props.actualPage}/${props.totalPages}`}</p>
      </div>
    }

    {
      props.actualPage !== 0 && props.actualPage < props.totalPages &&
      <div className="container-btnLoader">
      {
        !props.isLoading ?
        <button
        type="button"
        className='btn'
        onClick={handleLoadMore}
        >
        Cargar más
        </button>
        :
        <h1>Loading</h1>
      }

      </div>
    }
  </section>
  )
};

const mapStateToProps = state => {
  return {
    text: state.text,
    color: state.color,
    photos : state.photos,
    isLoading : state.isLoading,
    actualPage : state.actualPage,
    totalPages: state.totalPages
  }
}
const mapActions = {
  setPhotos,
  setPages,
  setLoading
}


export default connect(mapStateToProps,mapActions)(Carousel);
