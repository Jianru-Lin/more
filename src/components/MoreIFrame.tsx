import * as React from 'react'
import { More, MoreP } from './More'

export interface MoreIFrameP {
    url: string
    configs?: MoreP['configs']
    lock?: boolean
}

export interface MoreIFrameS {
    highlightCover: boolean
}

export class MoreIFrame extends React.Component<MoreIFrameP, MoreIFrameS> {
    constructor(props: MoreIFrameP) {
        super(props)
        this.state = {
            highlightCover: false,
        }
    }

    _cover() {
        if (!this.props.lock) return null

        const style: React.CSSProperties = {
            position: 'absolute',
            left: 0, top: 0, right: 0, bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // cursor: 'pointer',
            background: 'rgba(0, 0, 0, 0.5)',
            opacity: this.state.highlightCover ? 1 : 0,
            transition: 'opacity 150ms',
        }

        return (
            <div
                style={style}
                onMouseEnter={() => this.setState({highlightCover: true})}
                onMouseLeave={() => this.setState({highlightCover: false})}>
                {this.props.lock ? 'Locked' : null}
            </div>
        )
    }

    render() {
        const style: {[key: string]: React.CSSProperties} = {
            root: {
                width: '100%',
                height: '100%',
                position: 'relative',
            },
            iframe: {
                margin: 0,
                padding: 0,
                border: 'none',
                width: '100%',
                height: '100%',
            }
        }

        return (
            <More
                configs={this.props.configs}
                factory={() => (
                    <div style={style.root}>
                        <iframe style={style.iframe} src={this.props.url}/>
                        {this._cover()}
                    </div>
                )}/>
            )
    }
}