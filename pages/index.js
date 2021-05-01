import Navbar from '../components/navbar/Navbar'
import SliderComp from '../components/slider/SliderComp'
import React from 'react' 
import styles from '../styles/Home.module.css'
import { Box, Flex } from '@chakra-ui/layout'
import Footer from '../components/footer/Footer'


export default function Home(){ 

  return (
    <div className={styles.root}>
      <Navbar/>
      <SliderComp/>
      <Flex flexDirection={{base:'column',lg:'row'}} justifyContent='center' alignItems='center'>
        <Box width={{base:'90vw',lg:'45vw'}}>
          <h1>About Us</h1>
          <p>About us text goes here</p>
        </Box>
        <Box width={{base:'90vw',lg:'45vw'}}>
          <h1>Image goes here</h1>
        </Box>
      </Flex>
      <Footer/>
    </div>
  )
}  