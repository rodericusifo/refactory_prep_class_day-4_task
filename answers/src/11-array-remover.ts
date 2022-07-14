const arrayRemover = (array: string[], elementTarget: string): string[] => {
    const indexOfElementTarget = array.indexOf(elementTarget);
    array.splice(indexOfElementTarget, 1);
    return array;
};

const fruits = ['Jeruk', 'Pepaya', 'Jambu', 'Anggur', 'Melon']
const elementTarget = 'Jambu';
console.log('Initial Array:', fruits);
console.log('Element Target:', elementTarget);
console.log('Modified Array:', arrayRemover(fruits, elementTarget));
