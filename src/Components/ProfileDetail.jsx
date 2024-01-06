const ProfileDetail = ({
  welcometext,
  lastname,
  icon,
  fullname,
  customerId,
}) => {
  return (
    <div className="flex justify-between w-100">
      <div>
        <p className="text-3xl font-light">{welcometext}</p>
        <h1 className="text-5xl ">{lastname}</h1>
      </div>
      <div className="flex place-items-center justify-end gap-2 w-[25%]">
        <img src={icon} className="w-[25%]" alt="" />
        <div>
          <p className="text-xl font-light">{fullname}</p>
          <h1 className=" text-sm">{customerId}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
