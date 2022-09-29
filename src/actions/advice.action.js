export const setAdvice = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        dispatch({
            type: "SET_ADVICE",
            payload: {id: data.slip.id, advice: data.slip.advice}
        })
    }
};