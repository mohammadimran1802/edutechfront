import { useQuery } from "@apollo/client";
import {
  CheckCircleIcon,
  EyeIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";
import { useContext, useState } from "react";
import { GET_USER, LISTCHAPTER } from "../graphql/query";
import { UserContext } from "../pages/login";

interface Props {
  setTopic: (arg1: any) => void;
  user_id:String
}

export default function ChapterList({ setTopic ,user_id}: Props) {
  const [state, setState] = useState();


  const { loading, error, data } = useQuery(LISTCHAPTER);
  const { loading :loading1, error:error1, data:data1 } = useQuery(GET_USER,{variables:{id:"650010476669d92605230e82"}});
  
  console.log(data1)
  let chapters = [];
  if (!loading) {
    chapters = data?.getChapters;
  }


  const clickHandler = (index: any) => {
    setState(index);
  };

  const topicHandler = (id: String) => {
    setTopic(id);
    console.log(id);
  };
  console.log(data1?.getUser.progress.chapter);

  return (
    <>
      <div className="pt-5 px-2">
        <div className="mb-1 text-base font-medium">Progress</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className={`bg-blue-600 h-2.5 rounded-full w-[${data1?.getUser?.progress.chapter}0%]`}></div>
        </div>
      </div>

      {chapters?.length > 1 &&
        chapters.map((index: any) => (
          <div
            key={index.id}
            className="w-full py-1 px-2  rounded overflow-hidden shadow-lg ">
            <div id="accordion-collapse" data-accordion="collapse">
              <h2 id="accordion-collapse-heading-1  ">
                <button
                  type="button"
                  className="flex justify-between items-center  w-full p-5 font-medium text-left text-gray-500 border border-full rounded  focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100  "
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1 "
                  onClick={() => clickHandler(index)}>
                  <span>{index.chapterNumber}</span>
                  <span>{index.chapterTitle}</span>
                  <div className="h-10 w-10 ">
                    {index.status == "LOCKED" && (
                      <LockClosedIcon color="grey-800" />
                    )}
                    {index.status == "UNLOCKED" && <EyeIcon color="grey" />}
                    {index.status == "COMPLETED" && (
                      <CheckCircleIcon color="green" />
                    )}
                  </div>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              {state == index &&
                index.topic.map((item: any) => (
                  <div
                    key={item.id}
                    id="accordion-collapse-body-1"
                    className=""
                    aria-labelledby="accordion-collapse-heading-1">
                    <div className="p-5 border border-full border-gray-200 dark:border-gray-700 rounded ">
                      <p>
                        <button onClick={() => topicHandler(item.id)}>
                          <ol className="list-disc">
                            <li>{item.title}</li>
                          </ol>
                        </button>
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </>
  );
}
