import { useState, useMemo } from "react";
import { productsData, categoriesData } from "../data/bikesData";
import { Link } from "react-router-dom";

function Shop() {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialCategory = searchParams.get("category") || "Tất cả";

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [sortBy, setSortBy] = useState("default");

    const [priceFilter, setPriceFilter] = useState("all");

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const [wishlistIds, setWishlistIds] = useState(() => {
        const saved = localStorage.getItem("wishlistBikes");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        const categoryFromUrl = searchParams.get("category");
        if (categoryFromUrl) {
            setSelectedCategory(categoryFromUrl);
        }
    }, [searchParams]);

    const handleCategorySelect = (categoryName) => {
        setSelectedCategory(categoryName);
        if (categoryName === "Tất cả") {
            setSearchParams({});
        } else {
            setSearchParams({ category: categoryName });
        }
    };

    const handleHeartClick = (e, productId) => {
        e.preventDefault();
        let updatedList;
        if (wishlistIds.includes(productId)) {
            updatedList = wishlistIds.filter(id => id !== productId);
        } else {
            updatedList = [...wishlistIds, productId];
        }
        setWishlistIds(updatedList);
        localStorage.setItem("wishlistBikes", JSON.stringify(updatedList));
    };

    const filteredProducts = useMemo(() => {
        useEffect(() => {
            setCurrentPage(1);
        }, [searchTerm, selectedCategory, priceFilter, sortBy]);

        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

        const list = productsData.filter(product => {
            const matchName = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchCategory = selectedCategory === "Tất cả" || product.category === selectedCategory;
            let matchPrice = true;
            if (priceFilter === "under-10") matchPrice = product.price < 10000000;
            if (priceFilter === "10-15") matchPrice = product.price >= 10000000 && product.price <= 15000000;
            if (priceFilter === "over-15") matchPrice = product.price > 15000000;
            return matchName && matchCategory && matchPrice;
        });

        if (sortBy === "price-asc") {
            return [...list].sort((a, b) => a.price - b.price);
        }
        if (sortBy === "price-desc") {
            return [...list].sort((a, b) => b.price - a.price);
        }
        return list;
    }, [searchTerm, selectedCategory, sortBy, priceFilter]);

    return (
        <main className="container shop-page">
            <div className="section-head">
                <div>
                    <div className="eyebrow">Danh mục sản phẩm</div>
                    <h2>Cửa hàng xe đạp BikeTrend</h2>
                </div>
                <p>Hiển thị {filteredProducts.length} sản phẩm</p>
            </div>

            <div className="shop-toolbar">
                <input
                    type="text"
                    className="shop-search"
                    placeholder="Nhập tên xe hoặc phụ kiện cần tìm..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <div className="shop-sort">
                    <span>Mức giá:</span>
                    <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
                        <option value="all">Tất cả mức giá</option>
                        <option value="under-10">Dưới 10 triệu</option>
                        <option value="10-15">Từ 10 - 15 triệu</option>
                        <option value="over-15">Trên 15 triệu</option>
                    </select>
                    <span>Sắp xếp theo:</span>
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="default">Mặc định</option>
                        <option value="price-asc">Giá: Thấp đến cao</option>
                        <option value="price-desc">Giá: Cao đến thấp</option>
                    </select>
                </div>
            </div>

            <div className="shop-categories">
                {categoriesData.map(cat => (
                    <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleCategorySelect(cat.name)}
                        className={`shop-category-btn ${selectedCategory === cat.name ? "active" : ""}`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>


            {filteredProducts.length === 0 ? (
                <div className="shop-empty">
                    <p>Không tìm thấy sản phẩm phù hợp với từ khóa "{searchTerm}"</p>
                </div>
            ) : (
                <>
                    <div className="product-grid">
                        {currentProducts.map(product => (
                            <Link to={`/product/${product.id}`} key={product.id} className="product-card">
                                <div className="product-photo">
                                    {product.badge && <span className="badge">{product.badge}</span>}
                                    <button
                                        type="button"
                                        className={`heart ${wishlistIds.includes(product.id) ? "active" : ""}`}
                                        aria-label="Yêu thích"
                                        onClick={(e) => handleHeartClick(e, product.id)}
                                    >
                                        {wishlistIds.includes(product.id) ? "♥" : "♡"}
                                    </button>
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className="product-info">
                                    <h3>{product.name}</h3>
                                    <p>{product.desc}</p>
                                    <strong className="price">{product.priceFormatted}</strong>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="shop-pagination">
                            <button
                                type="button"
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(currentPage - 1)}
                            >
                                ← Trước
                            </button>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index + 1}
                                    type="button"
                                    className={currentPage === index + 1 ? "active" : ""}
                                    onClick={() => setCurrentPage(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button
                                type="button"
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage(currentPage + 1)}
                            >
                                Sau →
                            </button>
                        </div>
                    )}
                </>
            )}
        </main>
    );
}

export default Shop;