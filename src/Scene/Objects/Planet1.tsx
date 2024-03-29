import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture, Float } from '@react-three/drei'
import { GhibliShader } from '../../shaders/GhibliShader'

import * as manager from '../../ScrollManager'
import { Model } from './Models/House'

const pos: number[] = [-1, 0, -2];
const radius: number = 4.15;
const id: number = 1;

let degrees: number;

function Planet() {
  const ref = useRef<THREE.Mesh>(null!);

  const customTone = useTexture('gradientMaps/customThree.png')
  customTone.minFilter = THREE.NearestFilter
  customTone.magFilter = THREE.NearestFilter

  useFrame(() => {
    
  })

  return (
    <mesh ref={ref} >
      <sphereGeometry args={[0.23, 30, 30]} />
      <Model />
      <meshToonMaterial color={'#88888b'} gradientMap={customTone} />
    </mesh>
  )
}

function Collection() {
  const ref = useRef<THREE.Group>(null!);

  useFrame(() => {
    degrees = manager.getPosition(id)
    ref.current.position.set(pos[0] + radius * Math.sin(manager.deg(degrees)), pos[1], pos[2] + radius * Math.cos(manager.deg(degrees)));
    ref.current.rotation.set(0, manager.deg(degrees + 90), 0);
  })

  return (
    <group ref={ref} >
      <Float speed={1} rotationIntensity={1.0} floatIntensity={0}>
        <Planet />
      </Float>
    </group>
  )
}
export default Collection;