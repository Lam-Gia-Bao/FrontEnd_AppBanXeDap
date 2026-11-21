import { Link } from "react-router-dom";

const deliverySteps = [
    ["01", "Xác nhận đơn", "Chúng tôi kiểm tra sản phẩm và liên hệ xác nhận đơn hàng trong giờ hành chính."],
    ["02", "Đóng gói", "Xe và phụ kiện được kiểm tra, bảo vệ chắc chắn trước khi bàn giao đơn vị vận chuyển."],
    ["03", "Giao hàng", "Đơn vị vận chuyển cập nhật thời gian giao theo địa chỉ và khu vực của bạn."],
];

function ShippingPolicy() {
    return (
        <main className="support-page">
            <div className="container">
                <header className="support-header">
                    <div className="eyebrow">Thông tin mua hàng</div>
                    <h1>Chính sách giao hàng</h1>
                    <p>Quy trình giao hàng minh bạch, giúp bạn an tâm nhận xe và phụ kiện BikeTrend.</p>
                </header>

                <section className="delivery-steps" aria-label="Quy trình giao hàng">
                    {deliverySteps.map(([number, title, text]) => (
                        <article className="delivery-step" key={number}>
                            <span>{number}</span>
                            <h3>{title}</h3>
                            <p>{text}</p>
                        </article>
                    ))}
                </section>

                <section className="support-content">
                    <article>
                        <h2>Thời gian và phí giao hàng</h2>
                        <ul>
                            <li>Nội thành: giao trong 1–2 ngày làm việc.</li>
                            <li>Tỉnh/thành khác: giao trong 3–7 ngày làm việc tùy khu vực.</li>
                            <li>Miễn phí giao hàng với đơn hàng từ 2.000.000đ.</li>
                            <li>Đơn dưới 2.000.000đ tính phí theo bảng giá của đơn vị vận chuyển.</li>
                        </ul>
                    </article>
                    <article>
                        <h2>Kiểm tra hàng khi nhận</h2>
                        <ul>
                            <li>Kiểm tra tem, niêm phong và tình trạng thùng hàng trước khi ký nhận.</li>
                            <li>Đối với xe lắp ráp, vui lòng kiểm tra khung, phanh, bộ truyền động và bánh xe.</li>
                            <li>Quay video mở hộp để hỗ trợ xử lý nhanh nếu phát hiện sai hoặc thiếu hàng.</li>
                        </ul>
                    </article>
                    <article>
                        <h2>Đơn hàng đặc biệt</h2>
                        <p>Xe đạp điện, xe có kích thước lớn hoặc đơn giao ra đảo có thể cần thời gian và chi phí bổ sung. Nhân viên BikeTrend sẽ tư vấn rõ trước khi xác nhận đơn.</p>
                    </article>
                </section>

                <div className="support-action">
                    <p>Cần hỗ trợ theo dõi đơn hàng?</p>
                    <Link className="button" to="/contact">Liên hệ BikeTrend <span>→</span></Link>
                </div>
            </div>
        </main>
    );
}

export default ShippingPolicy;
