import React from 'react'

const Table = (props) => {
    return (

        <div className="table">
        <thead>
          <tr>
            <th >id</th>
            <th >FirstName</th>
            <th >LastName</th>
            <th >email</th>
            <th >phone</th>
          </tr>
        </thead>
        <tbody>
           
               {props.smallDate.map(
                 item=>(
                   <tr key={item.id}>
                   <td>{item.id}</td>
                   <td>{item.firstName}</td>
                   <td>{item.lastName}</td>
                   <td>{item.email}</td>
                   <td>{item.phone}</td>
                   </tr>
                
               ))}
           
        </tbody>
      </div>
    )
}

export default Table