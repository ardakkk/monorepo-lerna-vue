export const toUppercase = (sentence) => {
    return typeof sentence === 'string' ? sentence.toUppercase() : 'unexpected type';
};