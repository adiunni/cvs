import Navbar from '../components/navbar/Navbar'
import SliderComp from '../components/slider/SliderComp'
import React from 'react' 
import styles from '../styles/Home.module.css'
import { Box, Center, Flex } from '@chakra-ui/layout'
import Footer from '../components/footer/Footer'
import Image from 'next/image'


export default function Home(){ 

  return (
    <div className={styles.root}>
      <Navbar/>
      <SliderComp/>
      <Flex flexDirection={{base:'column',lg:'row'}} justifyContent='center' alignItems='center'>
        <Box width={{base:'90vw',lg:'45vw'}}>
          <h1 className={styles.heading}>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id eleifend neque. Duis ultricies pulvinar nunc, quis molestie leo. In fermentum consequat eros, nec eleifend ligula scelerisque ac. Fusce faucibus mauris vel odio pretium ultricies. Phasellus rhoncus molestie mattis. Donec dignissim erat quis dui pretium eleifend. Donec in arcu posuere, fringilla metus nec, venenatis magna. Integer vestibulum mauris ante, ut mattis massa viverra sed. Maecenas nunc odio, maximus eu eleifend nec, tincidunt non mauris. Sed et purus vel libero bibendum aliquet a vitae purus. Praesent quis augue auctor, rutrum urna in, eleifend dolor.

              Integer et massa et tellus sagittis pulvinar ut non risus. Sed massa nisl, posuere ac sollicitudin at, consequat et erat. Morbi placerat non purus id egestas. In sollicitudin justo ante, vel maximus est aliquet nec. Donec et tellus vulputate, lobortis mi mollis, consequat augue. Fusce maximus eros eu ex convallis rutrum. Proin a nunc sed odio vehicula porttitor eget rhoncus enim. Aenean efficitur efficitur tellus, lobortis consectetur est commodo at. Nam rhoncus libero rhoncus leo accumsan, eget euismod lacus porttitor. Nullam lobortis sit amet tortor vestibulum euismod. Nam vitae fermentum ipsum. Etiam massa nisl, auctor eu volutpat in, lacinia at magna.

              Duis aliquet ipsum nec tincidunt sodales. Cras maximus consectetur ornare. Nunc pulvinar varius bibendum. Mauris fringilla arcu vulputate, sodales ante nec, dictum velit. Suspendisse risus dui, scelerisque id eros vel, tincidunt sodales arcu. Maecenas sit amet sapien imperdiet, molestie orci eget, efficitur neque. Ut dignissim odio enim, at vulputate quam eleifend quis. Proin facilisis ac arcu eget interdum. Nunc mattis lobortis ante eget maximus. Donec sollicitudin lorem ligula, ut dapibus metus malesuada id. Nunc ut mauris ut mauris feugiat porttitor at vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium dui et lectus ullamcorper, eget tristique nisi porttitor. Donec quis fermentum ipsum. Pellentesque porta bibendum imperdiet. Curabitur ullamcorper massa erat, ac posuere diam tincidunt nec.

              Praesent molestie tortor tortor. Donec sed suscipit turpis. Nulla sagittis massa sit amet ligula dignissim, quis ultrices odio semper. Quisque lectus odio, congue ut erat at, blandit luctus dui. Praesent ac massa blandit eros egestas facilisis congue non purus. Integer dapibus elementum elit et ornare. Duis efficitur tincidunt neque, at gravida risus posuere quis. Phasellus nec mauris eget nibh pulvinar porttitor. Nulla varius odio sit amet nunc fringilla, vel blandit tortor maximus. Ut in tellus sagittis, facilisis erat sit amet, ullamcorper magna. Vestibulum ligula nisl, cursus in lorem eu, placerat mollis leo. Phasellus ac ante et arcu fermentum pulvinar.

              Donec magna purus, faucibus et nisl sit amet, varius ullamcorper sapien. Phasellus pharetra consequat urna non auctor. Morbi egestas, ipsum quis bibendum rhoncus, odio felis porta libero, vel venenatis mauris enim vitae felis. Curabitur congue consequat lacus, eu vestibulum tortor feugiat eget. Quisque quis aliquam mauris. Aenean fermentum hendrerit suscipit. In pretium velit quis lacus tincidunt vulputate. Cras fermentum tincidunt sem non vestibulum. Fusce nec scelerisque libero. Nullam semper vestibulum arcu. Vivamus porta lorem quis eros sollicitudin, ut faucibus dolor fringilla. Fusce eget ligula metus.
          </p>
        </Box>
        <Box width={{base:'90vw',lg:'45vw'}}>
          <Center>
            
          </Center>
        </Box>
      </Flex>
      <Footer/>
    </div>
  )
}  