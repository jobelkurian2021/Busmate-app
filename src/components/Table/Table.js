import React, { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";
import { useTable, usePagination,useGlobalFilter } from "react-table";
import "./table.css";

import TableFilter from "./TableFilter";

export default function Table({ COLUMN, DATA }) {
  const columns = useMemo(() => COLUMN, [COLUMN]);
  const data = useMemo(() => DATA, [DATA]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions, 
    gotoPage,
    pageCount,
    setPageSize,
    state,
    setGlobalFilter,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination,
 
  );

  const {pageIndex ,pageSize, globalFilter} =state;

  return (
    <>
    <TableFilter  filter={globalFilter} setFilter={setGlobalFilter}   />
      <table {...getTableProps} className="table table- table-bordered">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th scope="col" {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="tablepagination">
        <span >
          page{""}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span>
          |Go to page:{}
          <input
          className="p-.5 m-1"
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
                gotoPage(pageNumber)
            }}
            style={{width:'50px'}}
          />
        </span>
        <select  className="p-.5 m-1" value={pageSize} onChange={e=>setPageSize(Number(e.target.value))}> 
          {
            [3,7,15,20].map(pageSize=>(
              <option key={pageSize} value={pageSize} >{pageSize} size</option>
            ))
          }
        </select>
        <Button  variant="outline-success" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </Button>
        <Button variant="outline-success" onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </Button>
        <Button variant="outline-success" onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </Button>
        <Button variant="outline-success" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </Button>
      </div>
    </>
  );
}
