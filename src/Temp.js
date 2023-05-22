import React from 'react';

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
