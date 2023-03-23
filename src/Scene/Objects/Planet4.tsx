import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { MeshDistortMaterial, useTexture } from '@react-three/drei'

import * as manager from '../../ScrollManager'

const pos: number[] = [-1, 0, -2];
const radius: number = 4.15;
const id: number = 4;

let degrees: number;



function Collection() {
  const ref = useRef<THREE.Group>(null!);

  useFrame(() => {
    degrees = manager.getPosition(id)
    ref.current.position.set(pos[0] + radius * Math.sin(manager.deg(degrees)), pos[1], pos[2] + radius * Math.cos(manager.deg(degrees)));
    ref.current.rotation.set(0, manager.deg(degrees + 90), 0);
  })

  return (
    <group ref={ref} >
      
    </group>
  )
}
export default Collection;