import React from 'react'
class Counter extends React.PureComponent{
    render()
    {
        
        return(
            <div>
                <h1>Pure Component {this.props.count}</h1>
            </div>
        )
    }
}

export default Counter