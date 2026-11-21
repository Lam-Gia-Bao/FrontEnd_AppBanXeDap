import { Link } from "react-router-dom";

function FeedbackBar() {
    return (
        <section className="feedback-bar" aria-label="Thông tin liên hệ">
            <div className="container feedback-inner">
                <div className="feedback-copy">
                    <h2>BikeTrend luôn lắng nghe<br />bạn!</h2>
                    <p>
                        Chúng tôi luôn trân trọng và mong đợi nhận được ý kiến đóng góp
                        từ khách hàng để nâng cao trải nghiệm dịch vụ và sản phẩm tốt hơn.
                    </p>
                    <Link className="feedback-button" to="/contact">
                        Đóng góp ý kiến
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>

                <div className="feedback-contact">
                    <a className="feedback-contact-item" href="tel:19006868">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M7.2 3.2l2.5 4.3-1.8 1.8c1.1 2.4 3.1 4.4 5.5 5.5l1.8-1.8 4.3 2.5-.8 3.2c-.2.9-1.1 1.5-2 1.4C10.2 19.5 4.5 13.8 3.9 7.3c-.1-.9.5-1.8 1.4-2l1.9-.8z" />
                        </svg>
                        <span>
                            <strong>Hotline</strong>
                            <small>1900 6868</small>
                        </span>
                    </a>
                    <a className="feedback-contact-item" href="mailto:hotro@biketrend.vn">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <rect x="2.5" y="4.5" width="19" height="15" rx="1.5" />
                            <path d="M5 7l7 6 7-6" />
                        </svg>
                        <span>
                            <strong>Email</strong>
                            <small>hotro@biketrend.vn</small>
                        </span>
                    </a>
                </div>

                <div className="feedback-social">
                    <span>Hoặc chat trực tuyến</span>
                    <div className="social-links">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
                        <a href="https://zalo.me/" target="_blank" rel="noreferrer" aria-label="Zalo" className="zalo-link">Zalo</a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <rect x="3" y="3" width="18" height="18" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <rect x="2" y="5" width="20" height="14" rx="4" />
                                <path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none" />
                            </svg>
                        </a>
                        <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M16.5 3c.2 2.4 1.6 4 4 4.2v3c-1.4.1-2.7-.3-4-1v6.3c0 3.7-4 6-7.2 4.3-2.6-1.4-3.2-5.1-1.2-7.3 1.1-1.2 2.6-1.7 4.1-1.4v3.2c-.5-.2-1-.1-1.4.2-.7.5-.8 1.5-.3 2.2.5.7 1.5.9 2.2.4.5-.3.8-.9.8-1.5V3h3z" fill="currentColor" stroke="none" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeedbackBar;
