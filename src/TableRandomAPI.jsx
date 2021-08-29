import React, { useState, useEffect } from "react";

const Base_URL = `https://ghibliapi.herokuapp.com`;

const TableWithRandomApi = () => {
  const [data, setData] = useState(null);

  const getData = async (url) => {
    const responseData = await fetch(url, {
      method: "get"
    })
      .then((response) => response.json())
      .then((res) => {
        setData(res);
        console.log("innerResponse", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleView = (e, selectedRows) => {
    const url = `${Base_URL}/films/${selectedRows.id}`;
    getData(url);
  };

  const handleEdit = () => {};
  const handleDelete = () => {};
  // useEffect to call data
  useEffect(() => {
    const url = `${Base_URL}/films`;
    getData(url);
  }, []);

  console.log(data);

  return (
    <>
      <h1>Random Rest Web API Crud Application</h1>
      <div className="main">
        <table>
          <caption>
            Table Example
            {/* <button style={{ float: "right" }} onClick={() => setIsAdd(!isAdd)}>
              {!isAdd ? "Add" : "Hide Add Section"}
            </button> */}
          </caption>
          <thead>
            <tr>
              <td>Sr.</td>
              <td>Title</td>
              <td>Director</td>
              <td>Producer</td>
              <td>Release Date</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((x, index) => (
                <tr key={`${index}${x.id}`}>
                  <td>{index + 1}</td>
                  <td>{x.title}</td>
                  <td>{x.director}</td>
                  <td>{x.producer} </td>
                  <td>{x.release_date}</td>
                  <td>
                    <button onClick={(e) => handleView(e, x)}>View</button>
                    {/* <button onClick={(e) => handleEdit(e, x)}>Edit</button>
                    <button onClick={(e) => handleDelete(e, x)}>Delete</button> */}
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

export default TableWithRandomApi;
