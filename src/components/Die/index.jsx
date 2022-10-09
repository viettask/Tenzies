import React from 'react';
//import PropTypes from 'prop-types';
import './styles.scss';

// ColorBox.propTypes = {
//     color: PropTypes.string.isRequired,
//     rounded: PropTypes.bool
// };

// ColorBox.defaultProps = {
//     rounded: true
// };

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <div
            className="die-face"
            style={styles}
            onClick={props.holdDice}>
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}
