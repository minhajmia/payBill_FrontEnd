import React from "react";

const BillingList = ({ bill: singleBill, ind, refetch }) => {
  const { fullName, phone, email, amount } = singleBill;

  // Delete Bill
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/api/delete-billing/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Delete Successful");
            refetch();
          }
        });
    }
  };

  // Update Bill
  const handleUpdate = (id) => {
    console.log(id);
  };
  return (
    <>
      <tr>
        <th>{ind + 1}</th>
        <td>{fullName}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{amount}</td>
        <td>
          <button onClick={() => handleUpdate(singleBill._id)}>Edit</button> |{" "}
          <button onClick={() => handleDelete(singleBill._id)}>Delete</button>{" "}
        </td>
      </tr>
    </>
  );
};

export default BillingList;
