interface IPeople {
    id: number;
    name: string;
    age: number;
}

const filteringData = (data: IPeople[]): IPeople[] => {
    return data.filter((el) => el.age < 21);
};

const people = [
    { id: 1, name: 'Udin', age: 12 },
    { id: 2, name: 'Wati', age: 51 },
    { id: 3, name: 'Budi', age: 34 },
    { id: 4, name: 'Agus', age: 16 },
    { id: 5, name: 'Sari', age: 19 },
    { id: 6, name: 'Ririn', age: 21 },
];

console.log('Input:', people);
console.log('Output:', filteringData(people));
