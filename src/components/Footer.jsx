function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-main">
                    <div>
                        <a className="logo" href="#home">
                            <span className="logo-mark">↗</span>BikeTrend
                        </a>
                        <p>Đạp theo cách của bạn. Cùng BikeTrend tạo nên những hành trình đáng nhớ.</p>
                    </div>

                    <div>
                        <h4>Khám phá</h4>
                        <ul>
                            <li><a href="#products">Xe đạp thể thao</a></li>
                            <li><a href="#products">Xe đạp thành phố</a></li>
                            <li><a href="#products">Xe đạp điện</a></li>
                            <li><a href="#products">Phụ kiện</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Hỗ trợ</h4>
                        <ul>
                            <li>Chính sách giao hàng</li>
                            <li>Đổi trả & bảo hành</li>
                            <li>Câu hỏi thường gặp</li>
                            <li>Liên hệ</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Nhận tin từ BikeTrend</h4>
                        <p>Đăng ký để nhận ưu đãi và cảm hứng đạp xe mới nhất.</p>
                        <a className="button" href="#footer">
                            Đăng ký ngay <span>→</span>
                        </a>
                    </div>
                </div>

                <div className="copyright">
                    <span>© 2025 BikeTrend. All rights reserved.</span>
                    <span>Made for every journey.</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;