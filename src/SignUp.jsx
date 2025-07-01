import React, { useState } from 'react'
import { Link, Navigate } from 'react-router'

const SignUp = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})
    const [success, setSuccess] = useState(false)
    const [redirect, setRedirect] = useState(false)


    const validate = () => {
        const newErrors = {}
        if (!form.name) newErrors.name = 'Name is required'
        if (!form.email) newErrors.email = 'Email is required'
        else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email is invalid'
        if (!form.password) newErrors.password = 'Password is required'
        else if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters'
        if (!form.confirmPassword) newErrors.confirmPassword = 'Please confirm your password'
        else if (form.password !== form.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
        return newErrors
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        setTouched({ ...touched, [e.target.name]: true })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = validate()
        setErrors(validationErrors)
        setTouched({ name: true, email: true, password: true, confirmPassword: true })
        if (Object.keys(validationErrors).length === 0) {
            setSuccess(true)
            // Marka la submit gareeyo:
            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push({
                name: form.name,
                email: form.email,
                password: form.password
            });
            localStorage.setItem("users", JSON.stringify(users));
            setForm({ name: '', email: '', password: '', confirmPassword: '' })
            setTimeout(() => setSuccess(false), 2000)
            setTimeout(() => setRedirect(true), 1500)




        }
    }
    if (redirect) {
        return <Navigate to="/Login" replace />
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
                noValidate
            >
                <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Sign Up</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition ${errors.name && touched.name ? 'border-red-400' : 'border-gray-200'
                            }`}
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={() => setTouched({ ...touched, name: true })}
                        autoComplete="name"
                    />
                    {errors.name && touched.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition ${errors.email && touched.email ? 'border-red-400' : 'border-gray-200'
                            }`}
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={() => setTouched({ ...touched, email: true })}
                        autoComplete="email"
                    />
                    {errors.email && touched.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition ${errors.password && touched.password ? 'border-red-400' : 'border-gray-200'
                            }`}
                        type="password"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        onBlur={() => setTouched({ ...touched, password: true })}
                        autoComplete="new-password"
                    />
                    {errors.password && touched.password && (
                        <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                    )}
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition ${errors.confirmPassword && touched.confirmPassword ? 'border-red-400' : 'border-gray-200'
                            }`}
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        onBlur={() => setTouched({ ...touched, confirmPassword: true })}
                        autoComplete="new-password"
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                        <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-700 text-white font-semibold py-2 rounded hover:bg-blue-800 transition"
                >
                    Sign Up
                </button>
                {success && (
                    <>
                        <div className="text-green-600 text-center font-medium mt-2">Sign up successful!</div>

                    </>
                )}

                <Link to="/Login"
                    className='text-right  mt-4 flex flex-end ml-50' >
                    I have Already Account </Link>
            </form>
        </div>
    )
}

export default SignUp