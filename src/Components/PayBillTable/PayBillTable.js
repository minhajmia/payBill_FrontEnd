import React from "react";
import BilingModal from "../BilingModal/BilingModal";

const PayBillTable = () => {
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
            <BilingModal />
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
