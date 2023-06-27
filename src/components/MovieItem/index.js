// Write your code here
import './index.css'

const MovieItem = props => {
  const {movieObject, onClickThumbnail} = props
  const {thumbnailUrl, videoUrl} = movieObject

  return (
    <div className="thumbnail">
      <img
        src={thumbnailUrl}
        alt="thumbnail"
        onClick={() => onClickThumbnail(videoUrl)}
      />
    </div>
  )
}
export default MovieItem
