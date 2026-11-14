import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { productsData } from "../data/bikesData";

function Checkout() {
    const product = productsData[0];
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const selectedProduct = productsData.find((item) => item.id === Number(searchParams.get("product"))) || product;
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const [quantity, setQuantity] = useState(Number(searchParams.get("quantity")) || 1);
    const checkoutProduct = selectedProduct;
    const total = checkoutProduct.price * quantity;
    const formattedTotal = `${total.toLocaleString("vi-VN")}đ`;

    const submitOrder = (event) => {
        event.preventDefault();
        alert("Đặt hàng thành công!");
        navigate("/");
    };

    return (
        <main className="checkout-page">
            <div className="checkout-topbar">
                <div className="container checkout-topbar-inner">
                    <Link to="/shop" className="checkout-back">← Tiếp tục mua sắm</Link>
                    <strong>Thanh toán đơn hàng</strong>
                    <span>🔒 Thanh toán an toàn</span>
                </div>
            </div>

            <div className="container checkout-layout">
                <form id="checkout-form" className="checkout-form" onSubmit={submitOrder}>
                    <section className="checkout-card checkout-cart">
                        <div className="checkout-card-heading">
                            <h1>Giỏ hàng</h1><span>{quantity} sản phẩm</span>
                        </div>
                        <div className="checkout-product">
                            <img src={checkoutProduct.image} alt={checkoutProduct.name} />
                            <div className="checkout-product-name">
                                <strong>{checkoutProduct.name}</strong>
                                <small>{checkoutProduct.desc}</small>
                            </div>
                            <strong className="checkout-product-price">{checkoutProduct.priceFormatted}</strong>
                            <div className="checkout-quantity">
                                <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                                <span>{quantity}</span>
                                <button type="button" onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                            <button type="button" className="checkout-remove" aria-label="Xóa sản phẩm">×</button>
                        </div>
                    </section>

                    <section className="checkout-card">
                        <div className="checkout-card-heading"><h2>Thông tin giao hàng</h2><span>* Bắt buộc</span></div>
                        <div className="checkout-fields">
                            <label>Họ và tên *<input required type="text" placeholder="Nhập họ tên" /></label>
                            <label>Số điện thoại *<input required type="tel" placeholder="Nhập số điện thoại" /></label>
                            <label>Email<input type="email" placeholder="Nhập địa chỉ email" /></label>
                            <label>Tỉnh / Thành phố *
                                <select required defaultValue=""><option value="" disabled>Chọn tỉnh / thành phố</option><option>Hà Nội</option><option>Hồ Chí Minh</option><option>Đà Nẵng</option></select>
                            </label>
                            <label>Quận / Huyện *
                                <select required defaultValue=""><option value="" disabled>Chọn quận / huyện</option><option>Quận 1</option><option>Quận Cầu Giấy</option><option>Quận Hải Châu</option></select>
                            </label>
                            <label>Phường / Xã *
                                <select required defaultValue=""><option value="" disabled>Chọn phường / xã</option><option>Phường 1</option><option>Phường 2</option><option>Phường 3</option></select>
                            </label>
                            <label className="checkout-full-field">Địa chỉ *
                                <textarea required placeholder="Nhập địa chỉ nhận hàng" rows="3" />
                            </label>
                        </div>
                    </section>

                    <section className="checkout-card checkout-payment">
                        <div className="checkout-card-heading"><h2>Chọn hình thức thanh toán</h2></div>
                        <label className="payment-option"><input type="radio" name="payment" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} /><span><strong>Thanh toán khi nhận hàng</strong><small>Vui lòng đặt cọc trước một phần giá trị đơn hàng bằng hình thức chuyển khoản.</small></span></label>
                        <div className="bank-info"><strong>CÔNG TY CỔ PHẦN XANH</strong><span>STK: 02510 0274 3065</span><span>NGÂN HÀNG VIETCOMBANK - CN ĐINH TIÊN HOÀNG - PGD CHỢ LỚN</span></div>
                        <label className="payment-option"><input type="radio" name="payment" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} /><span>Thanh toán qua thẻ Visa, Mastercard</span></label>
                        <label className="payment-option"><input type="radio" name="payment" checked={paymentMethod === "momo"} onChange={() => setPaymentMethod("momo")} /><span>Thanh toán qua ví điện tử MoMo</span></label>
                    </section>

                    <section className="checkout-card">
                        <div className="checkout-card-heading"><h2>Ghi chú</h2></div>
                        <textarea className="checkout-note" placeholder="Nhập ghi chú cho đơn hàng" rows="3" />
                    </section>
                </form>

                <aside className="checkout-summary">
                    <h2>Thông tin đơn hàng</h2>
                    <div className="summary-line"><span>Tạm tính</span><strong>{formattedTotal}</strong></div>
                    <div className="summary-line"><span>Phí vận chuyển</span><strong>Miễn phí</strong></div>
                    <div className="summary-line"><span>Khuyến mãi</span><strong>0đ</strong></div>
                    <div className="summary-total"><span>Tổng tiền</span><strong>{formattedTotal}</strong></div>
                    <small className="summary-note">(Đã bao gồm VAT)</small>
                    <button className="checkout-submit" type="submit" form="checkout-form">Mua hàng</button>
                    <Link to="/shop" className="summary-back">← Quay lại cửa hàng</Link>
                </aside>
            </div>
        </main>
    );
}

export default Checkout;
