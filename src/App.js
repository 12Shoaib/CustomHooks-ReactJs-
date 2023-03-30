import useFetch from "./useFetch/useFetch"
import './App.css';
import useLocalStorage from "./useLocaStorage/useLocalStorage";

const App = () => {
  let result = useFetch('https://randomuser.me/api/?results=11')  // Fetching Data from Custom Hook
  result = result?.data?.results
  useLocalStorage('shoaib' , result)     //LocalstorageHook
  return (
    <div>
      <h1> Rendering List Using Custom Hook</h1>
      {result?.map((element) => <div className="mainComponent">
      <table className="table">
      <tr>
        <th className="coloumn">Name</th>
        <th className="coloumn">Login Id</th>
        <th className="coloumn">Password</th>
      </tr>
      <tr>
      <td>{element.name.title} {element.name.first} {element.name.last} </td>
      <td>{element.login.username}</td>
      <td>{element.login.password}</td>
        </tr>
      </table>
      </div>)}
    </div>
  )
}

export default App
