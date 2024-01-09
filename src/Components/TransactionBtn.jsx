const TransactionBtn = ({ icons, text, eachStyle }) => {
  return (
    <button className="flex gap-2 flex-col place-items-center col w-[100%]">
      <div className="col hover:scale-[1.02] place-items-center justify-between bg-[#0A221C] py-3 px-3 rounded-2xl">
        <img src={icons} className={eachStyle} alt="" />
      </div>
      <div>
        <p>{text}</p>
      </div>
    </button>
  );
};

export default TransactionBtn;
