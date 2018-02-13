import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { More } from 'more'

const content = (
    <div
        style={{
            position: 'absolute',
            left: 0, top: 0, right: 0, bottom: 0,
        }}>
        <More
            factory={() => {
                return <h1>Hello world!2</h1>
            }}/>
    </div>
)

ReactDOM.render(content, document.getElementById('root'))
