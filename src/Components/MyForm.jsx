import PropTypes from "prop-types";

const MyForm = ({ label, type, placeholder }) => {
  return (
    <div className="flex form flex-col gap-1">
      <label htmlFor="Name">{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

MyForm.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
export default MyForm;
