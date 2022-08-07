import React from 'react'

const Statistics = ({stats}) => {
  return (
    <div>
      <h1>Model Derived Values (Standardized)</h1>
      <br></br>
      <div>
        <h3>Number of Followers: {stats.num_followers}</h3>
        <h3>Number of Favourites: {stats.num_favorites}</h3>
        <h3>Number of Friends: {stats.num_friends}</h3>
        <br></br>
        <h3>Ratio of favourites to follows: {stats.favoritesTofollow}</h3>
        <h3>Ratio of follows to friends: {stats.followTofriends}</h3>
        <h3>Ratio of friends to favourites: {stats.friendsTofavorites}</h3>
        <br></br>

        <h3>Number of Entities: {stats.num_entities}</h3>
        <h3>Number of Keywords in Entities: {stats.keyword_entities}</h3>
        
        <br></br>
        <h3>Number of Mentions: {stats.num_mentions}</h3>
        <h3>Number of URLs: {stats.num_urls}</h3>

        <br></br>
        <h3>Number of Hashtags: {stats.num_hashtags}</h3>
        <h3>Number of Keywords in Hashtags: {stats.keyword_hashtags}</h3>
        <h3>Number of Unique Hashtags: {stats.unique_hashtags}</h3>
        <br></br>

        

        <br></br>
      </div>
      

    </div>
    
  )
}

export default Statistics
