import React from 'react'

const item = ({item}) => {
  return (
    <div>
      <h1>Tweet Input</h1>
      <br></br>
      <h3>Tweet ID: {item.tweet_id} </h3>
      <h3>Username: {item.username} </h3>
      <br></br>
      <h3>Timestamp: {item.timestamp} </h3>
      <br></br>
      <h3>Followers: {item.num_followers}</h3>
      <h3>Friends: {item.num_friends}</h3>
      <h3>Favorites: {item.num_favorites}</h3>
      <br></br>
      <h3>Sentiment: {item.sentiment} </h3>
      <br></br>
      <h3>Entities: {item.entities} </h3>
      <h3>Mentions: {item.mentions} </h3>
      <h3>Hashtags: {item.hashtags} </h3>
      <h3>Urls: {item.urls} </h3>
    </div>
  )
}

export default item
