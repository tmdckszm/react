import React from 'react';
import propTypes from 'prop-types';

const MyComponent = ({name, children}) => {
    return(
        <div>
            안녕하세요, 제 이름은 {name}입니다. <br/>
            children 값은 {children}
            입니다.
        </div>
    );
};

MyComponent.defaultProps = {
    name: '기본이름'
};

MyComponent.prototype = {
    name: propTypes.string
};

export default MyComponent;