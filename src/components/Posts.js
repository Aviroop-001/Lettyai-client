import { Box, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import API from "../api"
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

function Posts() {

    const [posts, setposts] = useState();

    const fetchAllPosts = async() =>{
        try {
            const res = await API.get("/posts");
            setposts(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    const deleteHandler = async (id) => {
      console.log(id);
      try {
        await API.delete(
          "/posts",
          { id },
          {
            Headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } catch (err) {
        console.log(err);
      }
      console.log("deleted");
    };
    const clickHandler = async(id) =>{
        window.location.replace(`/${id}`);
    };
    useEffect(() => {
      fetchAllPosts();
    }, [posts])
    
    if(!posts){
        return (
            <Text>Loading</Text>
        )
    }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <TableContainer width="80%">
        <Table  colorScheme="blue">
          <TableCaption>All Posts</TableCaption>
          <Thead>
            <Tr>
              <Th>INDEX</Th>
              <Th>TITLE</Th>
              <Th>CONTENT</Th>
            </Tr>
          </Thead>
          <Tbody>
            {posts?.map((p, index) => (
              <Tr position="relative" key={p.createdAt} _hover={{backgroundColor:'gray.300'}} onClick={() => clickHandler(p._id)}>
                <Td>{index+1}</Td>
                <Td>{p.title}</Td>
                <Td>{p.content}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Posts