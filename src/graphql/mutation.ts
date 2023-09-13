import { gql } from "@apollo/client";

export enum Role {
    Admin = 'ADMIN',
    Student = 'STUDENT',
    Teacher = "TEACHER"
  }
export const LOGIN_MUTATION = gql`
  mutation Login($userInput: UserInputDetail) {
    login(userInput: $userInput) {
      code
      success
      message
      authToken
      user {
        id
        username
        email
        firstName
        lastName
      }
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation RegisterMutation($registerUserInput: UserInput!) {
    register(userInput: $registerUserInput) {
      status
      user {
        id
        username
        token
        posts
        likes
      }
    }
  }
`;
