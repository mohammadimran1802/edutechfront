import { useQuery } from "@apollo/client";
import Card from "./card";
import Question from "./question";
import { GET_TOPIC } from "../graphql/query";
import { useEffect, useState } from "react";
import LogoCard from "./logo_card";

interface Props {
  topic_id: string;
}

export default function Contents({ topic_id }: Props) {
  const { data, loading, error } = useQuery(GET_TOPIC, {
    variables: { topicId: topic_id },
  });
  let topic = {};
  useEffect(() => {
    if (data) {
      topic = data?.getTopic;
    }
  }, [topic_id, data?.getTopic]);

  console.log(data?.getTopic?.questions);

  return (
    <>
      <div className="bg-grey py-5 pl-4">
        <div className=" bg-grey flex justify-center h-full ">
          {data?.getTopic?.content.videoUrl ? (
            <video
              className="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700"
              autoPlay
              controls>
              <source src={data?.getTopic?.content.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (<div className="py-20"><LogoCard /></div>
            
          )}
        </div>
        <Card
          content_text={data?.getTopic?.content.text}
          title={data?.getTopic?.title}
        />
        <Question question={data?.getTopic?.questions} />
      </div>
    </>
  );
}
