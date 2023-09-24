import Loading from './Loading';
import { useEffect } from 'react';
import { useState } from 'react';

const URL = 'https://course-api.com/react-tours-project';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const fetchTours = async () => {
        setLoading(true);
        try {
            const response = await fetch(URL);
            const tours = await response.json();
            console.log(tours);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTours();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return <h2>Tours Starter</h2>;
};

export default App;
