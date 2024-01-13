/* eslint-disable react/prop-types */
import MyForm from "./MyForm";

const BVNCard = ({ heading, sub }) => {
  return (
    <div className="w-[30%] flex flex-col gap-3 bg-[#0A221C] p-[40px] rounded-2xl justify-center place-items-center">
      <h1 className="text-[25px]">{heading}</h1>
      <p className="text-center">{sub}</p>
      <MyForm type="no" placeholder="BVN" inpStyle="w-[100%] px-3 py-2" />
    </div>
  );
};

export default BVNCard;
