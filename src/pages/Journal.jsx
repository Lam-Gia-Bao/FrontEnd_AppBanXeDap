import { useState } from "react";
import { Link } from "react-router-dom";
import { journalData } from "../data/bikesData";

const topics = ["Tất cả", "Lifestyle", "Tips", "Gear"];

function Journal() {
    const [selectedTopic, setSelectedTopic] = useState("Tất cả");
    const [heightInput, setHeightInput] = useState("");
    const [sizeResult, setSizeResult] = useState(null);

    const filteredArticles = journalData.filter(article => {
        return selectedTopic === "Tất cả" || article.category === selectedTopic;
    });

    const handleCheckSize = (e) => {
        e.preventDefault();
        const h = Number(heightInput);
        if (!h || h < 130 || h > 210) {
            setSizeResult("Vui lòng nhập chiều cao hợp lệ từ 130cm đến 210cm.");
            return;
        }
        if (h < 160) {
            setSizeResult("Chiều cao " + h + "cm: Phù hợp khung Size S (15 - 16 inch), bánh 26 inch hoặc 700C.");
        } else if (h <= 175) {
            setSizeResult("Chiều cao " + h + "cm: Phù hợp khung Size M (17 - 18 inch), bánh 27.5 inch hoặc 700C.");
        } else {
            setSizeResult("Chiều cao " + h + "cm: Phù hợp khung Size L (19 - 20 inch), bánh 29 inch hoặc 700C.");
        }
    };

    return (
        <main className="container shop-page">
            <div className="section-head">
                <div>
                    <div className="eyebrow">BikeTrend Journal</div>
                    <h2>Cẩm nang & Cảm hứng đạp xe</h2>
                </div>
                <p>Chia sẻ kinh nghiệm chọn xe, bảo dưỡng và những hành trình thú vị</p>
            </div>

            <div className="shop-categories">
                {topics.map(topic => (
                    <button
                        key={topic}
                        type="button"
                        onClick={() => setSelectedTopic(topic)}
                        className={`shop-category-btn ${selectedTopic === topic ? "active" : ""}`}
                    >
                        {topic}
                    </button>
                ))}
            </div>

            <div className="journal-page-grid">
                {filteredArticles.map(article => (
                    <article key={article.id} className="journal-page-card">
                        <Link to={`/journal/${article.id}`} className="journal-page-thumb">
                            <img src={article.image} alt={article.title} />
                        </Link>
                        <div className="journal-page-body">
                            <small>{article.category} · {article.date} · {article.readTime}</small>
                            <h3>
                                <Link to={`/journal/${article.id}`}>{article.title}</Link>
                            </h3>
                            <p>{article.excerpt}</p>
                            <Link to={`/journal/${article.id}`} className="text-link">
                                Đọc bài viết
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

            <section className="size-guide-box">
                <div>
                    <div className="eyebrow">Công cụ hỗ trợ</div>
                    <h3>Tra cứu nhanh kích thước khung xe theo chiều cao</h3>
                    <p>Nhập chiều cao của bạn (cm) để nhận gợi ý size khung xe vừa vặn nhất.</p>
                </div>
                <form className="size-guide-form" onSubmit={handleCheckSize}>
                    <input
                        type="number"
                        placeholder="Ví dụ: 168"
                        value={heightInput}
                        onChange={(e) => setHeightInput(e.target.value)}
                    />
                    <button type="submit" className="button">Kiểm tra size</button>
                </form>
                {sizeResult && <div className="size-guide-result">{sizeResult}</div>}
            </section>
        </main>
    );
}

export default Journal;