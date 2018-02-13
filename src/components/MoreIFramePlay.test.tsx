import * as React from 'react'
import { MoreIFramePlay } from './MoreIFramePlay'
import * as renderer from 'react-test-renderer'

test('MoreIFramePlay', () => {
    const component = renderer.create(
        <MoreIFramePlay/>
    )
})
