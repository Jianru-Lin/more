import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { More } from 'more'

const content = (
    <div
        style={{
            position: 'absolute',
            left: 0, top: 0, right: 0, bottom: 0,
        }}>
        <h1>Demo</h1>
        <ol>
            <li>
                <a href="More.html">More</a>
            </li>
            <li>
                <a href="MoreIFrame.html">MoreIFrame</a>
            </li>
            <li>
                <a href="MoreIFramePlay.html">MoreIFramePlay</a>
            </li>
        </ol>
    </div>
)

ReactDOM.render(content, document.getElementById('root'))
