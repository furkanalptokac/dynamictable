import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
padding: 1rem;

table {
  border-spacing: 0;
  border: 1px solid black;

  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th,
  td {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid black;
    border-right: 1px solid black;

    :last-child {
      border-right: 0;
    }
  }
  select {
    width: 200px;
  }
  
  option {
    width: 200px;
  }
}
`;

const DynamicTable = ({ data }) => {
  const getKeys = () => {
    return Object.keys(data[0]);
  }
  const getHeader = () => {
    var keys = getKeys();
    return keys.map((key, index) => {
      /* to filter password
      if (key === 'password') {
      } else {
        return <th key={key}>{key}</th>
      }
      */
      return <th key={key}>{key}</th>
    })
  }
  const getRowsData = () => {
    var items = data;
    var keys = getKeys();
    return items.map((row, index) => {
      return <tr key={index}><RenderRow key={index} data={row} keys={keys} /></tr>
    });
  }
  const RenderRow = (props) => {
    let arr = []
    return props.keys.map((key, index) => {
      if (props.data[key] instanceof Object ) {
        props.data[key].forEach(val => {
          arr.push(val.name);
        });
        return <td>
          <select>
            <option key='roles'></option>
            {arr.map(role => 
              <option key={role}>{role}</option>
            )}
          </select>
        </td>
      // } else if (key === 'password') { // to filter password
      } else {
        if (props.data[key] === true) {
          return <td key={props.data[key]}>true</td>  
        } else if (props.data[key] === false) {
          return <td key={props.data[key]}>false</td>
        } else {
          return <td key={props.data[key]}>{props.data[key]}</td>
        }
      }
    });
  }
  return (
    <Styles>
      <table>
        <thead>
          <tr>{getHeader()}</tr>
        </thead>
        <tbody>
          {getRowsData()}
        </tbody>
      </table>
    </Styles>
  );
}  

export default DynamicTable;
