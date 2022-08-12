import React, { useState, useEffect } from "react";
import "./styles/Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import {
  onSnapshot,
  collection,
  query,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import FlipMove from "react-flip-move";

const Feed = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  // console.log(posts);
  useEffect(() => {
    const collectioRef = collection(db, "posts");
    const q = query(collectioRef, orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
    console.log(unsub);
  }, []);
  const SendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={SendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/* Posts */}
      <FlipMove>
        {posts.map((val) => {
          // console.log(val.data);
          return (
            <Post
              key={val.id}
              name={val.data.name}
              description={val.data.description}
              message={val.data.message}
              photoUrl={val.data.photoUrl}
            />
          );
        })}
      </FlipMove>
    </div>
  );
};

export default Feed;