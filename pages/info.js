import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Button,
} from '@chakra-ui/react'

import Container from '../components/Container'

export default function Info() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <Container>
      <Head>
        <title>Info - Luca Cespedes</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Hi, I'm Luca Cespedes</Heading>
          <Text color={colorSecondary[colorMode]}>I am a Smart Contract developer and blockchain enthusiast.<br />
            In this blog I will be uploading posts about all this, not only to share it with you, but to help me to have a place to come to when I forget some things 😁.
            <br />
            All comments on the posts are welcome, and in fact if you find any mistakes, I would appreciate if you mention them to correct them. </Text>
          
        </Flex>
      </Stack>
    </Container>
  )
}