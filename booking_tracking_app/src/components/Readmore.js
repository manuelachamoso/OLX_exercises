import { Link } from 'react-router-dom'

const Readmore = () => {
  return (
    <div  className='info-details'>
        <button>
        <Link style={{ textDecoration: 'none', color: 'white'}} to='/books'>Books details</Link>
        </button>
  </div>
  )
}

export default Readmore