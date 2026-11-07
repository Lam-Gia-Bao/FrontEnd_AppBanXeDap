import { categoriesData, productsData } from "../data/bikesData";

function Home() {
    const handleToastClick = (e) => {
        e.preventDefault();
        alert("Tính năng đang cập nhật");
    };

    return (
        <main>
            <section className="section" id="categories">
                <div className="container">
                    <div className="section-head">
                        <div>
                            <div className="eyebrow">Tìm chiếc xe của bạn</div>
                            <h2>Khám phá các dòng xe</h2>
                        </div>
                        <a className="text-link" href="#products">Xem tất cả sản phẩm</a>
                    </div>
                    <div className="category-grid">
                        {categoriesData.map(cat => (
                            <a key={cat.id} className="category" href="#products">
                                <img src={cat.image} alt={cat.name} />
                                <div>
                                    <h3>{cat.name}</h3>
                                    <small>{cat.count}</small>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section products" id="products">
                <div className="container">
                    <div className="section-head">
                        <div>
                            <div className="eyebrow">Được yêu thích nhất</div>
                            <h2>Sản phẩm nổi bật</h2>
                        </div>
                        <a className="text-link" href="#products" onClick={handleToastClick}>Xem cửa hàng</a>
                    </div>
                    <div className="product-grid">
                        {productsData.map(product => (
                            <article key={product.id} className="product-card">
                                <div className="product-photo">
                                    {product.badge && <span className="badge">{product.badge}</span>}
                                    <button className="heart" aria-label="Thêm vào yêu thích" onClick={handleToastClick}>♡</button>
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className="product-info">
                                    <h3>{product.name}</h3>
                                    <p>{product.desc}</p>
                                    <strong className="price">{product.priceFormatted}</strong>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section story" id="story">
                <div className="container story-grid">
                    <div className="story-photo">
                        <img src="https://images.unsplash.com/photo-1529422643029-d4585747aaf2?auto=format&fit=crop&w=900&q=85" alt="Người đạp xe" />
                    </div>
                    <div className="story-copy">
                        <div className="eyebrow">Câu chuyện BikeTrend</div>
                        <h2>Sống xanh hơn,<br />đi xa hơn.</h2>
                        <p>BikeTrend tin rằng mỗi hành trình đều đáng giá. Chúng tôi tạo ra những chiếc xe bền bỉ, đẹp mắt và thân thiện để việc di chuyển mỗi ngày trở thành niềm vui</p>
                        <div className="stats">
                            <div><strong>10+</strong><span>Năm kinh nghiệm</span></div>
                            <div><strong>20K</strong><span>Khách hàng tin chọn</span></div>
                            <div><strong>24/7</strong><span>Luôn đồng hành</span></div>
                        </div>
                        <a className="button" href="#footer">Tìm hiểu thêm <span>→</span></a>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;