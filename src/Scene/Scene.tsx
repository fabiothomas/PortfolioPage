import { useState, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls, Stars, Float, useTexture } from '@react-three/drei'

import * as manager from '../ScrollManager'

//Scene Objects
import Light from './Light'
import MainPlanet from './MainPlanet'
import Ring from './Ring'

import CameraHelper from './CameraHelper'

//Orbit Objects
import Planet1 from './Objects/Planet1'
import Planet2 from './Objects/Planet2'

function Scene() {

  useEffect(() => {
    const keyDownHandler = (event: any) => {
      //console.log('User pressed: ', event.key);

      if (event.key === 'ArrowRight') {
        event.preventDefault();

        manager.increaseActive();
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();

        manager.decreaseActive();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <Canvas camera={{ 
      position: [2, 1, 2], 
      rotation: [manager.deg(-19.5), manager.deg(45), manager.deg(0), 'YXZ'], 
      fov: 60, 
      aspect: 1, 
      near: 0.1, 
      far:350
    }}>
      
      {/* Standard scene stuff */}
      <ambientLight intensity={0.5}/>
      <Light />
      <Stars />

      <Ring />
      <Float speed={0.1} rotationIntensity={1.0} floatIntensity={0.1}>
        <MainPlanet />
      </Float>

      {/* Orbit objects */}
      <Planet1 />
      <Planet2 />

      {/* Debug objects */}
      {/* <OrbitControls /> */}
      {/* <CameraHelper /> */}
      {/* <axesHelper args={[10]} /> */}
      
    </Canvas>
  )
}

export default Scene
