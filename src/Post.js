import React from 'react';

import LikeButton from './LikeButton'

export default class Post extends React.Component {
    render() {
        return (
            <div className='max-w-sm w-full px-4 py-3 mx-auto bg-white shadow-md rounded-md my-8'>
                <div>
                <h1 className="text-lg font-semibold text-gray-800 mt-2">{this.props.name}</h1>
                <p className="text-gray-600 text-xl mt-2">"{this.props.content}"</p>
            </div>
            <div className="flex items-center justify-center mt-4">
                <LikeButton likes={this.props.likes}/>
                                    </div>
            </div>
        )
    }
}