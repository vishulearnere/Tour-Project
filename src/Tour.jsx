import { useState } from 'react'

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false)
  // let newInfo = info.substring(0, 200)
  // if (readMore) {
  //   newInfo = info
  // }
  // later used ?: conditional operator
  // console.log(info.substring(0, 10))
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">₹{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)} className="info-btn">
            {readMore ? ' show less' : ' read more'}
          </button>
        </p>
        <button
          type="button"
          onClick={() => {
            removeTour(id)
          }}
          className="btn btn-block delete-btn "
        >
          Not interested
        </button>
      </div>
    </article>
  )
}
export default Tour
