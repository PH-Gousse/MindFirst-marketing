import Head from 'next/head'
import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

import styles from '../styles/Home.module.css';
import {useEffect, useRef, useState} from "react";
import {validate} from 'email-validator';
import {CheckIcon} from "@chakra-ui/icons";

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [focusBorderColorInput, setFocusBorderColorInput] = useState("grey.100");
  const [isInvalidInput, setIsInvalidInput] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [buttonMessage, setButtonMessage] = useState('Receive my Invite');

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (event) => {
    setFocusBorderColorInput('grey.100');
    setIsInvalidInput(false);
    if (event.target.value === '') {
      setIsSubmitted(false);
    }
    setInputValue(event.target.value);
  }

  const onSubmit = () => {
    const isValid = validate(inputValue);
    if (isValid) {
      setFocusBorderColorInput('grey.100');
      setIsInvalidInput(false);
      setIsSubmitted(true);
      setButtonMessage('Invitation Sent!');
      console.log(`${inputValue} is valid`);
    } else {
      setFocusBorderColorInput('crimson');
      setIsInvalidInput(true);
    }
    // check the email address
    // if correct -> send mutation
    // otherwise -> border red -> message = invalid email address
  }

  const onOutsideClick = ({target}) => {
    if (isInvalidInput && target !== inputRef.current) {
      setFocusBorderColorInput('grey.100');
      setIsInvalidInput(false);
    }
  }

  return (
    <div className={styles.back} onClick={(event) => onOutsideClick(event)}>
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
            <InputLeftAddon>@</InputLeftAddon>
            <Input mb={6} variant="outline" backgroundColor="white" type="email"
                   focusBorderColor={focusBorderColorInput}
                   ref={inputRef}
                   value={inputValue}
                   onChange={handleChange}
                   isInvalid={isInvalidInput}
            />
          </InputGroup>
          <Button w="40%" bg={"#635DB7"}
                  onClick={onSubmit}
                  rightIcon={isSubmitted ? <CheckIcon/> : null}
                  iconSpacing={5}
                  isDisabled={isSubmitted}
          >
            {buttonMessage}
          </Button>
        </Flex>
      </Flex>
    </div>
  )
}
