import React, { useState } from 'react'
import './TweetBox.css'
import {Avatar, Button} from '@material-ui/core'
import db from './firebase'

function TweetBox() {
    const[tweetMessage, setTweetMessage] = useState("")
    const[tweetImage, setTweetImage] = useState("")
    
    const sendTweet = e => {
        e.preventDefault()   // preventing the refresh
        
        db.collection('posts').add({   // adding to db
            displayName: 'Hitesh',
            userName: '__hitesh007__',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQddxTwQ32SQECkRFGlr5t68vQX-aRMNho65g&usqp=CAU"
        })
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQddxTwQ32SQECkRFGlr5t68vQX-aRMNho65g&usqp=CAU"
                     />
                    <input 
                        onChange={(e) => setTweetMessage(e.target.value)} //keeping track & change value of input 
                        placeholder="What's happening?" 
                        type="text" 
                        value={tweetMessage}
                    />
                </div>
                 <input 
                    className="tweetBox__ImageInput"
                    placeholder="Enter Image URL" 
                    type="text"
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                 />
                 <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>  
        </div>
    )
}

export default TweetBox
