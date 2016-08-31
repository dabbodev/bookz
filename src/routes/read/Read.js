import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Read.css';

function Read(props, context) {
    var title = props.book + ' Chapter ' + props.chapter;
    context.setTitle(title);
    return (
        <p>Hi</p>
    );
}

Read.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Read);