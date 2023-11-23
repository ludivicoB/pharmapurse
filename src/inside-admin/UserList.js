import React, { useState } from 'react';
import './UserList.css';
import AdminNavbar from './AdminNavbar';

const UserCustomerList = () => {
  const [customers, setCustomers] = useState([
   
  ]);

  return (
    <div className='user-list-container'>
      <AdminNavbar />
      <table className='user-list-table'>
      <div className="gap">
          <div className="pono">
            <h1 className="admincom">User/Customer List</h1>
          </div>
          </div>
          <div className="bb">
            </div>
       <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>
                <img
                  src={customer.avatar}
                  alt={customer.name}
                  className='user-avatar'
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default UserCustomerList;
