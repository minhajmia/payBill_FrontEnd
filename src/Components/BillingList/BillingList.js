import React from "react";

const BillingList = ({ bill: singleBill, ind }) => {
  const { fullName, phone, email, amount } = singleBill;

  // Delete Bill
  const handleDelete = (billID) => {
    console.log(billID);
    fetch(`/api/deleteBilling/${billID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Delete Successful");
      });
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
          <button>Edit</button> |{" "}
          <button onClick={() => handleDelete(singleBill._id)}>Delete</button>{" "}
        </td>
      </tr>
    </>
  );
};

export default BillingList;
