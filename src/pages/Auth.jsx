import { Link, useLocation, useNavigate } from "react-router-dom";

function Auth() {
    const location = useLocation();
    const navigate = useNavigate();
    const isRegister = location.pathname === "/register";

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(isRegister ? "Đăng ký thành công" : "Đăng nhập thành công");
    };

    const handleGoogleLogin = () => {
        alert("Đăng nhập bằng Google đang được cập nhật");
    };

    return (
        <main className="auth-page">
            <section className="auth-card" aria-labelledby="auth-title">
                <div className="eyebrow">Chào mừng đến BikeTrend</div>
                <h1 id="auth-title">{isRegister ? "Tạo tài khoản" : "Đăng nhập"}</h1>
                <p className="auth-description">
                    {isRegister
                        ? "Đăng ký để lưu sản phẩm yêu thích và theo dõi đơn hàng."
                        : "Đăng nhập để tiếp tục trải nghiệm mua sắm của bạn."}
                </p>

                <button className="google-button" type="button" onClick={handleGoogleLogin}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="#4285F4" d="M21.35 12.22c0-.7-.06-1.37-.18-2.02H12v3.82h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.19Z" />
                        <path fill="#34A853" d="M12 21.7c2.63 0 4.84-.87 6.46-2.36l-3.14-2.45c-.87.58-1.98.92-3.32.92-2.55 0-4.71-1.72-5.49-4.03H3.27v2.53A9.76 9.76 0 0 0 12 21.7Z" />
                        <path fill="#FBBC05" d="M6.51 13.78A5.87 5.87 0 0 1 6.2 12c0-.62.11-1.22.31-1.78V7.69H3.27A9.77 9.77 0 0 0 2.23 12c0 1.57.38 3.06 1.04 4.31l3.24-2.53Z" />
                        <path fill="#EA4335" d="M12 6.19c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.84 3.27 14.63 2.3 12 2.3a9.76 9.76 0 0 0-8.73 5.39l3.24 2.53C7.29 7.91 9.45 6.19 12 6.19Z" />
                    </svg>
                    {isRegister ? "Đăng ký bằng Google" : "Đăng nhập bằng Google"}
                </button>

                <div className="auth-divider"><span>Hoặc</span></div>

                <form className="auth-form" onSubmit={handleSubmit}>
                    {isRegister && (
                        <label>
                            Họ và tên
                            <input type="text" name="name" placeholder="Nhập họ và tên" required />
                        </label>
                    )}
                    <label>
                        Email
                        <input type="email" name="email" placeholder="you@example.com" required />
                    </label>
                    <label>
                        Mật khẩu
                        <input type="password" name="password" placeholder="Nhập mật khẩu" minLength="6" required />
                    </label>
                    {isRegister && (
                        <label>
                            Xác nhận mật khẩu
                            <input type="password" name="confirmPassword" placeholder="Nhập lại mật khẩu" minLength="6" required />
                        </label>
                    )}
                    <button className="auth-submit" type="submit">
                        {isRegister ? "Đăng ký" : "Đăng nhập"}
                    </button>
                </form>

                <p className="auth-switch">
                    {isRegister ? "Đã có tài khoản?" : "Chưa có tài khoản?"}{" "}
                    <Link to={isRegister ? "/login" : "/register"}>
                        {isRegister ? "Đăng nhập" : "Đăng ký ngay"}
                    </Link>
                </p>
                <button className="auth-back" type="button" onClick={() => navigate("/")}>
                    ← Về trang chủ
                </button>
            </section>
        </main>
    );
}

export default Auth;
