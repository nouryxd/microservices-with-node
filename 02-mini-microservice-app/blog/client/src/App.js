/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import PostCreate from "./PostCreate";

export default () => {
  return (
    <div className='container'>
      <h1>Create Post</h1>
      <PostCreate />
    </div>
  );
};
