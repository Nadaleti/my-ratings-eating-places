import React from "react";
import { CgSpinnerTwoAlt } from 'react-icons/cg';

import "./Spinner.css";

const Spinner = (props) => {
   return props.show ?
      <div className="Loader_containter">
        <CgSpinnerTwoAlt className="Loader" />
      </div> : null;
}

export default Spinner;
