import * as React from 'react'
import { View } from './View'
import * as renderer from 'react-test-renderer'

test('View: empty', () => {
    const component = renderer.create(
        <View config={{width: 100, height: 100}}></View>
    )
})

test('View: stateless children', () => {
    const component = renderer.create(
        <View config={{width: 100, height: 100}}>
            <h1>hello</h1>
        </View>
    )
})
