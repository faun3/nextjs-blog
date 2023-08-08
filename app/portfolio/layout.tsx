const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="text-7xl font-bold my-5 mb-3">Our Work</h1>
      {children}
    </div>
  );
};
export default Layout;
