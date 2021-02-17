import "./Pagination.scss";

interface IPagination {
  totalFees: number;
  feesPerPage: number;
  paginate: (label: number) => void;
}

const Pagination = ({ totalFees, feesPerPage, paginate }: IPagination) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFees / feesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="list">
        {pageNumbers.map((number) => (
          <li key={number} className="item">
            <a
              onClick={(e: any) => {
                paginate(number);
                e.preventDefault();
              }}
              href="!#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
