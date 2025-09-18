import React, { useState } from 'react'
import Input from './Input'
import SelectBox from './SelectBox'

const ExpenseForm = ({ setExpenses }) => {

    // const [title, setTitle] = useState('')
    // const [category, setCategory] = useState('')
    // const [amount, setAmount] = useState('')
    const [errors, setErrors] = useState({})

    const [expense, setExpense] = useState({
        id: crypto.randomUUID(),
        title: '',
        category: '',
        amount: ''
    })


    //validate
    const validate = (formData) => {

        console.log("Form", formData)
        const errorsData = {}
        if (!formData.title) {
            errorsData.title = "Title is required";
        }
        if (!formData.category) {
            errorsData.category = "Category is required";
        }
        if (!formData.amount) {
            errorsData.amount = "amount is required";
        }

        setErrors(errorsData)
        return errorsData;

    }

    //handling data using different state variable
    const handleSubmit = (e) => {
        e.preventDefault();

        const validateResult = validate(expense);
        console.log("Validation", validateResult)
        if (Object.keys(validateResult).length) return;

        setExpenses((prevState) => [...prevState, { ...expense, id: crypto.randomUUID() }])

        setExpense({
            title: '',
            category: '',
            amount: ''
        })
    }



    //handling data using different state variable
    //  const handleSubmit =(e) => {
    //     e.preventDefault();
    //     const expense = {title,category,amount,id:crypto.randomUUID()}
    //     setExpenses((prevState)=>[...prevState,expense]) 


    //     setAmount('');
    //     setCategory('');
    //     setTitle('')

    // }

    // const handleSubmit = (e)=>{
    //            e.preventDefault();
    //            getFromData(e.target);
    //            const expense = {...getFromData(e.target),id:crypto.randomUUID()}
    //            setExpenses((prevState)=> [...prevState,expense])


    //            e.target.reset()
    // }

    // const getFromData = (form) =>{
    //         const formData = new FormData(form)
    //            const data ={}     
    //         for(const [key,value] of formData.entries()){
    //             console.log(key,value);   
    //             data[key] = value; 
    //         }

    //     return data;
    // }

    // console.log("Rendering....")

    const handleChange = (e) => {
        // console.log(e.target)
        const { name, value } = e.target;
        setExpense((prevState) => ({ ...prevState, [name]: value }))
        setErrors({})
    }

    return (
        <form className="expense-form" onSubmit={handleSubmit}>
            <Input label={"title"} id={"title"} name={"title"} value={expense.title} onChange={handleChange} error={errors.title} />
            <SelectBox label={"category"} id={"category"} options={['Grocery', 'Clothes', 'Bills', 'Education', 'Medicine']} name={"amount"} value={expense.category} onChange={handleChange} error={errors.category} />
            <Input label={"amount"} id={"amount"} name={"amount"} value={expense.amount} onChange={handleChange} error={errors.amount} />
            <button className="add-btn">Add</button>
        </form>
    )
}

export default ExpenseForm