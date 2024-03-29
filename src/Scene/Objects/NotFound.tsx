import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'

import * as manager from '../../ScrollManager'

const pos: number[] = [-1, 0, -2];
const radius: number = 4.15;
const id: number = 404;

let degrees: number;

function Planet() {
  const ref = useRef<THREE.Mesh>(null!);

  const threeTone = useTexture('gradientMaps/threeTone.jpg')
  threeTone.minFilter = THREE.NearestFilter
  threeTone.magFilter = THREE.NearestFilter

  useFrame(() => {
    
  })

  return (
    <mesh ref={ref} >
      <sphereGeometry args={[0.23, 30, 30]} />
      <meshToonMaterial color={'#88888b'} />
    </mesh>
  )
}

function Collection() {
  const ref = useRef<THREE.Group>(null!);

  useFrame(() => {
    degrees = manager.getPosition(id)
    ref.current.position.set(pos[0] + radius * Math.sin(manager.deg(degrees)), pos[1], pos[2] + radius * Math.cos(manager.deg(degrees)));
  })

  return (
    <group ref={ref} >
      <Planet />
    </group>
  )
}
export default Collection;