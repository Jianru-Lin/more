import * as React from 'react'
import { MoreIFrame } from './MoreIFrame';

export interface MoreIFramePlayP {

}

export interface MoreIFramePlayS {
    input: string
    invalidInput: boolean,
    url: string
    lock: boolean
}

export class MoreIFramePlay extends React.Component<MoreIFramePlayP, MoreIFramePlayS> {
    constructor(props: MoreIFramePlayP) {
        super(props)
        this.state = {
            input: 'http://',
            invalidInput: false,
            url: '',
            lock: true,
        }
    }

    _isNotUrl(text: string) {
        return !/^https?:\/\//i.test(text)
    }

    _control() {
        const inherit: React.CSSProperties = {
            fontSize: 'inherit',
            fontFamily: 'inherit',
            fontStyle: 'inherit',
            fontWeight: 'inherit',
            display: 'block',
        }

        const style: {[key: string]: React.CSSProperties} = {
            root: {
                padding: 16,
            },
            title: {
                marginBottom: 8,
            },
            container: {
                display: 'flex',
            },
            input: {
                ...inherit,
                flexGrow: 1,
                transition: 'all 1s',
                ...(this.state.invalidInput ? {
                    background: 'red',
                    color: 'white',
                } : {})
            },
            button: {
                ...inherit,
                flexGrow: 0,
                marginLeft: 8,
                width: 64,
            }
        }

        return (
            <div style={style.root}>
                <div style={style.title}>MoreIFramePlay</div>
                <div style={style.container}>
                    <input
                        style={style.input}
                        type="text"
                        value={this.state.input}
                        onChange={e => {
                            const v = e.target.value
                            this.setState({
                                input: v,
                                invalidInput: this._isNotUrl(e.target.value)
                            })
                        }} />
                    <button
                        style={style.button}
                        disabled={this.state.invalidInput}
                        onClick={() => this.setState({url: this.state.input})}>
                        GO
                    </button>
                    <button
                        style={style.button}
                        onClick={() => this.setState({lock: !this.state.lock})}>
                        {this.state.lock ? 'Unlock' : 'Lock'}
                    </button>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this._control()}
                <MoreIFrame url={this.state.url} lock={this.state.lock}/>
            </div>
        )
    }
}