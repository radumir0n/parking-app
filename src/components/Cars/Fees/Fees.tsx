import { useState } from "react";

import { ICar } from "../Cars";
import Pagination from "../../../utils/Pagination/Pagination";
import { getDuration } from "../../../utils/utils";
import uniqueId from "lodash/uniqueId";
import "./Fees.scss";

interface IFees {
  fees: ICar[];
}

const Fees: React.FC<IFees> = ({ fees }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [feesPerPage] = useState(9);

  // Get current fees
  const indexOfLastFee = currentPage * feesPerPage;
  const indexOfFirstFee = indexOfLastFee - feesPerPage;
  const currentFees = fees.slice(indexOfFirstFee, indexOfLastFee);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <h1>Fees:</h1>
      <div className="container">
        {currentFees.map((fee) =>
          fee.paid === true ? (
            <div className="fee-box" key={uniqueId()}>
              <ul>
                <li>
                  <span>Licence Plate:</span> {fee.licencePlate}
                </li>
                <li>
                  <span>Time at entry:</span> {fee.timeAtEntry}
                </li>
                <li>
                  <span>Time at exit:</span> {fee.timeAtExit}
                </li>
                <li>
                  <span>Duration of stay:</span> {getDuration(fee.duration)}
                </li>
                <li>
                  <span>Fee:</span> {fee.fee}
                </li>
              </ul>
            </div>
          ) : null
        )}
      </div>
      <Pagination
        feesPerPage={feesPerPage}
        totalFees={fees.length}
        paginate={paginate}
      />
    </>
  );
};

export default Fees;
