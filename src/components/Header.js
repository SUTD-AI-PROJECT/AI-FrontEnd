import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({title, subtitle, getRandomTweet, setTweet} ) => {
  const location = useLocation()

  const getTweet= async () =>{
    const data = await getRandomTweet()
    setTweet(data.raw)
  }

  return (
    <header className='header'>
      <div className='title'>
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
      </div>
      {location.pathname==='/' &&<Button onClick={getTweet} text={'Random Tweet'} color={'green'}/>}

    </header>
  )
}

Header.defaultProps = {
    title: 'Retweet Prediction',
    subtitle: '50.021 : Artificial Intelligence'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header
