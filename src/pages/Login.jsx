import React, { useState } from 'react'
import LoginModal from './LoginModal';

const Login = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <div className="max-w-screen-xl mx-auto p-4 relative">
                <img
                    src="https://via.placeholder.com/200x150"
                    alt="ER Diagram Left"
                    className="absolute top-20 left-0 hidden lg:block"
                />
                <img
                    src="https://via.placeholder.com/200x150"
                    alt="ER Diagram Right"
                    className="absolute top-20 right-0 hidden lg:block"
                />

                <div className="text-center py-8">
                    <img
                        src="https://via.placeholder.com/100x30"
                        alt="Lucidchart Logo"
                        className="mx-auto mb-4"
                    />
                    <h1 className="text-4xl font-bold text-gray-800 mb-2 leading-tight">
                        Visualize complex ideas <br />
                        and drive alignment
                    </h1>
                    <p className="text-gray-500 mt-4">Bundle & save</p>
                </div>

                <div
                    className="flex flex-col lg:flex-row justify-between items-stretch gap-6 mt-8"
                >
                    <div onClick={() => setIsModalOpen(true)}
                        className="border cursor-pointer border-gray-300 rounded-lg shadow-sm p-6 flex-1 text-center bg-white"
                    >
                        <h2 className="text-2xl font-bold mb-2 text-gray-700 " >Free</h2>
                        <p className="text-4xl font-extrabold text-gray-900">$0.00</p>
                        <p className="text-sm text-gray-500">GST excluded</p>
                        <div className="mt-4">
                            <span className="text-gray-600 font-medium">Products included:</span>
                            <p className="font-bold text-orange-500">Lucidchart</p>
                        </div>
                    </div>

                    <div onClick={() => setIsModalOpen(true)}
                        className="border cursor-pointer border-gray-300 rounded-lg shadow-sm p-6 flex-1 text-center bg-white"
                    >
                        <h2 className="text-2xl font-bold mb-2 text-gray-700 "  >Individual</h2>
                        <p className="text-4xl font-extrabold text-gray-900">$9.00</p>
                        <p className="text-sm text-gray-500">GST excluded</p>
                        <div className="mt-4">
                            <span className="text-gray-600 font-medium">Products included:</span>
                            <p className="font-bold text-orange-500">Lucidchart</p>
                        </div>
                    </div>

                    <div onClick={() => setIsModalOpen(true)}
                        className="border cursor-pointer border-gray-300 rounded-lg shadow-sm p-6 flex-1 text-center bg-white"
                    >
                        <h2 className="text-2xl font-bold mb-2 text-gray-700 "  >Team</h2>
                        <p className="text-4xl font-extrabold text-gray-900">$10.00/user</p>
                        <p className="text-sm text-gray-500">GST excluded</p>
                        <div className="mt-4">
                            <span className="text-gray-600 font-medium">Products included:</span>
                            <p className="font-bold text-orange-500">Lucidchart</p>
                        </div>
                    </div>

                    <div onClick={() => setIsModalOpen(true)}
                        className="border cursor-pointer border-gray-300 rounded-lg shadow-sm p-6 flex-1 text-center bg-white"
                    >
                        <h2 className="text-2xl font-bold mb-2 text-gray-700 ">Enterprise</h2>
                        <p className="text-sm text-gray-500">Access to Collaboration</p>
                        <div className="mt-4">
                            <span className="text-gray-600 font-medium">Lucid Suite products:</span>
                            <p className="font-bold text-orange-500">Lucidchart</p>
                            <p className="font-bold text-red-500">Lucidspark</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal Component */}
            <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}

export default Login;
