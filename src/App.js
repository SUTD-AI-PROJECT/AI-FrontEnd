import Header from './components/Header'
import { useState, useEffect} from "react"
import Footer from './components/Footer'
import About from './components/About'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Hero from './components/Hero';



function App() {

  const [tweet, setTweet] = useState()
  const [stats, setStats] = useState()

  const getRandomTweet = async () =>{
    const res = await fetch(`http://localhost:8000/getRandomTweet`)
    const data= await res.json()
    getStatistics(data)
    return data
  }

  const getStatistics = async (data) =>{
    const res = await fetch(`http://localhost:8000/getTweetPredictionStatistics`,
    {
      method:'POST',
      headers:{
      'Content-type':'application/json'
      },
      body: JSON.stringify(data),
    }
    )

    const output = await res.json()
    setStats(output)
  }

  useEffect(() => {
    const getStartTweet = async () =>{
      const randTweet = await getRandomTweet()
      setTweet(randTweet)
      
    }
    getStartTweet()
    console.log(tweet)
  }, [])



  return (
    <Router>
      <div className="container">
        <Header getRandomTweet={getRandomTweet} setTweet = {setTweet} /> 
        <Routes>
          <Route path='/' element={<Hero tweet={tweet} stats={stats}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
