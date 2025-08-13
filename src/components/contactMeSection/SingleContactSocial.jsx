const SingleContactSocial = ({ Icon, link, hoverColor = "text-slate-200" }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-2xl h-12 w-12 border border-slate-400 text-slate-300 rounded-full 
                  flex items-center justify-center 
                  transition-all duration-300 
                  hover:scale-110 hover:${hoverColor} hover:border-current cursor-pointer 
                  bg-slate-700`}
    >
      <Icon />
    </a>
  );
};
