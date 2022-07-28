import Item from './Item';
import Statistics from './Statistics';
import LoadingSpinner from './LoadingSpinner';

const Hero = ({tweet, stats}) => {
  return (
    <div className='tweetSection'>
      <div className='tweet'>{tweet === undefined ?<LoadingSpinner text={"Loading Tweet"} />:<Item item={tweet}/>}</div>
      <div className='stats'>{stats === undefined ?<LoadingSpinner text={"Loading Statistics"}/>:<Statistics stats={stats}/>}</div>
    </div>

  )
}

export default Hero
