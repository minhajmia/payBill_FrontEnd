import React from "react";
import UpdateBillInfo from "../UpdateBillInfo/UpdateBillInfo";

const BillingList = ({ bill: singleBill, ind, refetch }) => {
  const { fullName, phone, email, amount } = singleBill;

  // Delete Bill
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`https://backend-xi-wine.vercel.app/api/delete-billing/${id}`, {
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
          <label
            onClick={() => handleUpdate(singleBill._id)}
            htmlFor="my-modal-3"
            className="btn bg-base-400 mr-2"
          >
            Edit
            <UpdateBillInfo singleBill={singleBill} />
          </label>
          <button
            onClick={() => handleDelete(singleBill._id)}
            className="btn bg-red-400 border-0"
          >
            Delete
          </button>{" "}
        </td>
      </tr>
    </>
  );
};

export default BillingList;
