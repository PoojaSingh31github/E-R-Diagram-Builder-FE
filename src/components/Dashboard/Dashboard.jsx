import React, { useEffect, useState } from 'react'
import { getAllProjects ,createProject, deleteProjectById} from '../../utils/ApiEndPoints/ApiEndPoint';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const [openModal, setOpenModal] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [projectType, setProjectType] = useState("erd");
    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
      try {
        const response = await getAllProjects();
        setProjects(response.data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    };

    const handleCreateProject = async (e) => {
      e.preventDefault();
      const newProject = {
        name: projectName,
        description,
        type: projectType,
      };
      try {
        await createProject(newProject);
        toast.success('Project created successfully!');
        setOpenModal(false);
        setProjectName("");
        setDescription("");
        setProjectType("erd");
        fetchProjects(); 

      } catch (error) {
        toast.error('Failed to create project!');
        console.error('Failed to create project:', error);
      }
    };

    const handleDeleteProject = async (id) => {
      try {
        await deleteProjectById(id);
        toast.success('Project deleted successfully!');
        fetchProjects(); 
      } catch (error) {
        toast.error('Failed to delete project!');
        console.error('Failed to delete project:', error);
      }
    };
  
    useEffect(() => {
      fetchProjects();
    }, []);

  return (
    <>
     {/* Trigger Button */}
     <button
        onClick={() => setOpenModal(true)}
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
      >
        Open Project Modal
      </button>

     {/* Project Cards */}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {projects && projects.map((project) => (
          <div key={project._id} className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold">{project.name}</h3>
            <p className="text-gray-700 mt-2">{project.description}</p>
            <p className="text-sm text-gray-500 mt-2">Type: {project.type}</p>
            <button
              onClick={() => handleDeleteProject(project._id)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>


    {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-11/12 max-w-lg rounded-lg p-6 shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Project Details</h2>

            <form onSubmit={handleCreateProject} className="space-y-4">
              {/* Project Name */}
              <div>
                <label
                  htmlFor="projectName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Project Name
                </label>
                <input
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  type="text"
                  id="projectName"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter project name"
                  required
                />
              </div>

              {/* Project Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id="description"
                  rows="3"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter project description"
                  required
                ></textarea>
              </div>

              {/* Project Type Dropdown */}
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Project Type
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  id="projectType"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                >
                  <option value="">Select project type</option>
                  <option value="erd">E-R Digram</option>
                  <option value="sd">Schema Digram</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    
    </>
  )
}

export default Dashboard;