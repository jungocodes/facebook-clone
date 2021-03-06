import React, { useState } from 'react'
import './MessageSender.css'
import { useStateValue } from '../../../../StateProvider'

import { Avatar } from '@material-ui/core'

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import db from '../../../../firebase'
import firebase from "firebase"

function MessageSender() {
    const [{user}, dispatch] = useStateValue()
    const [input, setInput] = useState('')
    const [imageURL, setImageUrl] = useState('')




    const handleSubmit = e => {
        // Preventing browser default behavior when enter is hit.
        e.preventDefault();

        // When user hits enter the db will collect the info and posted onto the Post Component inside of Feed
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username:user.displayName,
            image: imageURL
        })

         // Resetting the values when user hits enter
    setInput('');
    setImageUrl('');
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar
                    src={user.photoURL}
                />
                <form>
                    <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type='text'
                    className="messageSender__input"
                    placeholder={`What's on your mind, ${user.displayName}?`} />
                    <input
                    value={imageURL}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Image URL (Optional)"/>

                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "red"}} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                <PhotoLibraryIcon style={{ color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                <InsertEmoticonIcon style={{ color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    )
}

export default MessageSender
