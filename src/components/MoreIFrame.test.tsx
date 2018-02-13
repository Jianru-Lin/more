import * as React from 'react'
import { MoreIFrame } from './MoreIFrame'
import * as renderer from 'react-test-renderer'

test('MoreIFrame: stateless component', () => {
    const component = renderer.create(
        <MoreIFrame url="http://www.bing.com"/>
    )
})
