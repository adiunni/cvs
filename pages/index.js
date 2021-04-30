import Navbar from '../components/navbar/Navbar'
import SliderComp from '../components/slider/SliderComp'
import React from 'react' 
import styles from '../styles/Home.module.css'


export default function Home(){ 

  return (
    <div className={styles.root}>
      <Navbar/>
      <SliderComp/>
    </div>
  )
}  