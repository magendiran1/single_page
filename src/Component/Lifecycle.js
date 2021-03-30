import React, { Component } from 'react';



// Life method We are going to learn 
//  1.) There are Three Phase in lifecycle  Mounting  Updating UnMounting 

// Mounting 
// . Constructor
//---> Its is Used to Initize the State object  and methods Bind  it will  initize first  when the class Compenent call
// . Static getDerviedStateFromProps
//---> In Above method Not instance method so We can't use this keyword here and  its Two Parameter (props,state),
//--->
// .render()
// .ComponentDidMount

//Updating 
// . Static getDerviedStateFromProps
// .ShouldComponentUpdate
//---> Its will Return Boobolen Value 
// .render()
// .ComponentDidMount
// .getSnapshotBeforeUpdate
// . ComponentDidUpdate


//UnMounting
//.ComponentWillUnmount

class LifeCycle extends Component {

    constructor(props) {

        super(props)
        console.log('Calling Constructor Method')
        this.state = {
            count: '0'
        };
// this.change=this.change.bind(this)
    }

    // static getDerivedStateFromProps(props, state) {

    //     console.log('Calling getDerviedStateFromProps Method ')
    //     return {
    //         count: '13'
    //     }
    // }

    // componentDidMount() {
    //     console.log("Calling componentDidMount Method ")
    //     this.timeID = setTimeout(() => this.tick(), 1000)
    // }
    // tick() {
    //     this.setState({ count: '25' })
    // }

    //-----------------Updating Phase----------------

    // shouldComponentUpdate() {
    //     console.log("Calling ShouldComponentUpdate")
    //     return true
    // }

//     change() {
// this.setState({count:'45'})
//     }

// IF  i need to Use getSnapshotBeforeUpdate we have use componentDidUpdate method also Then only it will work 

// getSnapshotBeforeUpdate(prevprops,prevstate){

// }

// componentDidUpdate(){

// }

render() {
        console.log('Calling render Method')

        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.change}>LifeCycle Button</button>
            </div>
        )
    }
}


export default LifeCycle;