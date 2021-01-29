import React from 'react'
import './Widget.css'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed"
import SearchIcon from '@material-ui/icons/Search';

function Widget() {
    return (
        <div className="widgets">
           <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input type="text" placeholder="Search Twitter"></input>
           </div>
        
        <div className="widgets__widgetContainer">
            <h2>What's happening</h2>

            <TwitterTweetEmbed tweetId={"1341836987611942914"}/>
           
            <TwitterTimelineEmbed 
             SourceType="profile"
             scrrenName="React"
             options={{height: 400}}
            />

            <TwitterShareButton
             url={"https://twitter.com/Hitesh28732055"}
             options={{ text: "#ReactJs is Awesome", via: "Hitesh28732055"}}
            />
        </div>
        </div>
    )
}

export default Widget
