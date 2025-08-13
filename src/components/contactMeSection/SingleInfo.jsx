// SingleInfo.jsx
const SingleInfo = ({ text, Icon }) => {
  return (
    <div className="flex gap-4 items-center justify-start">
      {Icon ? <Icon className="text-3xl" /> : null}
      <p>{text}</p>
    </div>
  );
};

export default SingleInfo;
