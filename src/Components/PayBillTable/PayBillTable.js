import { useQuery } from "@tanstack/react-query";
import React from "react";
import BilingModal from "../BilingModal/BilingModal";
import BillingList from "../BillingList/BillingList";

const PayBillTable = () => {
  const { data: billingList = [], refetch } = useQuery({
    queryKey: ["/api/billing-list"],
    queryFn: () =>
      fetch("http://localhost:5000/api/billing-list").then((response) =>
        response.json()
      ),
  });
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
              {billingList.map((singleBill, ind) => (
                <BillingList
                  bill={singleBill}
                  key={singleBill._id}
                  ind={ind}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PayBillTable;
