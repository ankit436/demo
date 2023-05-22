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

export default ExcelDownloader;
