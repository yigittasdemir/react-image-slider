import React from 'react'
import ImageSlider from './ImageSlider'

const Home = () => {
    const slides = [
        {url: "https://static01.nyt.com/images/2022/10/25/science/19sci-webb-pillars-01/19sci-webb-pillars-01-videoSixteenByNineJumbo1600.jpg"},
        {url: "https://www.sammobile.com/wp-content/uploads/2022/07/STScI-01F8QS8JR44C2H9VMCBNZE6XNQ.png"},
        {url: "https://cdn.borntoengineer.com/2022/07/weic2205a.jpg"},
    ]
    const containerStyles = {
        width: '100%',
        height: '800px',
        margin: '0 auto',
    }
  return (
    <div style={containerStyles}>
       <ImageSlider slides={slides} />
    </div>
  )
}

export default Home
