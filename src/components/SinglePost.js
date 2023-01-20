import React, { useState, useEffect } from 'react'
import API from "../api";
import { useLocation } from "react-router";
import { Center, Box, Text, Button } from '@chakra-ui/react';
import {BiArrowBack} from 'react-icons/bi'

function SinglePost() {

    const [post, setpost] = useState();
    const location = useLocation();
    const currPostid = location.pathname.split("/")[1];
    useEffect(() => {
      const getPost = async () => {
        await API.get(`/posts/${currPostid}`)
          .then((res) => {
            setpost(res.data);
          })
          .catch((err) => console.log(err));
      };
      getPost();
    }, [currPostid]);

    if(!post){
        return <Center>Loading...</Center>
    }
  return (
    <Center height="100vh" position='relative'>
        <Button position='absolute' top='1rem' left='1rem' fontSize='2rem' backgroundColor='inherit' onClick={() => {window.location.replace(`/`)}}>
            <BiArrowBack/>
        </Button>
      <Box width="80vw" height="50vh" boxShadow='2px 2px 4px gray' borderRadius='10px' textAlign="center">
        <Text
          fontSize="3rem"
          letterSpacing="3px"
          textShadow="0px 0px 3px blue"
          marginBottom="1rem"
        >
          {post.title}
        </Text>
        <Text>
          {post.content}
        </Text>
      </Box>
    </Center>
  );
}

export default SinglePost