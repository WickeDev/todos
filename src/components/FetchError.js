import * as React from 'react';
const {PropTypes} = React;

const FetchError = ({message, onRetry}) => (
    <div>
        <p>Could not fetch todos, {message}</p>
        <button onClick={onRetry}>Retry</button>
    </div>
);

FetchError.propTypes = {
    message: PropTypes.string.isRequired,
    onRetry: PropTypes.func.isRequired,
};

export default FetchError;
