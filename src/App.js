import Header from './components/Header'
import { useState, useEffect} from "react"
import Footer from './components/Footer'
import About from './components/About'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Hero from './components/Hero';
import Output from './components/Output'



function App() {

  const [tweet, setTweet] = useState()
  const [stats, setStats] = useState()
  const [prediction, setPrediction] = useState(0)
  const [numberOfPredictions, setNumberOfPredictions] = useState(0)
  const [msle, setMSLE] = useState(0)
  const [currentError, setCurrentError] = useState(0)

  const getRandomTweet = async () =>{
    const res = await fetch(`http://localhost:8000/getRandomTweet`)
    const data= await res.json()
    getStatistics(data.index)
    return data
  }

  const getStatistics = async (data) =>{
    const res = await fetch(`http://localhost:8000/getTweetPredictionStatistics?index=${data}`)
    const output = await res.json()
    setStats(output.stats)
    setPrediction(output.prediction)
    setCurrentError(Math.pow(Math.log(output.stats.num_retweets+1)-Math.log(output.prediction+1),2))
    addError(currentError)
  }

  const addError = async(data) =>{
    const value = ((numberOfPredictions*msle) + data)/(numberOfPredictions+1)
    setMSLE(value)
    setNumberOfPredictions(numberOfPredictions+1)
  }

  useEffect(() => {
    const getStartTweet = async () =>{
      const randTweet = await getRandomTweet()
      setTweet(randTweet.raw)
    }
    getStartTweet()
  }, [])



  return (
    <Router>
      <div className="Outer">
        <div className="container">
          <Header getRandomTweet={getRandomTweet} setTweet = {setTweet} /> 
          <Routes>
            <Route path='/' element={<Hero tweet={tweet} stats={stats}/>}/>
          </Routes>
        </div>
        <div className="container2">
          <Routes>
            <Route path='/' element={<Output stats={stats} prediction={prediction} msle={msle} currentError={currentError} numberOfPredictions={numberOfPredictions}/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
