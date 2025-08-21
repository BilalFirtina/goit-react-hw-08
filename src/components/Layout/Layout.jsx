import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <main>
        <div>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
