import React from 'react';
import FetchData from '../Hooks/FetchData';


const Table = () => {
  const {data:salesTable} = FetchData('https://profitsales-f6634-default-rtdb.firebaseio.com/User/Jordan%20Jackson/salesTable.json');
  return (
    <>

     { salesTable &&  <div className="table-wrap w-100 overflow-auto">
        <table className="w-100 table table-light">
          <thead>
            <tr>
              <th><span>Referrer</span></th>
              <th>View</th>
              <th>Sales</th>
              <th>Conversion</th>
              <th>Total <i className="fa fa-fw fa-sort"></i></th>
            </tr>
          </thead>
          <tbody>
            {
              salesTable.map((val)=> {
                return  <tr>
                <td>{val.referrer}</td>
                <td>{val.view}</td>
                <td>{val.sales}</td>
                <td>{val.conversion}</td>
                <td>{val.total}</td>
              </tr>
              })
            }
          </tbody>
        </table>
      </div>
      }

    </>
  )
}

export default Table;