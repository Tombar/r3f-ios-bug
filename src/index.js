import ReactDOM from 'react-dom'
import React, { useRef } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './styles.css'
import { EffectComposer } from '@react-three/postprocessing'

extend({ OrbitControls })

function Controls() {
  const controls = useRef()
  const { camera, gl } = useThree()
  useFrame(() => controls.current.update())
  return <orbitControls ref={controls} args={[camera, gl.domElement]} enableDamping dampingFactor={0.1} rotateSpeed={0.5} />
}

ReactDOM.render(
  <Canvas style={{ background: '#272730' }}>
    <Controls />
    <mesh>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshNormalMaterial attach="material" />
    </mesh>
    {/* <EffectComposer multisampling={8} autoClear={false}></EffectComposer> */}
  </Canvas>,
  document.getElementById('root')
)
