import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { MoreIFrame } from 'more'

const content = (
    <div
        style={{
            position: 'absolute',
            left: 0, top: 0, right: 0, bottom: 0,
        }}>
        <MoreIFrame url="http://www.morehazards.com/"/>
    </div>
)

ReactDOM.render(content, document.getElementById('root'))
