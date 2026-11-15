import { useState } from "react";
import { Link } from "react-router-dom";
import { productsData } from "../data/bikesData";

function Wishlist() {
    const [wishlistIds, setWishlistIds] = useState(() => {
        const saved = localStorage.getItem("wishlistBikes");
        return saved ? JSON.parse(saved) : [];
    });

    const favoriteProducts = productsData.filter(product => wishlistIds.includes(product.id));

    const removeFromWishlist = (e, productId) => {
        e.preventDefault();
        const updatedList = wishlistIds.filter(id => id !== productId);
        setWishlistIds(updatedList);
        localStorage.setItem("wishlistBikes", JSON.stringify(updatedList));
    };

    const clearAllWishlist = () => {
        setWishlistIds([]);
        localStorage.removeItem("wishlistBikes");
    };

    return (
        <main className="container shop-page">
            <div className="section-head">
                <div>
                    <div className="eyebrow">Bộ sưu tập cá nhân</div>
                    <h2>Sản phẩm yêu thích ({favoriteProducts.length})</h2>
                </div>
                {favoriteProducts.length > 0 && (
                    <button
                        type="button"
                        className="wishlist-clear-btn"
                        onClick={clearAllWishlist}
                    >
                        Xóa tất cả
                    </button>
                )}
            </div>

            {favoriteProducts.length === 0 ? (
                <div className="shop-empty">
                    <p>Bạn chưa lưu mẫu xe nào vào danh sách yêu thích.</p>
                    <Link to="/shop" className="button" style={{ marginTop: "18px" }}>
                        Khám phá cửa hàng <span>→</span>
                    </Link>
                </div>
            ) : (
                <div className="product-grid">
                    {favoriteProducts.map(product => (
                        <Link to={`/product/${product.id}`} key={product.id} className="product-card">
                            <div className="product-photo">
                                {product.badge && <span className="badge">{product.badge}</span>}
                                <button
                                    type="button"
                                    className="heart active"
                                    aria-label="Bỏ yêu thích"
                                    onClick={(e) => removeFromWishlist(e, product.id)}
                                >
                                    ♥
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
            )}
        </main>
    );
}

export default Wishlist;