import { Link, useSearchParams } from "react-router-dom";
import { productsData } from "../data/bikesData";

function OrderSuccess() {
    const [searchParams] = useSearchParams();
    const fallbackProduct = productsData[0];
    const product = productsData.find((item) => item.id === Number(searchParams.get("product"))) || fallbackProduct;
    const quantity = Number(searchParams.get("quantity")) || 1;
    const subtotal = product.price * quantity;
    const orderCode = "BT" + String(91339 + product.id).padStart(5, "0");

    return (
        <main className="success-page">
            <section className="success-hero">
                <div className="success-brand"><span>↗</span>BikeTrend</div>
                <div className="success-check" aria-hidden="true">✓</div>
                <h1>Cảm ơn bạn đã đặt hàng</h1>
                <p>Một email xác nhận đã được gửi tới<br /><strong>khách hàng của bạn.</strong><br />Xin vui lòng kiểm tra email của bạn</p>
            </section>

            <section className="success-order">
                <div className="success-order-heading">
                    <h2>Đơn hàng #{orderCode} ({quantity})</h2>
                    <Link to={`/product/${product.id}`}>Xem chi tiết⌃</Link>
                </div>
                <div className="success-product">
                    <div className="success-product-image">
                        <img src={product.image} alt={product.name} />
                        <span>{quantity}</span>
                    </div>
                    <div className="success-product-info">
                        <strong>{product.name}</strong>
                        <small>{product.desc}</small>
                    </div>
                    <strong className="success-product-price">{product.priceFormatted}</strong>
                </div>
                <div className="success-costs">
                    <div><span>Khuyến mãi</span><strong>0đ</strong></div>
                    <div><span>Tạm tính</span><strong>{subtotal.toLocaleString("vi-VN")}đ</strong></div>
                    <div><span>Phí vận chuyển</span><strong>Miễn phí</strong></div>
                    <div className="success-grand-total"><span>Tổng cộng</span><strong>{subtotal.toLocaleString("vi-VN")}đ</strong></div>
                </div>
            </section>

            <section className="success-customer">
                <h2>Thông tin mua hàng</h2>
                <p>Khách hàng BikeTrend</p>
                <p>Thông tin giao hàng sẽ được xác nhận qua email và điện thoại.</p>
            </section>

            <Link to="/" className="button success-home-button">Tiếp tục mua sắm</Link>
        </main>
    );
}

export default OrderSuccess;
