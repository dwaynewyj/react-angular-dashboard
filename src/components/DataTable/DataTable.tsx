import * as React from 'react';
import { FunctionComponent, useEffect, useState } from 'react';

export interface IDataTableProps {
    data: Array<{ [key: string]: any }>;
}

interface DataTableProps {
    data: Array<{ [key: string]: any }>;
}

const MyTable: React.FC<DataTableProps> = ({ data }) => {
    const [tableData, setTableData] = useState<Array<{ [key: string]: any }>>(data);

    useEffect(() => {
        setTableData(data);
    }, [data]);

    if (tableData.length === 0) {
        return <div>Retrieving data from the socket...</div>;
    }

    return (
        <table className="data-table">
            <thead>
                <tr>
                    {Object.keys(tableData[0]).map((key, index) => (
                        <th key={index}>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {Object.values(row).map((val, cellIndex) => (
                            <td key={cellIndex}>{val}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export const DataTable: FunctionComponent<IDataTableProps> = (props: IDataTableProps) => {
    return (
        <div>
            <MyTable data={props.data} />
        </div>
    );
};
