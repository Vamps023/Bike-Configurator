import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Picker, Vespa } from './vespa'

export default function App() {
    return (
        <>
            <Canvas dpr={[1, 2]}>
                <color attach='background' args={['#353535']} />
                <Suspense fallback={null}>
                    <Stage preset='soft' intensity={1} environment='dawn'>
                        <Vespa />
                    </Stage>
                    <OrbitControls />
                </Suspense>
            </Canvas>
            <Picker />
        </>
    )
}
