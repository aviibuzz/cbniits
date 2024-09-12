import React, { useState } from "react";

const TableTest = () => {
  const [isAdd, setIsAdd] = useState(false);
  const [inputs, setInputs] = useState(null);
  const [data, setData] = useState([
    {
      id: 1,
      name: "Abhishek",
      designation: "Engineer",
      status: "A"
    }
  ]);

  const handleDelete = (e, selectedData) => {
    e.preventDefault();
    const temp = data.filter((x) => x.id !== selectedData.id);
    console.log(temp);
    setData(temp);
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const handleAddData = (e) => {
    e.preventDefault();
    console.log(inputs);
    let tempData = {};
    const { id, name, designation, status } = inputs;

    if (name && designation && status) {
      if (id) {
        tempData = data.map((x) => {
          if (x.id === id) {
            return {
              id: id,
              name: name,
              designation: designation,
              status: status
            };
          } else {
            return x;
          }
        });
        setData(tempData);
      } else {
        tempData = {
          id: data.length + 1,
          name: name,
          designation: designation,
          status: status
        };
        setData([...data, tempData]);
      }

      handleReset();
      setIsAdd(false);
    } else {
      alert("all field are mandatory");
    }
  };

  // handleEdit
  const handleEdit = (e, selectedRows) => {
    const { id, name, designation, status } = selectedRows;
    setInputs(selectedRows);
    setIsAdd(true);
  };

  // reset function

  const handleReset = () => {
    setInputs({
      name: "",
      designation: "",
      status: ""
    });
  };
  return (
    <>
      <h1>Crud Application on Table Component</h1>

      <div className="main">
        <table>
          <caption>
            Table Example
            <button style={{ float: "right" }} onClick={() => setIsAdd(!isAdd)}>
              {!isAdd ? "Add" : "Hide Add Section"}
            </button>
          </caption>
          <thead>
            {isAdd && (
              <tr>
                <td colSpan="2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name..."
                    value={inputs?.name}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="designation"
                    placeholder="Enter Designation..."
                    value={inputs?.designation}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="status"
                    placeholder="Enter Status..."
                    value={inputs?.status}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <button onClick={handleAddData}>Add</button>
                  <button onClick={handleReset}>Reset</button>
                </td>
              </tr>
            )}
            <tr>
              <td>Sr.</td>
              <td>name</td>
              <td>Designation</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((x, index) => (
                <tr key={`${index}${x.id}`}>
                  <td>{index + 1}</td>
                  <td>{x.name}</td>
                  <td>{x.designation}</td>
                  <td>{x.status === "A" ? "Active" : "Not Active"} </td>
                  <td>
                    <button onClick={(e) => handleEdit(e, x)}>Edit</button>
                    <button onClick={(e) => handleDelete(e, x)}>Delete</button>
                  </td>
                </tr>
              ))}
            {data && data.length === 0 && (
              <tr>
                <td colSpan="5">No Data Available...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableTest;
