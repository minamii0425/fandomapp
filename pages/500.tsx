import { Box, Button, Heading } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const ServerError = () => {
  const router = useRouter();

  const onClickGoToHome = () => {
    router.push("/");
  };

  return (
    <>
      <Layout>
        <Box textAlign="center">
          <Heading
            display="inline-block"
            as="h2"
            size="2xl"
            bgGradient="linear(to-r, teal.400, teal.600)"
            backgroundClip="text"
          >
            500
          </Heading>
          <Text fontSize="18px" mt={3} mb={2}>
            Internal Server Error
          </Text>
          <Text color={"gray.500"} mb={6}>
            There may be some errors in the internal Server. Try later.
          </Text>

          <Button
            colorScheme="teal"
            bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
            color="white"
            variant="solid"
            onClick={onClickGoToHome}
          >
            Go to Home
          </Button>
        </Box>
      </Layout>
    </>
  );
};

export default ServerError;
