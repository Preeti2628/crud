import React, { useState ,useEffect} from "react";
import * as ReactDOM from "react-dom";
import AddUserForm from "./Add";
// import EditUserForm from "./components/editUserForm";
import UserTable from "../components/userTable";
import { IBaseUser, IUser } from "../components/interface";
import axios from 'axios';
import "../styles/navBar.css";
import NavBar from "../components/navBar";



const defaultUsers: Array<IUser> = [
  {id:1, name: "John", designation: 'Software Developer', skills: 'JavaScript', city:'Hyd'},
  {id:2, name: "Joe", designation: 'UX Designer', skills: 'Figma', city:'Hyd'},
  {id:3, name: "Sam", designation: 'Java Developer', skills: 'Java', city:'Hyd'},
  {id:4, name: "Tim", designation: 'QA', skills: 'testing', city:'Hyd'},
  {id:5, name: "Jim", designation: 'React Developer', skills: 'JavaScript', city:'Hyd'},
];


const initCurrentUser: IUser = { name: "",  designation: "", skills: "", city: "", id: 1 };

function App() {
  const [users, setUsers] = useState(defaultUsers);
  const [editUser, setEditUser] = useState(initCurrentUser);
  const [editing, setEdit] = useState(false);
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/user`)
        .then((response) => {
            console.log(response.data)
            setAPIData(response.data);
        })
}, []);
// useEffect(() => {
//   getUsers();
// }, []);
// const getUsers = async () =>{
//   const response = await getallUsers();
//   console.log(response);
//   setUser(response.data);
// }
// console.log(APIData);
  const onAddUser = (newUser: IBaseUser) => {
    const id = users.length + 1;
    setUsers([...users, { ...newUser, id }]);
  };
  const onCurrentUser = (user: IUser) => {
    setEditUser(user);
    setEdit(true);
  };
  const onUpdateUser = (id: number, newUser: IUser) => {
    setEdit(false);
    setUsers(users.map(i => (i.id === id ? newUser : i)));
  };
  const onDeleteUser = (currentUser: IUser) => {
    // setAPIData(APIData.filter(i => i.id !== currentUser.id));
    console.log(currentUser);
    
  };
  return (
    <div className="App"> 
    <NavBar/>
    <div className="navBar">
      <h1>CRUD App </h1>
      <div className="user-flex-wrapper">
        <UserTable
          users={APIData}
          onEdit={onCurrentUser}
          onDelete={onDeleteUser}
        />
      </div>
      </div>
    </div>
  );
}

export default App;
