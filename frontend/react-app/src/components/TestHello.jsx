import { useEffect, useState } from 'react';
import { GetHello } from '../api/BooksApi';

export default function TestHello() {
    const [hello, setHello] = useState('');

    useEffect(() => {
        GetHello()
        .then(res => setHello(res))
        .catch(err => setHello(err));
    }, []);

    return (
        <div>
            <h4>Backend says: {hello}!</h4>
        </div>
    );
}