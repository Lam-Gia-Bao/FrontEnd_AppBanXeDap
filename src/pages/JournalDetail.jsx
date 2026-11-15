import { Link, useParams } from "react-router-dom";
import { journalData } from "../data/bikesData";

function JournalDetail() {
    const { id } = useParams();
    const article = journalData.find(item => item.id === Number(id)) || journalData[0];
    const relatedArticles = journalData.filter(item => item.id !== article.id).slice(0, 3);

    return (
        <main className="container shop-page">
            <div className="breadcrumb">
                <Link to="/">Trang chủ</Link>
                <span>/</span>
                <Link to="/journal">Cẩm nang</Link>
                <span>/</span>
                <strong>{article.title}</strong>
            </div>

            <article className="article-detail">
                <div className="article-header">
                    <span className="eyebrow">{article.category} · {article.date} · {article.readTime}</span>
                    <h1>{article.title}</h1>
                    <p className="article-lead">{article.excerpt}</p>
                </div>

                <div className="article-banner">
                    <img src={article.image} alt={article.title} />
                </div>

                <div className="article-content">
                    {article.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                <div className="article-footer-box">
                    <span>Bạn đang tìm mẫu xe phù hợp cho hành trình sắp tới?</span>
                    <Link to="/shop" className="button">Xem các dòng xe BikeTrend →</Link>
                </div>
            </article>

            <section className="related-products">
                <div className="section-head">
                    <div>
                        <div className="eyebrow">Khám phá thêm</div>
                        <h2>Bài viết khác</h2>
                    </div>
                    <Link to="/journal" className="text-link">Xem tất cả cẩm nang</Link>
                </div>
                <div className="journal-page-grid">
                    {relatedArticles.map(item => (
                        <article key={item.id} className="journal-page-card">
                            <Link to={`/journal/${item.id}`} className="journal-page-thumb">
                                <img src={item.image} alt={item.title} />
                            </Link>
                            <div className="journal-page-body">
                                <small>{item.category} · {item.date}</small>
                                <h3>
                                    <Link to={`/journal/${item.id}`}>{item.title}</Link>
                                </h3>
                                <Link to={`/journal/${item.id}`} className="text-link">
                                    Đọc thêm
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default JournalDetail;