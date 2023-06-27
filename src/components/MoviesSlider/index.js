// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList, title, onClickThumbnail} = props

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="container">
      <h1>{title}</h1>
      <Slider {...settings}>
        {moviesList.map(eachObj => (
          <MovieItem
            movieObject={eachObj}
            key={eachObj.id}
            onClickThumbnail={onClickThumbnail}
          />
        ))}
      </Slider>
    </div>
  )
}
export default MoviesSlider
