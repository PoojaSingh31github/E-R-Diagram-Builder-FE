import React, { useState } from 'react'
// import LoginModal from './LoginModal';

const Login = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log(isModalOpen)

    return (
        <div>
            <div className="max-w-screen-xl mx-auto p-4 relative pt-20">
                <img
                    src="https://i.ibb.co/FhrQjBD/3.png"
                    alt="ER Diagram Left"
                    className="absolute top-28 left-0 hidden lg:block w-60 h-42"
                />
                <img
                    src="https://i.ibb.co/XkypzBj/2.png"
                    alt="ER Diagram Right"
                    className="absolute top-28 right-0 hidden lg:block w-60 h-38"
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
                    className="flex flex-col lg:flex-row justify-between items-stretch gap-6 mt-8 py-20"
                >
                    <div onClick={() => setIsModalOpen(true)}
                        className="border cursor-pointer border-gray-300 rounded-lg shadow-sm p-6 flex-1 text-center bg-white"
                    >
                        <h2 className="text-2xl font-bold mb-2 text-gray-700 " >Free</h2>
                        <p className="text-4xl font-extrabold text-gray-900">$0.00</p>
                        <p className="text-sm text-gray-500">GST excluded</p>
                        <div className="mt-4">
                            <span className="text-gray-600 font-medium">Products included:</span>
                            <p className="font-bold text-[#7c294f]">EntityCraft</p>
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
                            <p className="font-bold text-[#7c294f]">EntityCraft</p>
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
                            <p className="font-bold text-[#7c294f]">EntityCraft</p>
                        </div>
                    </div>

                    <div onClick={() => setIsModalOpen(true)}
                        className="border cursor-pointer border-gray-300 rounded-lg shadow-sm p-6 flex-1 text-center bg-white"
                    >
                        <h2 className="text-2xl font-bold mb-2 text-gray-700 ">Enterprise</h2>
                        <p className="text-sm text-gray-500">Access to Collaboration</p>
                        <div className="mt-4">
                            <span className="text-gray-600 font-medium">EntityCraft Suite products:</span>
                            <p className="font-bold text-[#7c294f]">EntityCraft</p>
                            <p className="font-bold text-[#DA498D]">EntityCraftspark</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
