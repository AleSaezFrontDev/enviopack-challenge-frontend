import React from "react";

const Pagination = ({pagination}) => {

    const {handleBack, handleNext, page, total} = pagination;

    return <div>
        <button onClick={handleBack} disabled={page === 1}>
          Anterior
        </button>
        <span>
          Página {page} de {total}
        </span>
        <button onClick={handleNext} disabled={page === total}>
          Siguiente
        </button>
      </div>
};

export default Pagination;