// import ContentPostInput from "../../components/contentPostInput";
// import ContentPostArea from "../../components/contentPostArea";
import { useState } from "react";
import ChapterList from "../../components/chapterList";
import Contents from "../../components/content";
import Header from "../../components/header";
import { IUser, UserContext } from "../login";

export default function Content() {
  const [topic, setTopic] = useState("");
  const [user, setUser] = useState<IUser>({});


  return (
    <div>
      <UserContext.Provider value={user}>
        <Header></Header>
        <div className="flex flex-row ">
          <div className="basis-2/3">
            <Contents topic_id={topic} />
          </div>
          <div className="basis-1/3 px-5">
            <ChapterList setTopic={setTopic} user_id={user._id as String} />
          </div>
          {/* <Profile/> */}
        </div>
      </UserContext.Provider>
    </div>
  );
}
