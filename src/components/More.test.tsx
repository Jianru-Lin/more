import * as React from 'react'
import { More } from './More'
import * as renderer from 'react-test-renderer'

test('More: stateless component', () => {
    const component = renderer.create(
        <More factory={() => (
            <h1>hello</h1>
        )}/>
    )
})
