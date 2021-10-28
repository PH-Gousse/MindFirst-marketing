import Head from 'next/head'
import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

import styles from '../styles/Home.module.css'

export default function Home() {


  return (
    <div className={styles.back}>
      <Head>
        <title>Mind First</title>
        <meta name="description" content="Mind First" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" p={12} rounded={6} alignItems="center">
          <Heading size="3xl" mb={10}>Mind First</Heading>
          <Heading size="md" mb={20}>Meet with people you're already close to!</Heading>
          <Heading mb={10} size="xl">Access the Beta, drop your email.</Heading>
          <InputGroup>
            <InputLeftAddon children="@"/>
            <Input mb={6} variant="outline" backgroundColor="white" type="email"/>
          </InputGroup>
          <Button w="50%" bg={"#635DB7"} _hover={{ bg: "#635DB7" }} _active={{bg: "#635DB7"}}>Receive an Invite</Button>
        </Flex>
      </Flex>
    </div>
  )
}
