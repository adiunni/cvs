import { ButtonGroup, IconButton } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton as="a" href="https://www.linkedin.com" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} />
    <IconButton as="a" href="https://www.github.com" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
    <IconButton as="a" href="https://www.twitter.com" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
  </ButtonGroup>
)