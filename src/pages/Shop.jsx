import { useState, useMemo } from "react";
import { productsData, categoriesData } from "../data/bikesData";

function Shop() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Tất cả");

    const filteredProducts = useMemo(() => {
        return productsData.filter(product => {
            const matchName = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchCategory = selectedCategory === "Tất cả" || product.category === selectedCategory;
            return matchName && matchCategory;
        });
    }, [searchTerm, selectedCategory]);

    return (
        <div className="container" style={{ padding: "60px 0" }}>
            <div className="section-head">
                <div>
                    <div className="eyebrow">Danh mục sản phẩm</div>
                    <h2>Cửa hàng xe đạp BikeTrend</h2>
                </div>
            </div>

            <div style={{ display: "flex", gap: "20px", marginBottom: "35px", flexWrap: "wrap", justifyContent: "space-between" }}>
                <input
                    type="text"
                    placeholder="Nhập tên xe cần tìm..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ padding: "12px 18px", width: "300px", border: "1px solid var(--line)", borderRadius: "4px", fontSize: "14px" }}
                />

                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    {categoriesData.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.name)}
                            style={{
                                padding: "8px 16px",
                                border: "1px solid var(--line)",
                                background: selectedCategory === cat.name ? "var(--green)" : "var(--white)",
                                color: selectedCategory === cat.name ? "var(--white)" : "var(--ink)",
                                cursor: "pointer",
                                fontWeight: "600",
                                fontSize: "13px"
                            }}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            </div>

            {filteredProducts.length === 0 ? (
                <p style={{ textAlign: "center", padding: "40px", color: "var(--muted)" }}>Không tìm thấy sản phẩm phù hợp!</p>
            ) : (
                <div className="product-grid">
                    {filteredProducts.map(product => (
                        <article key={product.id} className="product-card">
                            <div className="product-photo">
                                {product.badge && <span className="badge">{product.badge}</span>}
                                <button className="heart" aria-label="Yêu thích">♡</button>
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
            )}
        </div>
    );
}

export default Shop;