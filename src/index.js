import './styles.css'

import React, { useRef } from 'react'
import { createRoot } from 'react-dom/client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer } from '@react-three/postprocessing'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Canvas style={{ background: '#272730' }}>
    <OrbitControls />
    <mesh>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshNormalMaterial attach="material" />
    </mesh>
    {/* this doesnt work */}
    <EffectComposer multisampling={8} autoClear={false}></EffectComposer>
    {/* this work */}
    {/* <EffectComposer multisampling={8} autoClear={true}></EffectComposer> */}
  </Canvas>
)
