import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData } from 'react-router';
import { useNavigate } from 'react-router';

const UpdateJob = () => {
    const loadedJob = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: loadedJob.title || '',
        category: loadedJob.category || '',
        summary: loadedJob.summary || '',
        coverImage: loadedJob.coverImage || '',
        postedBy: loadedJob.postedBy || user?.displayName || '',
        email: loadedJob.email || user?.email || ''
    });

    // input change handler
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // form submit handler
    const handleSubmit = async e => {
        e.preventDefault();
        const res = await fetch(`http://localhost:3000/addjobs/${loadedJob._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (res.ok) {
            toast.success('Job Updated Successfully!', {
                autoClose: 1500,
                onClose: () => navigate('/myaddedjob')
            });
        } else {
            toast.error('Failed to update job');
        }

    };

    return (
        <div className="max-w-lg my-5 mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                Update Job
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title */}
                <div>
                    <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                    />
                </div>

                {/* Posted By */}
                <div>
                    <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">Posted By</label>
                    <input
                        type="text"
                        name="postedBy"
                        value={formData.postedBy}
                        readOnly
                        className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                    >
                        <option value="">Select Category</option>
                        <option>Web Development</option>
                        <option>Mobile Development</option>
                        <option>Data Science</option>
                        <option>Digital Marketing</option>
                        <option>Graphic Design</option>
                        <option>Content Writing</option>
                    </select>
                </div>

                {/* Summary */}
                <div>
                    <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">Summary</label>
                    <textarea
                        name="summary"
                        value={formData.summary}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                    ></textarea>
                </div>

                {/* Cover Image */}
                <div>
                    <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">Cover Image URL</label>
                    <input
                        type="text"
                        name="coverImage"
                        value={formData.coverImage}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">User Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        readOnly
                        className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                    Update Now
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default UpdateJob;
