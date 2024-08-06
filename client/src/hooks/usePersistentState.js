import { useState } from "react";

export default function usePersistentState(key, initialState) {
    const [state, setState] = useState(() => {
        const peristentAuth = localStorage.getItem(key);

        if (!peristentAuth) {
            return typeof initialState === "function"
                ? initialState()
                : initialState;
        }

        const authData = JSON.parse(peristentAuth);

        return authData;
    });

    const updateState = (value) => {
        const newState = typeof value === "function" ? value(state) : value;

        if (newState === null || newState === undefined) {
            return localStorage.removeItem(key)
        } else {
            localStorage.setItem(key, JSON.stringify(newState));
        }

        setState(newState);
    };

    return [state, updateState];
}
