const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="relative hover:-translate-y-6 transition-all duration-500">
      <div className="flex flex-col items-center gap-2">
        <div className="bg-slate text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange">
          {imgSvg}
        </div>
        <p className="text-white font-bold">{text}</p>
      </div>
      <div className="w-[100px] h-[200px] bg-orange absolute top-[50px] left-1/2 -translate-x-1/2 -z-10 rounded-lg"></div>
    </div>
  );
};

export default SingleSkill;
