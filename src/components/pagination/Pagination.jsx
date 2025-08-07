import React, {useContext} from "react";
import { FilterContext } from "../../context/FilterContext";

const Pagination = () => {

    const {handleBack, handleNext, page, total} = useContext(FilterContext);

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