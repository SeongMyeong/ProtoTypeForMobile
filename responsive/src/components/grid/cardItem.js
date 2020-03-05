import React, { Component } from 'react';

import './cardItem.css';

class CardItem extends Component {
    ////////////////////
    //< Constant

    ////////////////////
    //< React LifeCycle
    constructor(props) {
        super(props);
    }
    ////////////////////
    //< Handler (include focus manager)

    ////////////////////
    //< private functions

    ////////////////////
    //< Rendering
    render() {
        const { data } = this.props;
        return (
            <div className={'cardItemDiv'}>
                <img className={'cardItem'} src={data.poster} />
                {data.title}
            </div>
        );
    }
}

export default CardItem;