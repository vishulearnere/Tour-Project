const url = 'https://course-api.com/react-tours-project'
import { useEffect, useState } from 'react'
import Tours from './Tours'
import Loading from './Loading'

const App = () => {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
    {/* {tours.length || <Loading />} */}
  const fetchTours = async () => {
    setLoading(true) // after removing all array elements while refreshing the default isLoading will not be true so
    // we should make it true to  display loading
    try {
      const res = await fetch(url)
      if (!res.ok) {
        setLoading(false)
        setIsError(true)
        return
      }
      const data = await res.json()
      // console.log(data)
      setTours(data)
    } catch (error) {
      setIsError(true)
      console.log(error)
    }
    setLoading(false)
    // return data
  }

  useEffect(() => {
    fetchTours()
      .then((data) => console.log(data))
      .catch((err) => console.log(err, 'erriiiriff'))
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (isError) {
    return (
      <main>
        <h2>There is an error</h2>
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button
            onClick={async() => await fetchTours()}
            type="button"
            style={{ marginTop: '2rem' }}
            className="btn"
          >
            Refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      {/* {tours.length || <Loading />} */}
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}
export default App
