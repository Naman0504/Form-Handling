import React from 'react'

const ExpenseForm = ({setExpenses}) => {

    const handleSubmit = (e)=>{
               e.preventDefault();
               getFromData(e.target);
               const expense = {...getFromData(e.target),id:crypto.randomUUID()}
               setExpenses((prevState)=> [...prevState,expense])
               

               e.target.reset()
    }

    const getFromData = (form) =>{
            const formData = new FormData(form)
               const data ={}     
            for(const [key,value] of formData.entries()){
                console.log(key,value);   
                data[key] = value; 
            }

        return data;
    }

    return (
        <form className="expense-form" onSubmit={handleSubmit}>
            <div className="input-container">
                <label htmlFor="title">Title</label>
                <input id="title" name="title" />
            </div>
            <div className="input-container">
                <label htmlFor="category">Category</label>
                <select id="category" name="category">
                    <option disabled="true" hidden>select category</option>
                    <option value="grocery">Grocery</option>
                    <option value="clothes">Clothes</option>
                    <option value="bills">Bills</option>
                    <option value="education">Education</option>
                    <option value="medicine">Medicine</option>
                </select>
            </div>
            <div className="input-container">
                <label htmlFor="amount">Amount</label>
                <input id="amount" name="amount"/>
            </div>
            <button className="add-btn">Add</button>
        </form>
    )
}

export default ExpenseForm