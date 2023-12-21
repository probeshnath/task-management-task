import { TfiWrite } from "react-icons/tfi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import usePublicAxios from "../../hooks/usePublicAxios";
import { AuthContext } from "../../provider/AuthProvider";


const MyTasks = () => {
  const axiosPublic = usePublicAxios()
  const { user } = useContext(AuthContext)
  const [todo, setTodo] = useState(null)

  useEffect(() => {

    axiosPublic.get(`/tasks/${user?.email}`)
      .then(res => {
        // console.log(res.data)
        setTodo(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [user])
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      {/* to do list */}
      <div className="border p-5">
        <h2 className="text-2xl font-bold text-orange-600 flex items-center gap-2"><TfiWrite className="text-blue-700" /> To-Do List</h2>
        <ul className="py-4 flex flex-col gap-2">


          {
            todo?.map((to,inx) => (
              <li key={inx} className="bg-white p-2 w-full rounded-md flex items-center gap-2">
                <div className="w-full">
                  <h3 className="font-bold">{to?.title}</h3>
                  <p className="text-sm text-gray-500">{to?.description}</p>
                  <div className="flex my-2 w-full justify-between">
                    <p className="bg-green-200 px-2 text-sm font-bold text-green-600 rounded-lg">{to?.priority}</p>
                    <p className="text-gray-400 text-sm">{to?.deadline}</p>
                    <FaEdit title="Edit task" className="text-lg cursor-pointer text-orange-500" />
                    <MdDelete title="Delete task" className="cursor-pointer text-xl text-red-600" />
                  </div>
                </div>
              </li>
            ))
          }




        </ul>
      </div>
      {/* on going list */}
      <div className="border p-5">
        <h2 className="text-2xl font-bold text-orange-600 flex items-center gap-2"><TfiWrite className="text-blue-700" /> Ongoing List</h2>
        <ul className="py-4 flex flex-col gap-2">

          <li className="bg-white p-2 rounded-md flex items-center gap-2">
            <div>
              <h3 className="font-bold">Task Title</h3>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum est quos ab repellat alias modi sequi maiores, debitis iste labore!</p>
              <div className="flex my-2 justify-between">
                <p className="bg-green-200 px-2 text-sm font-bold text-green-600 rounded-lg">Low</p>
                <p className="text-gray-400 text-sm">12/30/2013</p>
                <FaEdit title="Edit task" className="text-lg cursor-pointer text-orange-500" />
                <MdDelete title="Delete task" className="cursor-pointer text-xl text-red-600" />
              </div>
            </div>
          </li>

          <li className="bg-white p-2 rounded-md flex items-center gap-2">
            <div>
              <h3 className="font-bold">Task Title</h3>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum est quos ab repellat alias modi sequi maiores, debitis iste labore!</p>
              <div className="flex my-2 justify-between">
                <p className="bg-green-200 px-2 text-sm font-bold text-green-600 rounded-lg">Low</p>
                <p className="text-gray-400 text-sm">12/30/2013</p>
                <FaEdit title="Edit task" className="text-lg cursor-pointer text-orange-500" />
                <MdDelete title="Delete task" className="cursor-pointer text-xl text-red-600" />
              </div>
            </div>
          </li>

          <li className="bg-white p-2 rounded-md flex items-center gap-2">
            <div>
              <h3 className="font-bold">Task Title</h3>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum est quos ab repellat alias modi sequi maiores, debitis iste labore!</p>
              <div className="flex my-2 justify-between">
                <p className="bg-green-200 px-2 text-sm font-bold text-green-600 rounded-lg">Low</p>
                <p className="text-gray-400 text-sm">12/30/2013</p>
                <FaEdit title="Edit task" className="text-lg cursor-pointer text-orange-500" />
                <MdDelete title="Delete task" className="cursor-pointer text-xl text-red-600" />
              </div>
            </div>
          </li>

        </ul>
      </div>
      {/* complete list */}
      <div className="border p-5">
        <h2 className="text-2xl font-bold text-orange-600 flex items-center gap-2"><TfiWrite className="text-blue-700" /> completed Task</h2>
        <ul className="py-4 flex flex-col gap-2">

          <li className="bg-white p-2 rounded-md flex items-center gap-2">
            <div>
              <h3 className="font-bold">Task Title</h3>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum est quos ab repellat alias modi sequi maiores, debitis iste labore!</p>
              <div className="flex my-2 justify-between">
                <p className="bg-green-200 px-2 text-sm font-bold text-green-600 rounded-lg">Low</p>
                <p className="text-gray-400 text-sm">12/30/2013</p>
                <FaEdit title="Edit task" className="text-lg cursor-pointer text-orange-500" />
                <MdDelete title="Delete task" className="cursor-pointer text-xl text-red-600" />
              </div>
            </div>
          </li>

          <li className="bg-white p-2 rounded-md flex items-center gap-2">
            <div>
              <h3 className="font-bold">Task Title</h3>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum est quos ab repellat alias modi sequi maiores, debitis iste labore!</p>
              <div className="flex my-2 justify-between">
                <p className="bg-green-200 px-2 text-sm font-bold text-green-600 rounded-lg">Low</p>
                <p className="text-gray-400 text-sm">12/30/2013</p>
                <FaEdit title="Edit task" className="text-lg cursor-pointer text-orange-500" />
                <MdDelete title="Delete task" className="cursor-pointer text-xl text-red-600" />
              </div>
            </div>
          </li>

          <li className="bg-white p-2 rounded-md flex items-center gap-2">
            <div>
              <h3 className="font-bold">Task Title</h3>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum est quos ab repellat alias modi sequi maiores, debitis iste labore!</p>
              <div className="flex my-2 justify-between">
                <p className="bg-green-200 px-2 text-sm font-bold text-green-600 rounded-lg">Low</p>
                <p className="text-gray-400 text-sm">12/30/2013</p>
                <FaEdit title="Edit task" className="text-lg cursor-pointer text-orange-500" />
                <MdDelete title="Delete task" className="cursor-pointer text-xl text-red-600" />
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default MyTasks