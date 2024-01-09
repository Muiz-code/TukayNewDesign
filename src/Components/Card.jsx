const Card = ({
  style1,
  style2,
  style3,
  style4,
  icon1,
  text1,
  text2,
  text3,
}) => {
  return (
    <div className={`${style1}`}>
      <button className="flex place-items-center col w-[100%]">
        <div
          className={`${style3} col flex gap-5 place-items-center py-3 px-3 rounded-2xl`}
        >
          <img src={icon1} className={style2} alt="" />
          <div className="flex flex-col place-items-start w-[100%]">
            <p>{text1}</p>
            <p>{text3}</p>
          </div>
        </div>
      </button>
      <div>
        <p className={style4}>{text2}</p>
      </div>
    </div>
  );
};

export default Card;
