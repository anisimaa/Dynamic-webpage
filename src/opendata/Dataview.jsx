import React, { useEffect, useState } from 'react';

const DataView = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Simulate fetching data from a JSON file or API
        fetch('/src/data/open-data.json')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            <h2>Open Data</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default DataView;