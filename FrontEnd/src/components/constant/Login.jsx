import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            // Store token in localStorage or sessionStorage
            localStorage.setItem('token', data.token);
            navigate('/'); // Navigate to home/dashboard after login
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-6 bg-white p-6 sm:p-8 rounded-xl shadow-md">
                <div>
                    <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900">
                        Welcome back
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Sign in to your Meta-Blog account
                    </p>
                </div>
                <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-50 text-red-500 text-sm p-3 rounded-md text-center">
                            {error}
                        </div>
                    )}
                    <div className="space-y-4">
                        <input type="email" name="email" placeholder="Email address" required value={formData.email} onChange={handleChange} className="input-style" />
                        <input type="password" name="password" placeholder="Password" required value={formData.password} onChange={handleChange} className="input-style" />
                    </div>

                    <button type="submit" disabled={loading} className="btn-primary">
                        {loading ? 'Signing in...' : 'Sign in'}
                    </button>

                    <p className="text-center text-sm">
                        Don't have an account? <Link to="/register" className="link">Register now</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;