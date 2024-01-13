/* eslint-disable react/prop-types */
const Buttons = ({ img, heading, sub, style, click }) => {
  return (
    <div className="flex flex-col gap-5 ">
      <button
        className="flex gap-3 place-items-center bg-[#0A221C] p-3 rounded-xl"
        onClick={click}
      >
        <div className={` ${style} p-4 w-[10%] rounded-xl`}>
          <img src={img} alt="" />
        </div>
        <div className="flex flex-col place-items-start">
          <h1>{heading}</h1>
          <p className="text-[12px] text-[#adababc7]">{sub}</p>
        </div>
      </button>
    </div>
  );
};

export default Buttons;
