import Loading from './Loading';
import Tours from './Tours';
import { useEffect } from 'react';
import { useState } from 'react';

const URL = 'https://course-api.com/react-tours-project';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const fetchTours = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(URL);
            const tours = await response.json();
            setTours(tours);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchTours();
    }, []);

    if (isLoading) {
        return (
            <main>
                <Loading />
            </main>
        );
    }

    return (
        <main>
            <Tours tours={tours} />
        </main>
    );
};

export default App;
