import * as React from 'react';
const {PropTypes} = React;
import {Link} from 'react-router';

const FilterLink = ({filter, children}) => (
    <Link
        to={filter === 'all' ? '' : filter}
        activeStyle={{
            textDecoration: 'none',
            color: 'black',
        }}
    >
        {children}
    </Link>
);

FilterLink.propTypes = {
    filter: PropTypes.oneOf(['all', 'completed', 'active']).isRequired,
    children: PropTypes.node.isRequired,
};

export default FilterLink;
