import React from 'react';

const Table = () => {
    return (
        <>

<div className="table-wrap w-100 overflow-auto">
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
      <tr>
        <td>note.com</td>
        <td>54</td>
        <td>12</td>
        <td>10.5%</td>
        <td>50%</td>
      </tr>
      <tr>
        <td>Direct, email, IM</td>
        <td>96</td>
        <td>24</td>
        <td>25%</td>
        <td>$10</td>
      </tr>

      <tr>
        <td>Recommended</td>
        <td>5</td>
        <td>5</td>
        <td>100%</td>
        <td>$10</td>
      </tr>

      <tr>
        <td>Dribbble</td>
        <td>1</td>
        <td>0</td>
        <td>0.0%</td>
        <td>$0</td>
      </tr>

      <tr>
        <td>google.co.uk</td>
        <td>5</td>
        <td>0</td>
        <td>0.0%</td>
        <td>$0</td>
      </tr>

      <tr>
        <td>google.com.tr</td>
        <td>0</td>
        <td>0</td>
        <td>0.0%</td>
        <td>$0</td>
      </tr>

      <tr>
        <td>mail.google.com</td>
        <td>1</td>
        <td>0</td>
        <td>0.0%</td>
        <td>$0</td>
      </tr>

      <tr>
        <td>facebook.com</td>
        <td>5</td>
        <td>0</td>
        <td>0.0%</td>
        <td>$0</td>
      </tr>
     
    </tbody>
  </table>
</div>

        </>
    )
}

export default Table;