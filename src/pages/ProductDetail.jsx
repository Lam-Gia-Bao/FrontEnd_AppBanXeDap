import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productsData } from "../data/bikesData";

const productGallery = [
    "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=1200&q=85",
];

function ProductDetail() {
    const { id } = useParams();
    const product = productsData.find((item) => item.id === Number(id)) || productsData[0];
    const [activeImage, setActiveImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");

    const addToCart = () => {
        alert(`Đã thêm ${quantity} sản phẩm vào giỏ hàng`);
    };

    const buyNow = () => {
        alert(`Đang chuyển đến thanh toán với ${quantity} sản phẩm`);
    };

    return (
        <main className="product-detail-page">
            <div className="container">
                <div className="breadcrumb">
                    <Link to="/">Trang chủ</Link><span>/</span>
                    <Link to="/shop">Cửa hàng</Link><span>/</span>
                    <strong>{product.name}</strong>
                </div>

                <section className="product-detail">
                    <div className="product-gallery">
                        <div className="product-main-image">
                            <span className="detail-badge">{product.badge || "NỔI BẬT"}</span>
                            <img src={productGallery[activeImage]} alt={product.name} />
                        </div>
                        <div className="product-thumbnails">
                            {productGallery.map((image, index) => (
                                <button
                                    key={image}
                                    className={activeImage === index ? "active" : ""}
                                    type="button"
                                    onClick={() => setActiveImage(index)}
                                    aria-label={`Xem ảnh ${index + 1}`}
                                >
                                    <img src={image} alt="" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="product-detail-info">
                        <p className="detail-category">{product.category}</p>
                        <h1>{product.name}</h1>
                        <div className="detail-rating"><span>★★★★★</span> <u>12 đánh giá</u></div>
                        <div className="detail-price">{product.priceFormatted}</div>
                        <p className="detail-intro">
                            Thiết kế thanh lịch, vận hành êm ái và bền bỉ cho mọi hành trình trong thành phố.
                            Sẵn sàng đồng hành cùng bạn mỗi ngày.
                        </p>

                        <div className="detail-option">
                            <div className="option-heading"><strong>Màu sắc</strong><span>Đen nhám</span></div>
                            <div className="color-options">
                                <button className="color-swatch selected" type="button" aria-label="Đen nhám" />
                                <button className="color-swatch blue" type="button" aria-label="Xanh navy" />
                                <button className="color-swatch white" type="button" aria-label="Trắng" />
                            </div>
                        </div>

                        <div className="detail-actions">
                            <div className="quantity-control">
                                <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                                <span>{quantity}</span>
                                <button type="button" onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                            <button className="button detail-cart-button" type="button" onClick={addToCart}>Thêm vào giỏ hàng</button>
                            <button className="button detail-buy-button" type="button" onClick={buyNow}>Mua ngay</button>
                            <button className="detail-heart" type="button" aria-label="Thêm vào yêu thích">♡</button>
                        </div>
                        <div className="detail-benefits">
                            <span>✓ Miễn phí giao hàng toàn quốc</span>
                            <span>✓ Bảo hành chính hãng 12 tháng</span>
                            <span>✓ Đổi trả trong 7 ngày</span>
                        </div>
                    </div>
                </section>

                <section className="detail-lower">
                    <div className="detail-tabs">
                        <button className={activeTab === "description" ? "active" : ""} type="button" onClick={() => setActiveTab("description")}>Mô tả sản phẩm</button>
                        <button className={activeTab === "specification" ? "active" : ""} type="button" onClick={() => setActiveTab("specification")}>Thông số kỹ thuật</button>
                        <button className={activeTab === "reviews" ? "active" : ""} type="button" onClick={() => setActiveTab("reviews")}>Đánh giá (12)</button>
                    </div>
                    {activeTab === "reviews" ? (
                        <div className="detail-reviews">
                            <strong>4.9/5</strong><span className="detail-stars">★★★★★</span><p>Dựa trên 12 đánh giá từ khách hàng.</p>
                        </div>
                    ) : activeTab === "specification" ? (
                        <div className="specification-grid">
                            <span>Khung xe</span><strong>Hợp kim nhôm</strong>
                            <span>Bộ truyền động</span><strong>Shimano 7 tốc độ</strong>
                            <span>Phanh</span><strong>Phanh đĩa cơ</strong>
                            <span>Kích thước bánh</span><strong>700C</strong>
                        </div>
                    ) : (
                        <div className="detail-description">
                            <h2>{product.name} - lựa chọn cho mọi hành trình</h2>
                            <p>{product.desc}. Mẫu xe được hoàn thiện từ những vật liệu chất lượng cao, mang lại cảm giác thoải mái và khả năng kiểm soát tuyệt vời trên từng cung đường.</p>
                            <p>Với kiểu dáng hiện đại cùng bộ truyền động mượt mà, đây là người bạn đồng hành lý tưởng cho việc đi làm, đi học hoặc khám phá thành phố.</p>
                        </div>
                    )}
                </section>

                <section className="related-products">
                    <div className="section-head">
                        <div><div className="eyebrow">Có thể bạn sẽ thích</div><h2>Sản phẩm liên quan</h2></div>
                        <Link className="text-link" to="/shop">Xem tất cả</Link>
                    </div>
                    <div className="product-grid">
                        {productsData.filter((item) => item.id !== product.id).slice(0, 3).map((item) => (
                            <Link to={`/product/${item.id}`} className="product-card" key={item.id}>
                                <div className="product-photo">
                                    {item.badge && <span className="badge">{item.badge}</span>}
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="product-info"><h3>{item.name}</h3><p>{item.desc}</p><strong className="price">{item.priceFormatted}</strong></div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}

export default ProductDetail;
