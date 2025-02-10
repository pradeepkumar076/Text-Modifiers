import React from "react";

function Alert(props) {
  const tocapital = (str) => {
    const newstr = str.toLowerCase();
    return newstr.charAt(0).toUpperCase() + newstr.slice(1);
  };
  return (
    <div className="container h-20" style={{height:'50px'}}>
      {props.alert &&
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{tocapital(props.alert.type)} : </strong> {props.alert.message}
      </div>}
    </div>
  );
}

export default Alert;
