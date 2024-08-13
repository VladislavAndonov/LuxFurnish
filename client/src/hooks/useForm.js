import { useState } from "react";

export function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        const isSuccess = await submitCallback(values);

        if (isSuccess) {
            setValues(initialValues);
        }
    };

    const setFormValues = (newValues) => {
        setValues(newValues);
    };

    return {
        values,
        changeHandler,
        submitHandler,
        setFormValues,
    };
}
