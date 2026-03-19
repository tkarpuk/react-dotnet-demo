import { useEffect, useState } from 'react';
import { getHello } from '../api/BooksApi';

export default function TestHello() {
    const [hello, setHello] = useState('');

    useEffect(() => {
        getHello()
        .then(res => setHello(res))
        .catch(err => setHello(err));
    }, []);

    return (
        <div>
            <h4>Backend says: {hello}!</h4>
        </div>
    );
}