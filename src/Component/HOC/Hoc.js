import React, {Component } from 'react';

const higherOrderCompenent = (WrapperComponent) => {
    return class extends Component {
        constructor (props){
            super(props)
            this.state ={
                count:55
            }
        }
        render() {
            return (
                <div>
<WrapperComponent {...this.state} />
                </div>
            )
        }
    }


}

export default higherOrderCompenent;