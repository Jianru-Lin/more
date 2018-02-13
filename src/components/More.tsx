import * as React from 'react'
import { View, ViewConfig } from './View'

export interface MoreP {
    configs?: ViewConfig[]
    factory: () => React.ReactNode
}

export interface MoreS {

}

export class More extends React.Component<MoreP, MoreS> {
    constructor(props: MoreP) {
        super(props)
        this.state = {

        }
    }

    render() {
        const configs: ViewConfig[] = this.props.configs || [
            {title: 'Square', width: 320, height: 320},
            {title: 'iPhone 4', width: 320, height: 480},
            {title: 'iPhone 5', width: 320, height: 568},
            {title: 'iPhone X', width: 375, height: 812},
            {title: 'iPad', width: 768, height: 1024},
            {title: 'iPad Pro', width: 1024, height: 1366},
            {title: 'Galaxy S5', width: 360, height: 640},
            {title: 'Nexus 6P', width: 412, height: 732},
        ]

        const style: {[key: string]: React.CSSProperties} = {
            root: {
                background: 'green',
                width: '100%',
                height: '100%',
                overflow: 'auto',
                display: 'flex',
                boxSizing: 'border-box',
            },
            main: {
                overflow: 'visible',
                display: 'flex',
                color: 'white',
                padding: 16,
            }
        }

        const itemStyle: React.CSSProperties = {
            marginRight: 16
        }

        return (
            <div style={style.root}>
                <div style={style.main}>
                    {configs.map((c, i) =>
                        <View
                            key={i}
                            style={i !== configs.length - 1 ? itemStyle : {}}
                            config={c}>
                            {this.props.factory()}
                        </View>
                    )}
                </div>
            </div>
        )
    }
}
