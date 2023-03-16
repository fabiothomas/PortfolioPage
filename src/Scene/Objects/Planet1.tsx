import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import { Vector3 } from 'three';

const pos: number[] = [-1, 0 , -2];
const radius: number = 4.15;
let degrees: number = 0;
//const pos: number[] = [-1, 0 , 2.15];

const deg = (degrees: number) => degrees * (Math.PI / 180)

function Dots() {
  const ref = useRef<THREE.Points>(null!);

  useFrame(() => {
    
    degrees += 0.1
    if (degrees > 360) {
      degrees -= 360
    }

    ref.current.position.set(pos[0] + radius * Math.sin(deg(degrees)), pos[1], pos[2] + radius * Math.cos(deg(degrees)));
    ref.current.rotateY(0.0002)
  })

  return (
    <points ref={ref} position={[0, 0, 0]} >
      <icosahedronGeometry args={[0.2, 5]} />
      <pointsMaterial color='white' size={0.01} />
    </points>
  )
}

function Planet() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    //ref.current.position.set(pos[0], pos[1], pos[2]);
    ref.current.position.set(pos[0] + radius * Math.sin(deg(degrees)), pos[1], pos[2] + radius * Math.cos(deg(degrees)));
  })

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereGeometry args={[0.23, 50, 50]} />
      <meshStandardMaterial color={'#080917'} side={THREE.BackSide} />
    </mesh>
  )
}

function Collection() {
  return (
    <>
      <Planet />
      <Dots />
    </>
  )
}
export default Collection;