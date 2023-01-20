import React, { useState } from 'react'
import { Box, Button, Input} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import API from "../api";

function Form() {

  const submitHandler = async (e) =>{
    e.preventDefault();
    const currPost = {
      title: e.target.title.value,
      content: e.target.content.value,
    };
    try {
      const res = await API.post("/posts", currPost);
      console.log("Posting Successful !!!");
      e.target.title.value="";
      e.target.content.value="";
    } catch (er) {
      console.log(er);
      alert("Something went wrong!!!");
    }
  }

  return (
    <Box
      height="40vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        height="30vh"
        width="50vw"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <form
          onSubmit={submitHandler}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <FormLabel textAlign="center">Title</FormLabel>
          <input
            name="title"
            placeholder="Post Title"
            style={{
              border: "1px solid blue",
              width: "50%",
              padding: "5px 10px",
              borderRadius: "10px",
            }}
          />
          <FormLabel textAlign="center">Content</FormLabel>
          <input
            name="content"
            placeholder="Post Content"
            style={{
              border: "1px solid blue",
              width: "50%",
              padding: "5px 10px",
              borderRadius: "10px",
            }}
          />
          <Button
            type="submit"
            backgroundColor="blue.600"
            color="white"
            fontSize="1.2rem"
            marginTop="1rem"
            width="6rem"
            _hover={{ backgroundColor: "blue.700" }}
            onSubmit={submitHandler}
            display="block"
          >
            Post
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Form