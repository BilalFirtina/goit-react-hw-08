import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Link } from "react-router-dom";

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>Hoş Geldiniz!</h2>
          <p>
            Kişilerinizi yönetmek için{" "}
            <Link to="/contacts"> Rehber Sayfasına gidin</Link>{" "}
          </p>
        </>
      ) : (
        <div>
          <p>Lütfen üye olunuz veya giriş yapınız.</p>
          <div>
            <Link to="/register">Üye Ol</Link>
            <Link to="/login">Giriş Yap</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
