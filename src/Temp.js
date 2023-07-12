{
  "error": {
    "code": 500,
    "message": "Internal Server Error",
    "details": "An unexpected error occurred while processing the request."
  }
}



const express = require('express');
const app = express();

// Middleware to handle JSON parsing and error handling
app.use(express.json());

// Custom error class
class CustomError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
    this.name = this.constructor.name;
  }
}

// Example API route
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  
  // Simulating an error condition
  if (userId === 'admin') {
    const errorMessage = 'Admin user cannot be accessed.';
    throw new CustomError(errorMessage, 403);
  }

  // Simulating a successful response
  res.json({ id: userId, name: 'John Doe' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  // Handling the custom error
  if (err instanceof CustomError) {
    res.status(err.code).json({ error: { message: err.message } });
  } else {
    // Handling other errors
    res.status(500).json({ error: { message: 'Internal Server Error' } });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


........



import axios from 'axios';

const api = axios.create();

// Set up common error handling
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API error:', error);
    throw new Error('An error occurred during the API request');
  }
);

const fetchPosts = async () => {
  try {
    const response = await api.get('https://api.example.com/posts');
    return response;
  } catch (error) {
    throw new Error('Error fetching posts');
  }
};

export { fetchPosts };





public class CorsSettings
{
    public string PolicyName { get; set; }
    public string[] AllowedOrigins { get; set; }
    public string[] AllowedMethods { get; set; }
    public string[] AllowedHeaders { get; set; }
}


{
  "Cors": {
    "PolicyName": "MyCorsPolicy",
    "AllowedOrigins": [
      "http://example.com",
      "https://example.com"
    ],
    "AllowedMethods": [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    "AllowedHeaders": [
      "Content-Type",
      "Authorization"
    ]
  }
}



WITH RECURSIVE manager_hierarchy AS (

  SELECT employee_id, employee_name, manager_id, 0 AS level

  FROM employees

  WHERE employee_id = <employee_id> -- Replace <employee_id> with the ID of the employee you want to start from

    AND is_active = true

  

  UNION ALL

  

  SELECT e.employee_id, e.employee_name, e.manager_id, mh.level + 1

  FROM employees AS e

  INNER JOIN manager_hierarchy AS mh ON e.employee_id = mh.manager_id

  WHERE e.is_active = true -- Consider only active employees

    AND e.employee_id <> e.manager_id -- Exclude self-manager

    AND mh.level < <max_level> -- Replace <max_level> with the maximum level you want to reach

)

SELECT mh.employee_id, mh.employee_name, mh.level, m.employee_name AS manager_name

FROM manager_hierarchy AS mh

INNER JOIN employees AS m ON mh.manager_id = m.employee_id;






import React from 'react';
import React from 'react';

import Select from 'react-select';

const YourComponent = () => {

  const options = [

    { value: 'apple', label: 'Apple' },

    { value: 'banana', label: 'Banana' },

    { value: 'orange', label: 'Orange' },

    // Add more options as needed

  ];

  const customStyles = {

    container: (provided) => ({

      ...provided,

      width: 200,

    }),

    control: (provided, state) => ({

      ...provided,

      border: state.isFocused ? '2px solid #5e9ed6' : '2px solid #ced4da',

      borderRadius: 4,

      boxShadow: state.isFocused ? '0 0 0 3px rgba(94, 158, 214, 0.3)' : null,

      '&:hover': {

        border: '2px solid #5e9ed6',

      },

    }),

    option: (provided, state) => ({

      ...provided,

      backgroundColor: state.isFocused ? '#5e9ed6' : 'white',

      color: state.isFocused ? 'white' : 'black',

      '&:hover': {

        backgroundColor: '#5e9ed6',

        color: 'white',

      },

    }),

  };

  return (

    <div>

      <Select

        options={options}

        styles={customStyles}

      />

    </div>

  );

};

export default YourComponent;

import XLSX from 'xlsx';

import FileDownload from 'react-file-download';

const ExcelDownloader = ({ data, fileName }) => {

  const handleDownload = () => {

    const worksheet = XLSX.utils.json_to_sheet(data);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');

    const excelBuffer = XLSX.write(workbook, {

      bookType: 'xlsx',

      type: 'array',

    });

    const fileData = new Blob([excelBuffer], {

      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',

    });

    FileDownload(fileData, fileName);

  };

  return (

    <button onClick={handleDownload}>Download Excel</button>

  );

};

export default ExcelDownloader;const downloadExcel = () => {
  // Fetch API data
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
      // Select desired columns from API data
      const selectedColumns = data.map(item => {
        return {
          id: item.id,
          name: item.name,
          // Add more properties as needed
        };
      });

      // Create a new workbook and worksheet
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(selectedColumns);

      // Add the worksheet to the workbook
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');

      // Convert the workbook to an Excel file buffer
      const excelBuffer = XLSX.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });

      // Create a Blob from the buffer
      const blob = new Blob([excelBuffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });

      // Save the file using FileSaver.js
      saveAs(blob, 'api_data.xlsx');
    })
    .catch(error => {
      console.error('Error:', error);
    });
};
