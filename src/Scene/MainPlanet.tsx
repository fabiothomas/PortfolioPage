import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture, Sparkles } from '@react-three/drei'

import * as manager from '../ScrollManager'

function MainPlanet(props: {setState: React.Dispatch<React.SetStateAction<number>>, setActive: React.Dispatch<React.SetStateAction<number>>}) {
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
    manager.update()
    props.setState(manager.getState)
    props.setActive(manager.getActive)
  })

  // position: [1.4, -0.5 ,0] [1.3, 50, 50]
  return (
    <mesh ref={ref} position={[1.1, -0.2, -0.5]} >
      <sphereGeometry args={[1.5, 50, 50]} />
      {/* <meshStandardMaterial color='gray' /> */}
      {/* <meshStandardMaterial {...textures} normalMap-encoding={LinearEncoding} /> */}
      <meshToonMaterial color={'#88888b'} gradientMap={customTone} />
    </mesh>
  )
}

export default MainPlanet;