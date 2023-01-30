import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import BilingModal from "../BilingModal/BilingModal";
import BillingList from "../BillingList/BillingList";
import "./PayBillTable.css";

const PayBillTable = () => {
  const [bill, setBill] = useState([]);
  const [billCount, setBillCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const { data, refetch } = useQuery({
    queryKey: ["/api/billing-list"],
    queryFn: () =>
      fetch(
        `http://localhost:5000/api/billing-list?page=${page}$size=${size}`
      ).then((response) => response.json()),
  });

  const bills = data?.bills;
  const count = data?.count;

  useEffect(() => {
    setBill(bills);
    setBillCount(count);
  }, [bills, count]);

  const pages = Math.ceil(count / size);

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
              {bills?.map((singleBill, ind) => (
                <BillingList
                  bill={singleBill}
                  key={singleBill._id}
                  ind={ind}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
          <div className="text-center my-10 design">
            {pages &&
              [...Array(pages).keys()].map((number) => (
                <button
                  key={number}
                  className={`badge badge-lg mr-2 ${
                    number === page && "selected"
                  }`}
                  onClick={() => setPage(number)}
                >
                  {number}
                </button>
              ))}
            <select onChange={(event) => setSize(event.target.value)}>
              <option value="5">5</option>
              <option value="10" selected>
                10
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayBillTable;
