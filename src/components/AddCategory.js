import React, { useState } from 'react'
import propTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        inputValue.trim().length && setCategories( categories => [inputValue, ...categories]);
        setInputValue('')
    }

    return (
        <form onSubmit= { handleSubmit }>
            <input
                type='text'
                value={inputValue}
                onChange={ (e) => setInputValue( e.target.value ) }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
}
