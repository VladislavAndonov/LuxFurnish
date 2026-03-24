import { useState } from "react";

export default function usePersistentState(initialStateMap) {
    function loadInitialState() {
        const result = {};

        for (const key in initialStateMap) {
            const storedValue = sessionStorage.getItem(key);

            if (storedValue === null) {
                result[key] = initialStateMap[key];
                continue;
            }

            try {
                result[key] = JSON.parse(storedValue);
            } catch (err) {
                console.warn(`Invalid JSON for key "${key}"`);
                result[key] = initialStateMap[key];
            }
        }

        return result;
    }

    const [state, setState] = useState(loadInitialState);

    function setPersistentState(updates) {
        const newState = { ...state };

        for (const key in updates) {
            const value = updates[key];

            if (value === null || value === undefined) {
                sessionStorage.removeItem(key);
                newState[key] = value;
                continue;
            }

            try {
                sessionStorage.setItem(key, JSON.stringify(value));
                newState[key] = value;
            } catch (err) {
                console.error(`Failed to store key "${key}"`, err);
            }
        }

        setState(newState);
    }

    return [state, setPersistentState];
}