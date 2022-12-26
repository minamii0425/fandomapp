import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Heading,
  Divider,
  Button,
  ButtonGroup,
  StackDivider,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const CardComponent = () => {
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading>Things to Do</Heading>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup>
            <Button>Done!</Button>
            <Button>Update!</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardComponent;
