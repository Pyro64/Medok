export const required = (value) => {
    if (value) return undefined;
    return 'required'
}
export const maxLenghtCreator = (maxLenght) => (value) => {
    if (value.length > maxLenght) return `max lenght is ${maxLenght} symbols`;
    return undefined
}
export const email = (value) => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return 'Invalid email address';
    return undefined
}