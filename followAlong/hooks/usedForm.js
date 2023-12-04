import { useState } from "react"

export const useForm = (initialValue) => {
    const [values, setValues] = usedState(initialValue);

    const clearForm = () => {
        setValue(initialValue);
    }

    const handleChanges = e =>{
        setValues({...values, [e.target.name]: e.target.value});
    }

    return [values, clearForm, handleChanges];
    
}