// noinspection JSUnusedGlobalSymbols
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

// noinspection JSUnusedGlobalSymbols
export const saveState = (state) => {
    try {
        const serializedSate = JSON.stringify(state);
        localStorage.setItem('state', serializedSate);
    } catch (err) {
        // Ignore write errors.
    }
};
