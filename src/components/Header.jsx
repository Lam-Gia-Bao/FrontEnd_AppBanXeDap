import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { productsData } from "../data/bikesData";

function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const searchInputRef = useRef(null);
    const searchResults = searchTerm.trim()
        ? productsData.filter((product) => {
            const keyword = searchTerm.trim().toLowerCase();
            return [
                product.name,
                product.category,
                product.desc,
            ].some((text) => text.toLowerCase().includes(keyword));
        }).slice(0, 6)
        : [];

    useEffect(() => {
        window.scrollTo(0, 0);
        setOpenSearch(false);
        setOpenMenu(false);
    }, [pathname]);

    useEffect(() => {
        if (openSearch) {
            searchInputRef.current?.focus();
        }
    }, [openSearch]);

    const handleHomeClick = () => {
        setOpenMenu(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleActionClick = (tenChucNang) => {
        alert("Tính năng " + tenChucNang + " đang được cập nhật");
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const keyword = searchTerm.trim();
        setOpenSearch(false);
        navigate(keyword ? `/shop?q=${encodeURIComponent(keyword)}` : "/shop");
    };

    const handleSearchKeyDown = (event) => {
        if (event.key === "Escape") {
            setOpenSearch(false);
        }
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

            <header className={openSearch ? "header-search-open" : ""}>
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
                            onClick={() => setOpenSearch(true)}
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
                <div className={`header-search-panel ${openSearch ? "open" : ""}`}>
                    <div className="container header-search-inner" onKeyDown={handleSearchKeyDown}>
                        <Link className="logo" to="/" onClick={handleHomeClick}>
                            <span className="logo-mark">⚙</span>BikeTrend
                        </Link>
                        <form className="header-search-form" onSubmit={handleSearchSubmit}>
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <circle cx="10.8" cy="10.8" r="5.8" />
                                <path d="M15 15l4.2 4.2" />
                            </svg>
                            <input
                                ref={searchInputRef}
                                type="search"
                                value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)}
                                placeholder="Tìm kiếm xe đạp, phụ kiện..."
                                aria-label="Từ khóa tìm kiếm"
                            />
                        </form>
                        {searchTerm.trim() && (
                            <div className="header-search-results" role="listbox">
                                <div className="header-search-results-title">Sản phẩm</div>
                                {searchResults.length > 0 ? (
                                    searchResults.map((product) => (
                                        <Link
                                            className="header-search-result"
                                            to={`/product/${product.id}`}
                                            key={product.id}
                                            onClick={() => setOpenSearch(false)}
                                        >
                                            <img src={product.image} alt={product.name} />
                                            <span>
                                                <strong>{product.name}</strong>
                                                <small>{product.category} · {product.priceFormatted}</small>
                                            </span>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="header-search-empty">
                                        Không tìm thấy sản phẩm phù hợp
                                    </p>
                                )}
                                <Link
                                    className="header-search-all"
                                    to={`/shop?q=${encodeURIComponent(searchTerm.trim())}`}
                                    onClick={() => setOpenSearch(false)}
                                >
                                    Xem tất cả kết quả <span>→</span>
                                </Link>
                            </div>
                        )}
                        <button
                            type="button"
                            className="header-search-close"
                            aria-label="Đóng tìm kiếm"
                            onClick={() => setOpenSearch(false)}
                        >
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;