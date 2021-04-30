import React from 'react'
import { Box, Flex, Link, Text, Stack, Button } from '@chakra-ui/react'
import Logo from './Logo'

const MenuToggle = ({toggle, isOpen}) => {
  return(
    <Box display={{base:'block', md:'none'}} onClick={toggle}>
      {isOpen ? <CloseIcon/> : <MenuIcon/>}
    </Box>
  )
}

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const Navbar = (props) => {
  const[isOpen,setIsOpen] = React.useState(false)
  const toggle =() => setIsOpen(!isOpen)
  return(
    <NavbarContainer {...props}>
      <Logo
        w="100px"
        color={["white", "white", "blue", "blue"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavbarContainer>
  )
}

const MenuItem = ({children,isLast,to='/',...rest}) => {
  return(
    <Link href={to}>
      <Text display='block' {...rest}>
        {children}
      </Text>
    </Link>
  )
}

const MenuLinks = ({isOpen}) => {
  return(
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/">About Us</MenuItem>
        <MenuItem to="/">Publications</MenuItem>
        <MenuItem to="/">Contact Us</MenuItem>
        <MenuItem to="/" isLast>
          <Button
            size="sm"
            rounded="md"
            color={["blue", "blue", "white", "white"]}
            bg={["white", "white", "blue", "blue"]}
            _hover={{
              bg: ["blue.100", "blue.100", "blue.900", "blue.900"]
            }}
          >
            Membership
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  )
}

const NavbarContainer = ({children,props}) => {
  return(
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["blue", "blue", "transparent", "transparent"]}
      color={["white", "white", "blue", "blue"]}
      {...props}
    >
      {children}
    </Flex>
  )
}

export default Navbar