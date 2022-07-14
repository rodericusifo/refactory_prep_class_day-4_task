const addToArray = (
    array: string[],
    firstElement: string,
    lastELement: string
): string[] => {
    array.unshift(firstElement);
    array.push(lastELement);
    return array;
};

const stuff = ['Meja', 'Buku', 'Topi', 'Baju', 'Kayu'];
const firstElement = 'Handuk';
const lastELement = 'Celana';
console.log('Initial Array:', stuff);
console.log('First Element:', firstElement);
console.log('Last Element:', lastELement);
console.log('Modified Array:', addToArray(stuff, firstElement, lastELement));
