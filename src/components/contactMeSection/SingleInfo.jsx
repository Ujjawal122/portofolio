const SingleInfo = ({ text, Icon }) => {
  return (
    <div className="flex gap-3 items-center">
      {Icon && <Icon className="text-xl md:text-2xl text-sky-400" />}
      <p className="text-sm md:text-base">{text}</p>
    </div>
  );
};

export default SingleInfo;
