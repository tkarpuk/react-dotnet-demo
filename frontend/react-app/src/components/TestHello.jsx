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
            <h6>This is demo React app. Backend says: "{hello}"</h6>
        </div>
    );
}