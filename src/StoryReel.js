import React, { useEffect, useState } from 'react';
import Story from './Story';
import './StoryReel.css';
import db from './firebase';

function StoryReel() {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .limitToLast(5)
            .onSnapshot((snapshot) =>
                setStories(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
            );
    }, [stories])
    return (
        <div className="storyReel">
            {
                stories.map((story) => (
                    <Story
                        image={story.data.image}
                        profileSrc={story.data.profilePic}
                        title={story.data.username}
                    />
                ))
            }


        </div>
    )
}

export default StoryReel
