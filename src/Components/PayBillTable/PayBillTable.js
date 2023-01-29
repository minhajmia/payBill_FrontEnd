import React, { useState } from "react";
import { useForm } from "react-hook-form";

const PayBillTable = () => {
  const [payError, setPayError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit pay bill form
  const payBillSubmit = (data) => {
    setPayError("");
    fetch("http://localhost:5000/api/add-billing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <div className="flex justify-between items-center mx-12 border-1 p-2 mt-20 rounded-sm bg-slate-100">
        <div className=" flex justify-between items-center">
          <h3 className="font-semibold">Billings</h3>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered rounded-sm  w-full block ml-10"
          />
        </div>
        <label htmlFor="my-modal-3" className="btn">
          Add New Bill
        </label>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal ">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <form onSubmit={handleSubmit(payBillSubmit)}>
              <p>Full Name</p>
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full "
                {...register("fullName", {
                  required: "Full Name field is required",
                })}
              />
              {errors.fullName && (
                <p role="alert" className="text-error">
                  {errors.fullName?.message}
                </p>
              )}
              <p>Email</p>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full "
                {...register("email", {
                  required: "Email field is required",
                })}
              />
              {errors.email && (
                <p role="alert" className="text-error">
                  {errors.email?.message}
                </p>
              )}
              <p>Phone</p>
              <input
                type="text"
                placeholder="Phone"
                className="input input-bordered w-full "
                {...register("phone", {
                  required: "Phone field is required",
                  minLength: {
                    value: 11,
                    message: "This input must  11 characters",
                  },
                })}
              />
              {errors.phone && (
                <p role="alert" className="text-error">
                  {errors.phone?.message}
                </p>
              )}
              <p>Payable Amount</p>
              <input
                type="number"
                placeholder="Amount"
                className="input input-bordered w-full "
                {...register("amount", {
                  required: "Amount field is required",
                })}
              />
              {errors.amount && (
                <p role="alert" className="text-error">
                  {errors.amount?.message}
                </p>
              )}
              <button className="btn  rounded-sm  block mx-auto mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-11/12 mx-auto rounded-none mt-5">
            <thead>
              <tr>
                <th>Billing ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Payable Amount </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>minhaj@gmail.com</td>
                <td>012475455554</td>
                <td>2000</td>
                <td>
                  <button>Edit</button> | <button>Delete</button>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PayBillTable;
