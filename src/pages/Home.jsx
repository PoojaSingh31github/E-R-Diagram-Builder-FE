import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      
      {/* Main Content */}
      <main className="flex-grow bg-gray-100 py-8">
        <div className="container mx-auto px-6 text-center">
          {/* Welcome Section */}
          <div className="grid lg:grid-cols-2 gap-8 px-8 py-16 max-w-7xl mx-auto">
    <div className="flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-6">
        Diagramming powered by intelligence
      </h1>
      <p className="text-gray-600 text-lg mb-6">
        Create next-generation diagrams with AI, data, and automation in Lucidchart. Understand and optimize every system and process.
      </p>
      <Link to={"/whiteSpace/path"} className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md">
        start designing
      </Link>
      <Link to={"/template/path"} className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md">
        sample designing
      </Link>
      <Link to={"/schema/path"} className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md">
        schema designing
      </Link>
    </div>

    <div className="relative bg-gray-100 rounded-md shadow-md overflow-hidden">
      <img src="your-placeholder-image.jpg" alt="Diagram Preview" className="w-full"/>
    </div>
  </div>
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
      </main>
      {/* Footer */}
      
    </div>
  );
};
export default Home;
