
export const getCapitalizedWord = (word) => word.charAt(0).toUpperCase() + word.slice(1);

export const createSimilarComponentsList = (list, cb) => list.map((item) => cb(item)).join('');
