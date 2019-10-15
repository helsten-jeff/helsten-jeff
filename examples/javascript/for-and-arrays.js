const people = [
  {
    name: 'stan',
    age: 18,
    height: 63,
  },
  {
    name: 'george',
    age: 27,
    height: 75,
  },
  {
    name: 'frank',
    age: 59,
    height: 69,
  },
  {
    name: 'suzie',
    age: 22,
    height: 60,
  },
];

const sortAges = (a, b, sort) => {
  switch (sort) {
    case 'asc':
      return a - b;
      break;
    case 'desc':
      return b - a;
    default:
      // return in given order
      return 0;
  }
};

/**
 * @people obj {age: number, ...}  Array of objects with key of 'age'.
 * @sort string 'asc' | 'desc' | string. Passing anything but 'asc' or 'desc' returns default given order
 */
const getAges = ({people, sort = ''}) => {
  console.log('getting', people, sort);
  const ages = people.map(({age}) => age);
  const sortedAges = ages.sort((a, b) => sortAges(a, b, sort));
  document.getElementById('output').innerHTML = JSON.stringify(sortedAges);
};

// Examples:
// getAges({ people, sort: "" });
// getAges({ people, sort: "asc" });
// getAges({ people, sort: "desc" });

// Working example in for-and-arrays.html

const button = document.getElementById('submit');
button.onclick = () => {
  getAges({people, sort: document.getElementById('select').value});
};
