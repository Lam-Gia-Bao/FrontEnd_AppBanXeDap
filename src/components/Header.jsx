import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const handleHomeClick = () => {
        setOpenMenu(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleActionClick = (tenChucNang) => {
        alert("Tính năng " + tenChucNang + " đang được cập nhật");
    };

    return (
        <>
            <div className="topbar">
                <div className="container topbar-inner">
                    <div>
                        Miễn phí giao hàng cho đơn từ <span>2.000.000đ</span>
                    </div>
                    <div className="top-links">
                        <Link to="/journal">Cẩm nang đạp xe</Link>
                        <a href="#footer">Hệ thống cửa hàng</a>
                    </div>
                </div>
            </div>

            <header>
                <div className="container nav">
                    <Link className="logo" to="/" onClick={handleHomeClick}>
                        <span className="logo-mark">⚙</span>BikeTrend
                    </Link>

                    <nav id="main-nav" className={openMenu ? "open" : ""}>
                        <Link to="/" onClick={handleHomeClick}>Trang chủ</Link>
                        <Link to="/shop" onClick={() => setOpenMenu(false)}>Cửa hàng</Link>
                        <Link to="/wishlist" onClick={() => setOpenMenu(false)}>Yêu thích</Link>
                        <a href="#categories" onClick={() => setOpenMenu(false)}>Danh mục</a>
                        <a href="#products" onClick={() => setOpenMenu(false)}>Sản phẩm</a>
                        <a href="#story" onClick={() => setOpenMenu(false)}>Về BikeTrend</a>
                        <Link to="/journal" onClick={() => setOpenMenu(false)}>Tin tức</Link>
                    </nav>

                    <div className="actions">
                        <button
                            className="search"
                            aria-label="Tìm kiếm"
                            onClick={() => handleActionClick("tìm kiếm")}
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <circle cx="10.8" cy="10.8" r="5.8" />
                                <path d="M15 15l4.2 4.2" />
                            </svg>
                        </button>
                        <button
                            className="bag"
                            aria-label="Giỏ hàng"
                            onClick={() => handleActionClick("giỏ hàng")}
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M3.5 5h2l1.8 9.2h9.9l2-6.2H7" />
                                <circle cx="9" cy="18.5" r="1" />
                                <circle cx="16.5" cy="18.5" r="1" />
                            </svg>
                            <span className="bag-count">0</span>
                        </button>
                        <Link className="avatar-link" to="/login" aria-label="Đăng nhập">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <circle cx="12" cy="8" r="3.5" />
                                <path d="M5 20c.7-3.1 3.2-5 7-5s6.3 1.9 7 5" />
                            </svg>
                        </Link>
                        <button
                            className="menu-button"
                            aria-label="Mở menu"
                            id="menu-button"
                            onClick={() => setOpenMenu(!openMenu)}
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;