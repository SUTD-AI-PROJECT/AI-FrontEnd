import React from 'react'

const Statistics = ({stats}) => {
  return (
    <div>
      <h1>Model Derived Values</h1>
      <br></br>
      <div>
        <h2>Derived Values</h2>
        <br></br>
        <h3>Number of Entities:</h3>
        <h3>Number of Hashtags:</h3>
      </div>
      
      <div>
        <h2>Output</h2>
        <br></br>
        <h3>Predicted Number of Retweets:</h3>
        <h3>Mean Squared Logarithimic Error(MSLE):</h3>

      </div>
      <div>
        <h2>Session Values</h2>
        <br></br>
        <h3>Number of Predictions made so far:</h3>
        <h3>Average Mean Squared Logarithimic Error(MSLE):</h3>

      </div>
    </div>
    
  )
}

export default Statistics
