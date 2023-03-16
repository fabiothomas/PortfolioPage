import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls, Stars, Float, useTexture } from '@react-three/drei'

//Scene Objects
import Light from './Light'
import MainPlanet from './MainPlanet'
import Ring from './Ring'

import CameraHelper from './CameraHelper'

//Orbit Objects
import Planet1 from './Objects/Planet1'

const deg = (degrees: number) => degrees * (Math.PI / 180)

function Scene() {

  return (
    <Canvas camera={{ 
      position: [2, 1, 2], 
      rotation: [deg(-19.5), deg(45), deg(0), 'YXZ'], 
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

      {/* Debug objects */}
      {/* <OrbitControls /> */}
      {/* <CameraHelper /> */}
      {/* <axesHelper args={[10]} /> */}
      
    </Canvas>
  )
}

export default Scene
