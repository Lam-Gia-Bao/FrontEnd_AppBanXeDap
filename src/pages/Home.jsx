import { useEffect, useState } from "react";
import { categoriesData, productsData } from "../data/bikesData";
import banner1 from "../assets/banners/banner-1.png";
import banner2 from "../assets/banners/banner-2.png";
import banner3 from "../assets/banners/banner-3.png";
import banner4 from "../assets/banners/banner-4.png";
import banner5 from "../assets/banners/banner-5.png";
import banner6 from "../assets/banners/banner-6.png";
import banner7 from "../assets/banners/banner-7.png";

const bannerImages = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7,
];

function Home() {
    const [activeBanner, setActiveBanner] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveBanner((currentBanner) => (currentBanner + 1) % bannerImages.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const showPreviousBanner = () => {
        setActiveBanner((currentBanner) => (
            currentBanner === 0 ? bannerImages.length - 1 : currentBanner - 1
        ));
    };

    const showNextBanner = () => {
        setActiveBanner((currentBanner) => (currentBanner + 1) % bannerImages.length);
    };

    const handleToastClick = (e) => {
        e.preventDefault();
        alert("Tính năng đang cập nhật");
    };

    return (
        <main>
            <section className="banner-slider" aria-label="Banner giới thiệu">
                <div
                    className="banner-track"
                    style={{ transform: `translateX(-${activeBanner * 100}%)` }}
                >
                    {bannerImages.map((banner, index) => (
                        <img
                            key={banner}
                            className="banner-slide"
                            src={banner}
                            alt={`Banner BikeTrend ${index + 1}`}
                        />
                    ))}
                </div>
                <button
                    className="banner-control banner-control-previous"
                    type="button"
                    aria-label="Banner trước"
                    onClick={showPreviousBanner}
                >
                    ‹
                </button>
                <button
                    className="banner-control banner-control-next"
                    type="button"
                    aria-label="Banner tiếp theo"
                    onClick={showNextBanner}
                >
                    ›
                </button>
                <div className="banner-indicators">
                    {bannerImages.map((banner, index) => (
                        <button
                            key={banner}
                            className={`banner-indicator ${activeBanner === index ? "active" : ""}`}
                            type="button"
                            aria-label={`Chuyển đến banner ${index + 1}`}
                            aria-current={activeBanner === index ? "true" : undefined}
                            onClick={() => setActiveBanner(index)}
                        />
                    ))}
                </div>
            </section>

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