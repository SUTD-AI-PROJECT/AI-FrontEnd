import Item from './Item';
import Statistics from './Statistics';
import LoadingSpinner from './LoadingSpinner';

const Output = ({stats={num_retweets:0}, prediction, msle=0, currentError=0, numberOfPredictions=0}) => {
  return (
    
    <div className='container2Inner'>
        <div>
        <h1>Output</h1>
        <br></br>
        <h3>Predicted Number of Retweets: {prediction}</h3>
        <h3>Actual Number of Retweets: {stats.num_retweets}</h3>
        <h3>Squared Logarithimic Error(SLE): {currentError}</h3>
        <br></br>
      </div>
      <div>
        <h2>Session Values</h2>
        <br></br>
        <h3>Number of Predictions made so far: {numberOfPredictions}</h3>
        <h3>Mean Squared Logarithimic Error(MSLE): {msle}</h3>
        </div>
    </div>

  )
}

export default Output
