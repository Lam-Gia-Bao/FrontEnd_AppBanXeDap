import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
    ["Làm thế nào để chọn size khung xe phù hợp?", "Bạn có thể dùng công cụ tra cứu cỡ khung trong trang Cẩm nang hoặc nhập chiều cao cho nhân viên tư vấn. Cơ cấu khung còn phụ thuộc kiểu xe, dáng người và mục đích sử dụng."],
    ["BikeTrend có giao xe lắp ráp sẵn không?", "Có. Xe được lắp ráp và kiểm tra cơ bản trước khi giao. Sau khi nhận, bạn vẫn nên kiểm tra phanh, ghế, bàn đạp và áp suất lốp trước chuyến đi đầu tiên."],
    ["Tôi có thể đặt xe online rồi nhận tại cửa hàng không?", "Có. Khi đặt hàng, vui lòng ghi yêu cầu nhận tại cửa hàng trong ghi chú. Nhân viên sẽ liên hệ xác nhận thời gian chuẩn bị."],
    ["Thời gian giao hàng mất bao lâu?", "Đơn nội thành thường giao trong 1–2 ngày làm việc. Các tỉnh thành khác thường từ 3–7 ngày làm việc tùy địa chỉ và đơn vị vận chuyển."],
    ["Sản phẩm lỗi có được đổi trả không?", "Sản phẩm lỗi do nhà sản xuất trong thời gian đổi trả sẽ được kiểm tra và hỗ trợ đổi, trả theo chính sách. Vui lòng giữ hóa đơn, tem và phụ kiện đi kèm."],
    ["Xe đạp điện có chính sách bảo hành riêng không?", "Có. Pin, motor và bộ điều khiển thường có điều khoản bảo hành riêng theo hãng. Nhân viên BikeTrend sẽ cung cấp thông tin cụ thể cho từng mẫu xe."],
];

function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <main className="support-page">
            <div className="container faq-container">
                <header className="support-header">
                    <div className="eyebrow">Trung tâm hỗ trợ</div>
                    <h1>Câu hỏi thường gặp</h1>
                    <p>Tìm nhanh câu trả lời cho những thắc mắc phổ biến khi mua và sử dụng xe đạp.</p>
                </header>

                <section className="faq-list" aria-label="Danh sách câu hỏi thường gặp">
                    {faqs.map(([question, answer], index) => {
                        const isOpen = openIndex === index;
                        return (
                            <article className={`faq-item ${isOpen ? "open" : ""}`} key={question}>
                                <button
                                    type="button"
                                    aria-expanded={isOpen}
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                >
                                    <span>{question}</span>
                                    <span className="faq-icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                                </button>
                                {isOpen && <div className="faq-answer"><p>{answer}</p></div>}
                            </article>
                        );
                    })}
                </section>

                <aside className="faq-contact">
                    <div>
                        <div className="eyebrow">Vẫn cần hỗ trợ?</div>
                        <h2>Đội ngũ BikeTrend luôn sẵn sàng</h2>
                    </div>
                    <Link className="button" to="/contact">Gửi câu hỏi <span>→</span></Link>
                </aside>
            </div>
        </main>
    );
}

export default FAQ;
