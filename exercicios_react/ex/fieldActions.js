export function changeValue(e) {
    console.log("ActionCreator")
    return {
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
    
}