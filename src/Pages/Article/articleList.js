import {Box, Heading,  Center, Container, VStack} from "@chakra-ui/react"
import ContentModal from "./ContentModal"

const ListArticle = ({ title, text, liens }) => {

  return (
    <Box  h="65vh" backgroundColor="#6C6B6B"  w="25rem" borderWidth="10px" borderRadius="xl" boxShadow="xl" p="8" overflow="hidden"  align="center">
      <Container >
  <VStack spacing="20px">
    <Center mt="-5" position="relative">
      <Heading as="h1" size="lg">{title}</Heading>
    </Center>
          <p>{text}</p>
          <Center>
      <ContentModal  href={liens}></ContentModal>
    </Center>
       
          </VStack>
  </Container>
   </Box>
  )
}
export default ListArticle