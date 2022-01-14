import React, {Component} from 'react';
import Like from './like.svg';
export default class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.likes
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        console.log(Like)
        return (
            <div className='container flex flex-col items-center justify-center'>

                <p className='text-center'>{this.state.count}</p>
                <button onClick={this.increment}><img src={Like} alt="Like" className='w-8 h-8' />
</button>
            </div>
        )
    }
}