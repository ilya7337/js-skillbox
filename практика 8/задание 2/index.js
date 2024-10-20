
function filterAndSortUsers(data, minAge) {
    return data
        .filter(elem => elem[1] > minAge && elem[2])
        .sort((a, b) => a - b)
        .map(elem => elem[0])
}

const users = [
    ["Alice", 25, true],
    ["Bob", 30, false],
    ["Charlie", 22, true],
    ["David", 27, true],
    ["Eve", 20, false]
];
const sportUsersOver25 = filterAndSortUsers(users, 25);
console.log(sportUsersOver25); // Выведет ["David"]

