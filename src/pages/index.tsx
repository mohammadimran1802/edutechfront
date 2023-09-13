import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Login from "./login";
import React from "react";
import { LOGIN_MUTATION } from "../graphql/mutation";
import { useMutation } from "@apollo/client";



export default function MyApp() {
  return (
    <>
      <Login />
    </>
  );
}
