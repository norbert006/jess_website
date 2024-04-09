import React from 'react';
import useFetch from '../../hooks/useFetch';

const Tester = () => {
    const { data, loading, error } = useFetch("http://localhost:8800/api/event/find/countEvents?events=Hen")
    // Check for loading state
    if (loading) {
        return <div>Loading...</div>;
    }

    // Check for error state
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // Check if data is available
    if (!data) {
        return <div>No data available</div>;
    }

    console.log(data);

    return (
        <div>
            {data}
        </div>
    )
};

export default Tester;