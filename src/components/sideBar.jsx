const Sidebar = ({ children }) => {
  return (
    <div className="w-[35%] relative">
      <img src="/bg-sidebar-desktop.svg" alt="ded" className="w-full" />
      <div className="absolute mt-6 top-0">{children}</div>
    </div>
  );
};

export default Sidebar;
