import React from 'react';

const Spinner = () => {
    return (
        <div
            class="spinner-border"
            style={{width: '3rem',height: '3rem'}}
            role="status"
        >
            <span className="sr-only">
               
            </span>
        </div>
    );
}

export default Spinner;