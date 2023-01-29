import React, { useState } from "react";
import { useForm } from "react-hook-form";

const BilingModal = () => {
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
        if (data.acknowledged) {
          alert("PayBill Payment Successful");
        } else {
          alert("Spinner hobe");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
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
        <button className="btn  rounded-sm  block mx-auto mt-2">Submit</button>
      </form>
    </div>
  );
};

export default BilingModal;
