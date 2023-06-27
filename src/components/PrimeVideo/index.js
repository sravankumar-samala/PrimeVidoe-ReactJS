// Write your code here
import {useState} from 'react'
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import MoviesSlider from '../MoviesSlider'
import './index.css'

export default function PrimeVideo(props) {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )

  const [videoUrl, setVideoUrl] = useState('')

  const onClickThumbnail = url => setVideoUrl(url)

  return (
    <div className="app-container">
      <div className="header-img-div">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
          alt="prime video"
        />
      </div>
      <MoviesSlider
        moviesList={actionMoviesList}
        title="Action Movies"
        onClickThumbnail={onClickThumbnail}
      />
      <MoviesSlider
        moviesList={comedyMoviesList}
        title="Comedy Movies"
        onClickThumbnail={onClickThumbnail}
      />
      <Popup
        open={!!videoUrl}
        position="center center"
        closeOnDocumentClick
        onClose={() => setVideoUrl('')}
      >
        {close => (
          <div className="video-player">
            <IoMdClose
              className="close-icon"
              data-testid="closeButton"
              onClick={close}
            />
            <ReactPlayer url={videoUrl} controls playing />
          </div>
        )}
      </Popup>
    </div>
  )
}
