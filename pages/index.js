import Navbar from '../components/navbar/Navbar'
import SliderComp from '../components/slider/SliderComp'
import SliderComp2 from '../components/slider/SliderComp2'
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
        <Box width={{base:'90vw',lg:'45vw'}} p={5}>
          <Center p={3}><h1 className={styles.heading}>About Us</h1></Center>
          <p className={styles.paragraph}>
            CVS is a professional body, registered under Companies Act, 2013, Section 8, and Amendment 2019, the first of its kind in India, born out of the vision of a group of expert vibration professionals in order to serve the industry. </p>
          {/* <p className={styles.paragraph}> 
            With the Industry 4.0 revolution, there is an urgent need to scale up the reach of the vibration specialization, to address the need of design-changes in systems/components learnt from the vibration-induced faults, to speed up the vibration diagnostics and related communications to a higher level of accuracy, with the support of digital technology, IIOT, AI and/ or ML.
          </p> */}
        <br/>    
        <p className={styles.paragraph}>
          CVS is committed to harness the country’s huge potential in vibration specialization by the effective management of vibration knowledge and through the empowerment of engineers with necessary world-class skills and theoretical inputs along with certification. 
        </p>
        <br/>
        <p className={styles.paragraph}>
         CVS is poised to accomplish these objectives through training and research in vibration which emphasizes on fundamental physical science, industry-focused approach, built-in reliability of vibration-prone assets, risk-mitigation specialization for structure and seismic infrastructure, along with the effective use of IIOT, AI technology.
        </p>
        </Box>
        <Box width={{base:'90vw',lg:'45vw'}}>
          <Center>
            <p>Place an image here</p>
          </Center>
        </Box>
      </Flex>
      <Flex flexDirection={{base:'column',lg:'row'}} bg="#2e5787" justifyContent='center' alignItems='center'>
        <Box width={{base:'90vw',lg:'45vw'}} p={5}>
          <Center><p>Place another image here</p></Center>
        </Box>
        <Box width={{base:'90vw',lg:'45vw'}} p={5}>
          <Center p={3}><h1 className={styles.heading2}>Our Vision</h1></Center>
          <p className={styles.paragraph2}>
            CVS aspires to be the center of eminence at the national and global level for the dissemination of knowledge in the field of vibration science and engineering, through training and post graduate studies, to formulate standards, collaborate with national and international regulatory bodies on vibration science and engineering, to develop and compile information in the field to assist engineers in building reliable, vibration free, stable and longer lasting products in the form of machines, structures and systems.
          </p>
        </Box>
      </Flex>
      <Flex flexDirection={{base:'column',lg:'row'}} justifyContent='center' align='' bg='gray.200'>
          <Box width='90vw' p={3}>
            <Center p={2}><h1 className={styles.heading}>our mission</h1></Center>
            <p className={styles.paragraph}>
              <ul>
                <li>To provide a platform for scientists, researchers and engineers to come together for exchange of vibration knowledge through training programs, seminars, conferences, campus and corporate visits, vibration solution services, recognition of contribution made by the experts in the fields.</li>
                <li>To collaborate with similar national and international institutes and organizations for imparting customized various levels of certified training programs, certifying the asset’s integrity in industry and enhancing people’s capability in solving vibration problems.</li>
                <li>To review, modify/ establish vibration standards in the fields of emerging domains such as smart structures, transportation systems, machinery, etc.</li>
              </ul>
            </p>
          </Box>
      </Flex>
      {/* <SliderComp2/> */}
      <Footer/>
    </div>
  )
}  