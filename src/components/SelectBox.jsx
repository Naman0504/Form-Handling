import React from 'react'

const SelectBox = ({ label, id, value, onChange, options, error }) => {
    return (
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <select id="category" name="category" value={value} onChange={onChange}>
                <option value="" hidden>select category</option>
                {/* <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option> */}
                {
                    options.map((option,idx) => (
                        <option key={idx} value={option}>{option}</option>
                    ))
                }
            </select>
            <p className='error-tag'>{error}</p>
        </div>
    )
}

export default SelectBox