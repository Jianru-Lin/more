import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { MoreIFramePlay } from 'more'

const content = (
    <div
        style={{
            position: 'absolute',
            left: 0, top: 0, right: 0, bottom: 0,
        }}>
        <MoreIFramePlay/>
    </div>
)

ReactDOM.render(content, document.getElementById('root'))
