import React from "react";

export default function product(props) {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <h2>
            {props.product.name}
            <span className="badge bg-secondary">{props.product.price}</span>
          </h2>
        </div>
        <div className="col-4">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button type="button" class="btn btn-danger">
              -
            </button>
            <button type="button" class="btn btn-warning">
              {props.product.quantity}
            </button>
            <button type="button" class="btn btn-success">
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
