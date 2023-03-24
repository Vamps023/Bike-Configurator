import { useGLTF } from '@react-three/drei'
import { FC, useRef } from 'react'
import { HexColorPicker } from 'react-colorful'
import { proxy, useSnapshot } from 'valtio'

type VespaMaterialName = 'Body' | 'Logo' | 'Set'

interface VespaState {
    current: VespaMaterialName | null
    items: Record<VespaMaterialName, string>
}

const state = proxy<VespaState>({
    current: null,
    items: {
        Body: '#c70000',
        Logo: '#979797',
        Set: '#ffffff',
    },
})

export function Picker() {
    const snap = useSnapshot(state)
    return (
        <div style={{ display: snap.current ? 'block' : 'none' }}>
            <HexColorPicker
                className='picker'
                color={snap.items[snap.current as VespaMaterialName]}
                onChange={(color) =>
                    (state.items[snap.current as VespaMaterialName] = color)
                }
            />
            <h1>{snap.current}</h1>
        </div>
    )
}

export interface VespaProps {}

export const Vespa: FC<VespaProps> = () => {
    const ref = useRef()
    const snap = useSnapshot(state)
    const { nodes, materials } = useGLTF('models/vespa.gltf') as any

    return (
        <group
            ref={ref}
            onPointerMissed={() => (state.current = null)}
            onClick={(e) => (
                //@ts-ignore
                e.stopPropagation(), (state.current = e.object.material.name)
            )}
        >
            <mesh
                geometry={nodes.Body_0_mesh0001009.geometry}
                material={materials.Body}
                material-color={snap.items.Body}
            />
            <mesh
                geometry={nodes.Body_0_mesh0001009_1.geometry}
                material={materials['body transparent']}
            />
            <mesh
                geometry={nodes.Body_0_mesh0001009_2.geometry}
                material={materials.Other_body}
            />
            <mesh
                geometry={nodes.Body_0_mesh0001009_3.geometry}
                material={materials.Sliver}
            />
            <mesh
                geometry={nodes.Body_0_mesh0001009_4.geometry}
                material={materials.Set}
                material-color={snap.items.Set}
            />
            <mesh
                geometry={nodes.Body_0_mesh0001009_5.geometry}
                material={materials.Tyer}
            />
            <mesh
                geometry={nodes.Body_0_mesh0001009_6.geometry}
                material={materials.Buttons}
            />
            <mesh
                geometry={nodes.Body_0_mesh0001009_7.geometry}
                material={materials.Handel}
            />
            <mesh
                geometry={nodes.Body_0_mesh0001009_8.geometry}
                material={materials.Logo}
                material-color={snap.items.Logo}
            />
            <mesh
                geometry={nodes.Body_0_mesh0001009_9.geometry}
                material={materials.Black}
            />
            <mesh
                geometry={nodes.Body_0_mesh0001009_10.geometry}
                material={materials.Under_light}
            />
            <mesh
                geometry={nodes.Body_0_mesh0001009_11.geometry}
                material={materials.Red_light_Backside}
            />
            <mesh
                geometry={nodes.Body_0_mesh0001009_12.geometry}
                material={materials.Emmi}
            />
        </group>
    )
}
