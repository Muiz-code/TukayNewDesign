/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Input } from "@mui/base/Input";

const MyForm = ({ label, type, placeholder, inpStyle, name }) => {
  return (
    <div className="flex form flex-col gap-1">
      <label htmlFor="name">{label}</label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        className={inpStyle}
      />
    </div>
  );
};

MyForm.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  inpStyle: PropTypes.string,
};
export default MyForm;
