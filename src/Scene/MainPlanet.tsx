import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'

function MainPlanet() {
  const ref = useRef<THREE.Mesh>(null!);
  const textures = useTexture({
    map: './textures/planet/planet_color.png',
    //displacementMap: './textures/planet/planet_height.jpg',
    aoMap: './textures/planet/planet_ao.jpg',
    roughnessMap: './textures/planet/planet_roughness.jpg',
    metalnessMap: './textures/planet/planet_metalness.png',
    normalMap: './textures/planet/planet_normal.jpg'
  })

  const threeTone = useTexture('gradientMaps/threeTone.jpg')
  threeTone.minFilter = THREE.NearestFilter
  threeTone.magFilter = THREE.NearestFilter

  const fourTone = useTexture('gradientMaps/fourTone.jpg')
  fourTone.minFilter = THREE.NearestFilter
  fourTone.magFilter = THREE.NearestFilter

  const fiveTone = useTexture('gradientMaps/fiveTone.jpg')
  fiveTone.minFilter = THREE.NearestFilter
  fiveTone.magFilter = THREE.NearestFilter

  const customTone = useTexture('gradientMaps/custom.png')
  customTone.minFilter = THREE.NearestFilter
  customTone.magFilter = THREE.NearestFilter

  useFrame(() => {
    
  })

  return (
    <mesh ref={ref} position={[1.4, -0.5 ,0]}>
      <sphereGeometry args={[1.3, 100, 100]} />
      {/* <meshStandardMaterial color='gray' /> */}
      {/* <meshStandardMaterial {...textures} normalMap-encoding={LinearEncoding} /> */}
      <meshToonMaterial color='gray' gradientMap={customTone}/>
    </mesh>
  )
}

export default MainPlanet;