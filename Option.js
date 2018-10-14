import React from 'react';

const Option = (props) => (
    <li>
        {props.optionText} 
        <button 
            onClick={(e) => {
                props.handleAddOption(props.optionText);
            }
        }
        > 
        remove
        </button>
    </li>
);


export default Option;