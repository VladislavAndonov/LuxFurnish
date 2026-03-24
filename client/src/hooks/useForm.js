import { useState } from "react";

export function useForm(initialValues, onSubmit) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        const { name, value } = e.target;

        setValues((state) => ({
            ...state,
            [name]: value,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        await onSubmit(values);
        setValues(initialValues);
    };

    return {
        values,
        changeHandler,
        submitHandler,
        setValues,
    };
}