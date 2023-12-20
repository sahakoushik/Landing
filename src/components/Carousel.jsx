import React from 'react'
import { imageList } from '../data/images';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const Carousel = () => {
    
  return (
    <div>
      <Zoom scale={1.4} indicators={false}>
              {
                  imageList.map((images)=>(
                          <div className="h-auto " key = {images.ID}>
                              {/* <img className="w-full h-auto  object-contain" src={require("../images/slider/g1.jpg")} alt="..." /> */}
                              <img className="w-full h-500  object-contain" src={images.url} alt={images.alt} />
                          </div>
                  ))
              }
          
      </Zoom>
    </div>
  )
}

export default Carousel