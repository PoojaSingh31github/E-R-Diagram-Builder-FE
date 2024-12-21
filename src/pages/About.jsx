import React, { useState } from 'react';

function AboutPage() {
  const [selectedContent, setSelectedContent] = useState('');

  const handleBoxClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F9E6CF] text-gray-900">
      <main className="flex-grow">
        <div className="min-h-screen flex flex-col items-center">
          <section className="text-2xl font-bold text-center mb-8 p-8 text-[#DA498D] shadow-lg rounded-lg hover:shadow-2xl mt-24">
            <h1 className="hover:text-[#471953] text-[#DA498D] font-serif tracking-widest">About ER Diagram Builder</h1>
            <p className="mt-4 md:text-x font-light leading-relaxed">
              ER Diagram Builder simplifies creating, editing, and sharing Entity-Relationship diagrams. It bridges complex database modeling and user-friendly design, catering to both beginners and experts.
            </p>
            <p className="mt-4 md:text-x font-light leading-relaxed">
              Features like real-time collaboration, advanced importing/exporting, and responsive design empower seamless teamwork and efficient database visualization.
            </p>
          </section>

          <section className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="p-6 bg-gradient-to-r from-cyan-500 to-teal-500 text-center rounded-xl shadow-md hover:shadow-lg cursor-pointer "
                onClick={() => handleBoxClick('Key Features')}
              >
                <h2 className="text-2xl font-bold">Key Features</h2>
              </div>
              <div
                className="p-6 bg-gradient-to-r from-pink-500 to-rose-500 text-center rounded-xl shadow-md hover:shadow-lg cursor-pointer "
                onClick={() => handleBoxClick('Advanced Capabilities')}
              >
                <h2 className="text-2xl font-bold">Advanced Capabilities</h2>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-lg animate-fade-in">
              {selectedContent === 'Key Features' && (
                <ul className="list-disc list-inside text-gray-800 space-y-4">
                  <li><strong>User Authentication:</strong> Securely sign up, log in, and manage your account.</li>
                  <li><strong>Diagram Creation and Editing:</strong> Easily add entities, attributes, and relationships to your diagrams.</li>
                  <li><strong>Real-Time Collaboration:</strong> Work with your team in real-time with live updates.</li>
                  <li><strong>Export Options:</strong> Save your diagrams in formats like PNG, PDF, and SVG.</li>
                  <li><strong>Responsive Design:</strong> Enjoy a seamless experience on both desktop and mobile devices.</li>
                </ul>
              )}

              {selectedContent === 'Advanced Capabilities' && (
                <ul className="list-disc list-inside text-gray-800 space-y-4">
                  <li><strong>Automatic Layouts:</strong> Neatly organize your diagrams with automated layout options.</li>
                  <li><strong>Version Control:</strong> Keep track of changes and revert to earlier versions as needed.</li>
                  <li><strong>Import and Export:</strong> Generate ER diagrams directly from SQL or database schemas.</li>
                  <li><strong>Offline Mode:</strong> Work seamlessly even without an internet connection.</li>
                  <li><strong>Custom Styling:</strong> Personalize the look and feel of your diagrams with advanced styling options.</li>
                </ul>
              )}

              {!selectedContent && (
                <p className="text-center text-gray-600">Click on a box above to view its content.</p>
              )}
            </div>
          </section>

          <section className="mt-12 max-w-6xl w-full bg-lime-50 rounded-lg shadow-lg p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">Why Choose ER Diagram Builder?</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>Ease of Use:</strong> Designed with a user-friendly interface, it caters to both beginners and professionals.</p>
              <p><strong>Collaboration First:</strong> Work with your team in real-time, ensuring smooth communication and productivity.</p>
              <p><strong>Versatility:</strong> Whether you need simple diagrams or complex models, this tool adapts to your requirements.</p>
              <p><strong>Efficiency:</strong> Save time with features like automatic layouts, version control, and easy exporting.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
