import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setUsersData,
  setEditId,
  setUname,
  setUpassword,
} from "../../redux/slices/userSlice";

function Users() {
  const dispatch = useDispatch();
  const { data, editId, uname, upassword } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        dispatch(setUsersData(res.data));
      })
      .catch((err) => console.error(err));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:3000/users", { name: uname, password: upassword })
  //     .then((res) => {
  //       dispatch(setUname(""));
  //       dispatch(setUpassword(""));
  //       fetchData();
  //     })
  //     .catch((err) => console.error(err));
  // };

  // const handleEdit = (id) => {
  //   axios
  //     .get(`http://localhost:3000/users/${id}`)
  //     .then((res) => {
  //       dispatch(setUname(res.data.name));
  //       dispatch(setUpassword(res.data.password));
  //       dispatch(setEditId(id));
  //     })
  //     .catch((err) => console.error(err));
  // };

  // const handleUpdate = (id) => {
  //   axios
  //     .put(`http://localhost:3000/users/${id}`, {
  //       name: uname,
  //       password: upassword,
  //     })
  //     .then((res) => {
  //       dispatch(setUname(""));
  //       dispatch(setUpassword(""));
  //       dispatch(setEditId(""));
  //       fetchData();
  //     });
  // };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`).then(() => {
      fetchData();
    });
  };
  return (
    <div className="container" style={{ margin: "0 auto" }}>
      <form
        style={{
          width: "40%",
          height: "40px",
          margin: "0 auto",
          padding: "20px",
        }}
        // onSubmit={handleSubmit}
      >
        {/* <input
          style={{ width: "38%", height: "40px" }}
          type="text"
          placeholder="Enter Name"
          value={uname}
          onChange={(e) => dispatch(setUname(e.target.value))}
        />
        <input
          style={{ width: "38%", height: "40px", marginLeft: "10px" }}
          type="text"
          placeholder="Enter Password"
          value={upassword}
          onChange={(e) => dispatch(setUpassword(e.target.value))}
        /> */}
        {/* <button
          type="submit"
          style={{
            background: "green",
            width: "60px",
            height: "40px",
            marginLeft: "10px",
            color: "white",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Add
        </button> */}
      </form>

      <table
        style={{
          
          background: "white",
          marginLeft: "465px",
          width: "800px",
          height: "100vh",
         
       
          // border: "1px solid black",
        }}
      >
        <thead style={{ background: "white" }}>
          <tr style={{ fontSize: "25px",  }}>
            <th style={{ position: "relative", left: "100px" }} >ID</th>
            <th style={{ position: "relative", left: "92px" }}>Name</th>
            <th style={{ position: "relative", right: "-92px" }}>Password</th>
            <th style={{ position: "relative", right: "-100px" }}> Action</th>
          </tr>
        </thead>
        <tbody style={{ marginRight:"125px", textAlign:"center"}}>
        {data && data.map((user) => (
  <tr style={{ position: "relative", left: "100px", margin: "55px" }} key={user.id}>
    <td>{user.id}</td>
    <td>
      {editId === user.id ? (
        <input
          style={{ padding: "15px", fontSize: "15px", textAlign: "center" }}
          type="text"
          value={uname}
          onChange={(e) => dispatch(setUname(e.target.value))}
        />
      ) : (
        typeof user.name === "object" ? JSON.stringify(user.name) : user.name
      )}
    </td>
    <td>
      {editId === user.id ? (
        <input
          style={{ padding: "15px", fontSize: "15px", textAlign: "center" }}
          type="password"
          value={upassword}
          onChange={(e) => dispatch(setUpassword(e.target.value))}
        />
      ) : (
        typeof user.password === "object" ? JSON.stringify(user.password) : user.password
      )}
    </td>
    <td>
      {/* {editId === user.id ? (
        <button style={{ background: "blue", color: "white", width: "90px", height: "32px", padding: "5px", fontSize: "20px", textAlign: "center", cursor: "pointer", margin: "10px" }}
          onClick={() => handleUpdate(user.id)}>Update</button>
      ) : ( */}
        <>
          {/* <button style={{ fontSize: "20px", background: "yellow", width: "60px", height: "40px", cursor: "pointer", border: "none", margin: "10px", borderRadius: "8px" }}
            onClick={() => handleEdit(user.id)}>Edit</button> */}



          <button style={{ fontSize: "20px", background: "red", width: "90px", height: "40px", cursor: "pointer", border: "none", margin: "10px", borderRadius: "8px", color:"white" }}
            onClick={() => handleDelete(user.id)}>Delete</button>
        </>
      {/* )} */}
    </td>
  </tr>
))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
