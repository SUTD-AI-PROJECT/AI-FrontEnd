import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({title, toggleAddTask, showAddTask} ) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname==='/' &&<Button onClick={toggleAddTask} text={!showAddTask ?'Add':'Close'} color={!showAddTask ?'green':'red'}/>}

    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

const headingStyle = {
    color:'red', backgroundColor:'Black'
}
export default Header
