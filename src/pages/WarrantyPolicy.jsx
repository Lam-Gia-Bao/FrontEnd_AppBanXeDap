import { Link } from "react-router-dom";

function WarrantyPolicy() {
    return (
        <main className="support-page">
            <div className="container">
                <header className="support-header">
                    <div className="eyebrow">Bảo vệ quyền lợi khách hàng</div>
                    <h1>Đổi trả & bảo hành</h1>
                    <p>Hỗ trợ đổi trả minh bạch và chính sách bảo hành rõ ràng trên từng sản phẩm.</p>
                </header>

                <section className="policy-grid">
                    <article className="policy-card">
                        <span className="policy-number">01</span>
                        <h2>Đổi trả trong 7 ngày</h2>
                        <p>Sản phẩm chưa sử dụng, còn nguyên tem mác, phụ kiện và hóa đơn có thể được đổi trả nếu chưa đúng sở thích hoặc cỡ xe.</p>
                        <ul>
                            <li>Sản phẩm nguyên trạng, không trầy xước</li>
                            <li>Xe chưa lắp ráp hoặc chưa chạy</li>
                            <li>Đầy đủ phụ kiện và phiếu bảo hành</li>
                        </ul>
                    </article>
                    <article className="policy-card">
                        <span className="policy-number">02</span>
                        <h2>Bảo hành chính hãng</h2>
                        <p>Thời gian bảo hành theo từng linh kiện và nhà sản xuất. BikeTrend hỗ trợ tiếp nhận, kiểm tra và chuyển sản phẩm bảo hành.</p>
                        <ul>
                            <li>Khung xe: theo chính sách nhà sản xuất</li>
                            <li>Phụ tùng: theo hồ sơ bảo hành đi kèm</li>
                            <li>Miễn phí kiểm tra kỹ thuật tại cửa hàng</li>
                        </ul>
                    </article>
                    <article className="policy-card">
                        <span className="policy-number">03</span>
                        <h2>Không áp dụng đổi trả</h2>
                        <p>Một số trường hợp không thuộc phạm vi đổi trả hoặc bảo hành cần lưu ý trước khi mua.</p>
                        <ul>
                            <li>Hư hỏng do va chạm, tai nạn hoặc rơi vỡ</li>
                            <li>Sử dụng sai hướng dẫn hoặc tự tháo lắp</li>
                            <li>Hao mòn tự nhiên và phụ kiện tiêu hao</li>
                        </ul>
                    </article>
                </section>

                <section className="warranty-process">
                    <div>
                        <div className="eyebrow">Quy trình tiếp nhận</div>
                        <h2>4 bước xử lý nhanh chóng</h2>
                    </div>
                    <ol>
                        <li><strong>Gửi thông tin</strong><span>Tên, mã đơn hàng và hình ảnh sản phẩm.</span></li>
                        <li><strong>Kiểm tra</strong><span>Đội ngũ xác nhận tình trạng và phạm vi hỗ trợ.</span></li>
                        <li><strong>Xử lý</strong><span>Sửa chữa, thay thế hoặc đổi sản phẩm phù hợp.</span></li>
                        <li><strong>Hoàn tất</strong><span>Thông báo kết quả và lịch nhận hàng.</span></li>
                    </ol>
                </section>

                <div className="support-action">
                    <p>Xe của bạn cần được kiểm tra?</p>
                    <Link className="button" to="/contact">Gửi yêu cầu hỗ trợ <span>→</span></Link>
                </div>
            </div>
        </main>
    );
}

export default WarrantyPolicy;
