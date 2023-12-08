import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setMealsData,
  setEditId,
  setMealName,
  setMealPrice,
} from "../../redux/slices/mealsSlice";

function Meals() {
  const dispatch = useDispatch();
  const { data, editId, mealName, mealPrice } = useSelector(
    (state) => state.meals
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/meals")
      .then((res) => {
        dispatch(setMealsData(res.data));
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/meals", { name: mealName, price: mealPrice })
      .then((res) => {
        dispatch(setMealName(""));
        dispatch(setMealPrice(""));
        fetchData();
      })
      .catch((err) => console.error(err));
  };

  const handleEdit = (id) => {
    axios
      .get(`http://localhost:3000/meals/${id}`)
      .then((res) => {
        dispatch(setMealName(res.data.name));
        dispatch(setMealPrice(res.data.price));
        dispatch(setEditId(id));
      })
      .catch((err) => console.error(err));
  };

  const handleUpdate = (id) => {
    axios
      .put(`http://localhost:3000/meals/${id}`, {
        name: mealName,
        price: mealPrice,
      })
      .then((res) => {
        dispatch(setMealName(""));
        dispatch(setMealPrice(""));
        dispatch(setEditId(""));
        fetchData();
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/meals/${id}`).then(() => {
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
        onSubmit={handleSubmit}
      >
        <input
          style={{ width: "38%", height: "40px" }}
          type="text"
          placeholder="Enter Meal Name"
          value={mealName}
          onChange={(e) => dispatch(setMealName(e.target.value))}
        />
        <input
          style={{ width: "38%", height: "40px", marginLeft: "10px" }}
          type="number"
          placeholder="Enter Meal Price"
          value={mealPrice}
          onChange={(e) => dispatch(setMealPrice(e.target.value))}
        />
        <button
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
        </button>
      </form>

      <table
        style={{
          background: "white",
          marginLeft: "285px",
          marginTop: "60px",
          width: "1350px",
          height: "100vh",
          border: "1px solid black",
        }}
      >
        <thead style={{ background: "white" }}>
          <tr style={{ fontSize: "25px" }}>
            <th>ID</th>
            <th style={{ position: "relative", left: "12px" }}>Meal Name</th>
            <th style={{ position: "relative", right: "32px" }}>Meal Price</th>
            <th style={{ position: "relative", right: "82px" }}> Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((meal) => (
              <tr
                style={{
                  position: "relative",
                  left: "100px",
                  margin: "55px",
                }}
                key={meal.id}
              >
                <td>{meal.id}</td>
                <td>
                  {editId === meal.id ? (
                    <input
                      style={{
                        padding: "15px",
                        fontSize: "15px",
                        textAlign: "center",
                      }}
                      type="text"
                      value={mealName}
                      onChange={(e) => dispatch(setMealName(e.target.value))}
                    />
                  ) : (
                    typeof meal.name === "object"
                      ? JSON.stringify(meal.name)
                      : meal.name
                  )}
                </td>
                <td>
                  {editId === meal.id ? (
                    <input
                      style={{
                        padding: "15px",
                        fontSize: "15px",
                        textAlign: "center",
                      }}
                      type="number"
                      value={mealPrice}
                      onChange={(e) => dispatch(setMealPrice(e.target.value))}
                    />
                  ) : (
                    typeof meal.price === "object"
                      ? JSON.stringify(meal.price)
                      : meal.price
                  )}
                </td>
                <td>
                  {editId === meal.id ? (
                    <button
                      style={{
                        background: "blue",
                        color: "white",
                        width: "90px",
                        height: "32px",
                        padding: "5px",
                        fontSize: "20px",
                        textAlign: "center",
                        cursor: "pointer",
                        margin: "10px",
                      }}
                      onClick={() => handleUpdate(meal.id)}
                    >
                      Update
                    </button>
                  ) : (
                    <>
                      <button
                        style={{
                          fontSize: "20px",
                          background: "yellow",
                          width: "60px",
                          height: "40px",
                          cursor: "pointer",
                          border: "none",
                          margin: "10px",
                          borderRadius: "8px",
                        }}
                        onClick={() => handleEdit(meal.id)}
                      >
                        Edit
                      </button>
                      <button
                        style={{
                          fontSize: "20px",
                          background: "red",
                          width: "60px",
                          height: "40px",
                          cursor: "pointer",
                          border: "none",
                          margin: "10px",
                          borderRadius: "8px",
                        }}
                        onClick={() => handleDelete(meal.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Meals;
