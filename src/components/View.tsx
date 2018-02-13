import * as React from 'react'

export interface ViewConfig {
    title?: string
    width: number
    height: number
}

export interface ViewP {
    config: ViewConfig
    style?: React.CSSProperties
}

export interface ViewS {

}

export class View extends React.Component<ViewP, ViewS> {
    constructor(props: ViewP) {
        super(props)
        this.state = {

        }
    }

    render() {
        const config = this.props.config

        const style: {[key: string]: React.CSSProperties} = {
            main: {
                dispaly: 'block',
                width: config.width,
                height: config.height,
                overflow: 'auto',
                position: 'relative',
                background: 'white',
            },
            footer: {
                display: 'flex',
                padding: '16px 0',
                justifyContent: 'center',
                alignItems: 'center',
            }
        }

        return (
            <div style={this.props.style}>
                <div style={style.main}>
                    {this.props.children}
                </div>
                <div style={style.footer}>
                    {config.title ? config.title + ' ' : ''}
                    {`(${config.width} x ${config.height})`}
                </div>
            </div>
        )
    }
}