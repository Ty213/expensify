import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <p>NOT FOUND 404 :)</p>
        <Link to="/">Go Home</Link>
    </div>
);

export default NotFoundPage;