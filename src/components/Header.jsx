import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [openMenu, setOpenMenu] = useState(false);

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
                        <a href="#journal">Cẩm nang đạp xe</a>
                        <a href="#footer">Hệ thống cửa hàng</a>
                    </div>
                </div>
            </div>

            <header>
                <div className="container nav">
                    <Link className="logo" to="/">
                        <span className="logo-mark">⚙</span>BikeTrend
                    </Link>

                    <nav id="main-nav" className={openMenu ? "open" : ""}>
                        <Link to="/" onClick={() => setOpenMenu(false)}>Trang chủ</Link>
                        <Link to="/shop" onClick={() => setOpenMenu(false)}>Cửa hàng</Link>
                        <a href="#categories" onClick={() => setOpenMenu(false)}>Danh mục</a>
                        <a href="#products" onClick={() => setOpenMenu(false)}>Sản phẩm</a>
                        <a href="#story" onClick={() => setOpenMenu(false)}>Về BikeTrend</a>
                        <a href="#journal" onClick={() => setOpenMenu(false)}>Tin tức</a>
                    </nav>

                    <div className="actions">
                        <button
                            className="search"
                            aria-label="Tìm kiếm"
                            onClick={() => handleActionClick("tìm kiếm")}
                        >
                            ⌕
                        </button>
                        <button
                            className="bag"
                            aria-label="Giỏ hàng"
                            onClick={() => handleActionClick("giỏ hàng")}
                        >
                            🛒<span className="bag-count">0</span>
                        </button>
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