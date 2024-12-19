import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-teal-600 text-white py-4 shadow-lg rounded-b-lg sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-extrabold">ER Diagram Builder</h1>

          {/* Navbar Links */}
          <nav className="lg:flex space-x-6">
            <button className="bg-white text-teal-600 px-5 py-2 rounded-full hover:bg-teal-700 hover:text-white transition-all duration-300 transform hover:scale-105">
              Sign In
            </button>
            <button className="bg-white text-teal-600 px-5 py-2 rounded-full hover:bg-teal-700 hover:text-white transition-all duration-300 transform hover:scale-105">
              Sign Up
            </button>
            <button className="bg-yellow-500 text-black px-5 py-2 rounded-full hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105">
              Free Sign Up
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 py-8">
        <div className="container mx-auto px-6 text-center">
          {/* Welcome Section */}
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 transition-all duration-500 transform hover:scale-105">
            Welcome to ER Diagram Builder
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Create, edit, and collaborate on ER diagrams with ease. Start designing your database today!
          </p>
          <div className="flex justify-center space-x-6 mb-16">
            <button className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="bg-gray-300 text-gray-800 px-8 py-4 rounded-full hover:bg-gray-400 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>

          {/* ER Diagram Images Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[{
              img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/ERDiagramsInDBMS_1.png",
              title: "Basic ER Diagram",
              desc: "A simple ER diagram showcasing the relationship between entities in a database.",
            },
            {
              img: "https://cdn.nulab.com/learn-wp/app/uploads/2022/02/21192557/er-diagram-for-hospital-management-system.webp",
              title: "Advanced ER Diagram",
              desc: "An advanced ER diagram illustrating complex relationships with cardinalities.",
            },
            {
              img: "https://images.wondershare.com/edrawmax/article2023/er-diagram-examples/er-diagram-16.png",
              title: "Collaborative ER Diagram",
              desc: "Collaboratively designed ER diagrams for large team projects.",
            },
            {
              img: "https://www.researchgate.net/publication/315666255/figure/fig1/AS:476711717478400@1490668339611/Sample-ERD-diagram-of-a-typical-order-processing-system.png",
              title: "User and Orders ER Diagram",
              desc: "A detailed ER diagram representing the relationship between Users and Orders.",
            },
            {
              img: "https://landing.moqups.com/img/templates/diagrams/erd/ecommerce-database-diagram.png",
              title: "E-commerce ER Diagram",
              desc: "ER diagram for an e-commerce website illustrating user accounts, products, and orders.",
            },
            {
              img: "https://cdn.venngage.com/template/thumbnail/full/85f9dc7c-c79d-4657-863f-b1fc701ef62f.webp",
              title: "HR Management ER Diagram",
              desc: "A comprehensive ER diagram for managing human resources and employees within an organization.",
            },
            {
              img: "https://www.slideteam.net/media/catalog/product/cache/1280x720/d/a/database_relationship_diagram_for_inventory_management_system_slide01.jpg",
              title: "Sales and Inventory ER Diagram",
              desc: "This ER diagram represents the relationship between sales and inventory management systems.",
            },
            {
              img: "https://images.doclify.net/gleek-web/d/b2c44bcf-edc7-46e4-a7a7-9b672e5fc11b.png",
              title: "Library Management ER Diagram",
              desc: "A diagram representing the entities involved in a library management system such as books, members, and transactions.",
            },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-all duration-300 transform hover:scale-110"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-teal-600 text-white py-6 mt-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Resources</h3>
              <ul className="space-y-2">
                <li>Documentation</li>
                <li>Blog</li>
                <li>API Reference</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <ul className="space-y-2">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2024 ER Diagram Builder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
