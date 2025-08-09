import React, {useContext} from "react";
import { FilterContext } from "../../context/FilterContext";
import styles from "./pagination.module.css";

const Pagination = () => {

    const {handleBack, handleNext, page, total} = useContext(FilterContext);
    const {paginationContainer, paginationButton} = styles;

    return <div className={paginationContainer}>
        <button className={paginationButton} onClick={handleBack} disabled={page === 1}>
          Anterior
        </button>
        <span>
          Página {page} de {total}
        </span>
        <button className={paginationButton} onClick={handleNext} disabled={page === total}>
          Siguiente
        </button>
      </div>
};

export default Pagination;