import { Text } from '@chakra-ui/layout'

export const Copyright = (props) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} Envelope, Inc. All rights reserved.
  </Text>
)