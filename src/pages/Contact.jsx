import { useState } from "react";

function Contact() {
    const [sent, setSent] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSent(true);
        event.currentTarget.reset();
    };

    return (
        <main className="support-page contact-page">
            <div className="container">
                <header className="support-header">
                    <div className="eyebrow">Kết nối với BikeTrend</div>
                    <h1>Liên hệ</h1>
                    <p>Gửi yêu cầu tư vấn, đặt xe hoặc hỗ trợ sau mua hàng. Chúng tôi sẽ phản hồi sớm nhất.</p>
                </header>

                <div className="contact-layout">
                    <section className="contact-info" aria-label="Thông tin liên hệ">
                        <article>
                            <span className="contact-icon" aria-hidden="true">⌖</span>
                            <div><h3>Địa chỉ cửa hàng</h3><p>123 Con đường Xanh, Quận 7, TP. Hồ Chí Minh</p></div>
                        </article>
                        <article>
                            <span className="contact-icon" aria-hidden="true">☎</span>
                            <div><h3>Hotline</h3><p>1900 6868<br />Hỗ trợ 8:00 – 20:00 hàng ngày</p></div>
                        </article>
                        <article>
                            <span className="contact-icon" aria-hidden="true">@</span>
                            <div><h3>Email</h3><p>hotro@biketrend.vn</p></div>
                        </article>
                    </section>

                    <section className="contact-form-card">
                        <h2>Gửi thông tin cho chúng tôi</h2>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <label>Họ và tên<input type="text" name="name" placeholder="Nhập họ và tên" required /></label>
                            <label>Email hoặc số điện thoại<input type="text" name="contact" placeholder="Bạn có thể nhập email hoặc hotline" required /></label>
                            <label>Chủ đề
                                <select name="topic" defaultValue="Tư vấn chọn xe">
                                    <option>Tư vấn chọn xe</option>
                                    <option>Theo dõi đơn hàng</option>
                                    <option>Đổi trả & bảo hành</option>
                                    <option>Khác</option>
                                </select>
                            </label>
                            <label>Nội dung<textarea name="message" rows="5" placeholder="Nhập nội dung cần hỗ trợ" required /></label>
                            <button className="button" type="submit">Gửi liên hệ <span>→</span></button>
                            {sent && <p className="contact-success" role="status">Cảm ơn bạn! Yêu cầu đã được ghi nhận.</p>}
                        </form>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default Contact;
