import './Users.css'
import { useState } from 'react';

const dummyUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', gender: 'male', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', gender: 'female', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', gender: 'male', image: 'https://images.unsplash.com/photo-1546820389-44d77e1f3b31?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', gender: 'female', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww' },
  { id: 5, name: 'Robert White', email: 'robert@example.com', gender: 'male', image: 'https://images.unsplash.com/photo-1549237511-6b64e006ce65?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8' },
  { id: 6, name: 'Emma Green', email: 'emma@example.com', gender: 'female', image: 'https://plus.unsplash.com/premium_photo-1661633228903-c155872065e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D' },
  { id: 7, name: 'Tom Black', email: 'tom@example.com', gender: 'male', image: 'https://images.unsplash.com/photo-1615813967515-e1838c1c5116?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8' },
  { id: 8, name: 'Linda Grey', email: 'linda@example.com', gender: 'female', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D' },
  { id: 9, name: 'Chris Blue', email: 'chris@example.com', gender: 'male', image: 'https://plus.unsplash.com/premium_photo-1669688173775-2a46bc86c476?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8' },
  { id: 10, name: 'Nancy Red', email: 'nancy@example.com', gender: 'female', image: 'https://images.unsplash.com/photo-1512288094938-363287817259?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D' },
];

const Users = () => {
  const [filter, setFilter] = useState('all');

  const filteredUsers = dummyUsers.filter(user => {
    if (filter === 'all') return true;
    return user.gender === filter;
  });

  return (
    <div className='users-container'>
      <h1>User List</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis assumenda debitis voluptatibus dolor quas quae cum vitae sit veniam error quidem maiores recusandae quia sed, et vero modi mollitia.</p>
      <p style={{fontWeight: 'bold'}}>Categorized based on gender:</p>
      <div className="filter-options">
      <label>
        <input
          type="radio"
          value="all"
          checked={filter === 'all'}
          onChange={(e) => setFilter(e.target.value)}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          value="male"
          checked={filter === 'male'}
          onChange={(e) => setFilter(e.target.value)}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          value="female"
          checked={filter === 'female'}
          onChange={(e) => setFilter(e.target.value)}
        />
        Female
      </label>
    </div>

      <table className='users-table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td><img src={user.image} alt={user.name}/></td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
