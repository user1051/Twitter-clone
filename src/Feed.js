import React, { useState, useEffect} from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'
import FlipMove from 'react-flip-move'

function Feed() {
    const [posts, setPosts] = useState([]);

        useEffect(() => {
            // run when feed component loads and don't run it again after
            db.collection('posts').onSnapshot(snapshot => (
                setPosts(snapshot.docs.map(doc => doc.data())) //loop to the posts collection and access the data
            ))
        }, [])
    
        return (
        <div className="feed">   
                   <div className="feed__header">
                         <h2>Home</h2>
                   </div>
                   
           <TweetBox/>
            <FlipMove>  
            {posts.map(post => (
                 <Post
                    key={post.text}
                    displayName={post.displayName}
                    userName={post.userName}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
            />
            ))}
           </FlipMove>  
        </div> 
    )
}

export default Feed
