import { Text } from '@chakra-ui/layout'

export const Copyright = (props) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} Council of Vibration Specialists. All rights reserved.
  </Text>
)