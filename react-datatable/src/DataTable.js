// import './DataTable.css';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';



const DataTable = ({ data }) => {
    const [tableData, setTableData] = useState(data);

    useEffect(() => {
        setTableData(data);
    }, [data]);

    return (
        <table className="data-table">
            <thead>
                <tr>
                    {Object.keys(tableData[0] || {}).map(key => (
                        <th key={key}>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData.map((row, index) => (
                    <tr key={index}>
                        {Object.values(row).map((val, i) => (
                            <td key={i}>{val}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

DataTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DataTable;
