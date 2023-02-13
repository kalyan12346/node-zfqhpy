const arr = [
  { name: 'John', chemistry: 70, biology: 80, dob: '01-01-2000' },
  { name: 'Jane', chemistry: 70, biology: 80, dob: '01-01-1999' },
  { name: 'Bob', chemistry: 60, biology: 60, dob: '01-01-2000' },
  { name: 'Alice', chemistry: 50, biology: 50, dob: '01-01-1998' },
];

arr.sort((a, b) => {
  let totalA = a.chemistry + a.biology;
  let totalB = b.chemistry + b.biology;

  if (totalA !== totalB) {
    return totalB - totalA;
  } else if (a.biology !== b.biology) {
    return b.biology - a.biology;
  } else {
    return new Date(a.dob) - new Date(b.dob);
  }
});

console.log(arr);
