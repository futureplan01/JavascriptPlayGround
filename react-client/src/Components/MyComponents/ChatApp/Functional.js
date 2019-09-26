import react, {Component} from 'react';

function FirstChild(props){
    props.getChildName('JJ')
}

export default class Parent extends Component{
    constructor(props){
        super(props);
        this.state = {name: 'unknown'}
        this.getChildName = this.getChildName(this);
    }
    getChildName(name){
        // Updates State and Causes Rerender
        this.setState({name: name})
    }
    render(){
        return(
            <div>
            <h1> My Child's Name is {this.state.name}</h1>
            <FirstChild getChildName={this.getChildName}/>
            </div>
        )
    }
}
