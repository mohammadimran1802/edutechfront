import { gql } from "@apollo/client";

export const LISTCHAPTER = gql`
  query GetChapters {
    getChapters {
      id
      grade
      chapterNumber
      chapterTitle
      status
      topic {
        title
        id
      }
    }
  }
`;

export const GET_TOPIC = gql`
  query GetTopic($topicId: ObjectId!) {
    getTopic(topic_id: $topicId) {
      id
      chapterId
      title
      content {
        text
        videoUrl
        imageUrl
      }
      questions {
        id
        questionText
        options
        correctAnswer
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id: ObjectId!) {
    getUser(_id: $id) {
      progress {
        grade
        chapter
        topic
        section
        score
      }
    }
  }
`;
