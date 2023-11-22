import { useState, useEffect } from 'react'
import DisplayEmployee from './components/DisplayEmployee';
import './App.css'
// const sampleEmployee = {
//   gender: 'male',
//   name: {
//     first: 'Charlie',
//     last: 'Thompson',
//   },
//   location: {
//     street: {
//       number: 761,
//       name: 'Tay Street',
//     },
//     city: 'Timaru',
//     postcode: 76111,
//   },
//   email: 'charlie.thompson@example.com',
//   picture: {
//     medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
//   },
// };

function App() {
  const [sampleEmployee, setSampleEmployee] = useState({});

  useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('https://randomuser.me/api?nat=en');
          if (response.status === 200) {
            const data = await response.json();
            setSampleEmployee(data.results);
        }
        
      }
      fetchData();
    },[]);

  return (
    <div>
      <DisplayEmployee employee={sampleEmployee} />
    </div>
  );
}

export default App;

