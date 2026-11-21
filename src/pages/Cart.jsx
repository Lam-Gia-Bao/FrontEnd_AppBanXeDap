import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { productsData } from "../data/bikesData";

function Cart() {
    const navigate = useNavigate();
    const [cart, setCart] = useState(() => {
        const savedCart = JSON.parse(localStorage.getItem("bikeTrendCart") || "[]");
        return savedCart;
    });

    const cartItems = cart.map((item) => ({
        ...item,
        product: productsData.find((product) => product.id === item.id),
    })).filter((item) => item.product);

    const updateCart = (updatedCart) => {
        setCart(updatedCart);
        localStorage.setItem("bikeTrendCart", JSON.stringify(updatedCart));
        window.dispatchEvent(new Event("bikeTrendCartChanged"));
    };

    const changeQuantity = (id, quantity) => {
        updateCart(cart.map((item) => item.id === id
            ? { ...item, quantity: Math.max(1, quantity) }
            : item));
    };

    const removeItem = (id) => {
        updateCart(cart.filter((item) => item.id !== id));
    };

    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const subtotal = cartItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0,
    );
    const formattedSubtotal = `${subtotal.toLocaleString("vi-VN")}đ`;

    const goToCheckout = () => {
        if (cartItems.length === 1) {
            navigate(`/checkout?product=${cartItems[0].id}&quantity=${cartItems[0].quantity}`);
            return;
        }
        navigate("/checkout");
    };

    return (
        <main className="cart-page">
            <div className="container">
                <header className="cart-header">
                    <div>
                        <div className="eyebrow">Đơn hàng của bạn</div>
                        <h1>Giỏ hàng</h1>
                    </div>
                    <span>{itemCount} sản phẩm</span>
                </header>

                {cartItems.length === 0 ? (
                    <section className="cart-empty">
                        <span className="cart-empty-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24">
                                <path d="M3.5 5h2l1.8 9.2h9.9l2-6.2H7" />
                                <circle cx="9" cy="18.5" r="1" />
                                <circle cx="16.5" cy="18.5" r="1" />
                            </svg>
                        </span>
                        <h2>Giỏ hàng đang trống</h2>
                        <p>Hãy chọn một chiếc xe phù hợp để bắt đầu hành trình của bạn.</p>
                        <Link className="button" to="/shop">Khám phá cửa hàng <span>→</span></Link>
                    </section>
                ) : (
                    <div className="cart-layout">
                        <section className="cart-items" aria-label="Sản phẩm trong giỏ hàng">
                            {cartItems.map(({ id, quantity, product }) => (
                                <article className="cart-item" key={id}>
                                    <Link className="cart-item-image" to={`/product/${id}`}>
                                        <img src={product.image} alt={product.name} />
                                    </Link>
                                    <div className="cart-item-info">
                                        <p>{product.category}</p>
                                        <h2><Link to={`/product/${id}`}>{product.name}</Link></h2>
                                        <small>{product.desc}</small>
                                    </div>
                                    <div className="cart-item-price">
                                        <strong>{product.priceFormatted}</strong>
                                        {quantity > 1 && (
                                            <span>{(product.price * quantity).toLocaleString("vi-VN")}đ</span>
                                        )}
                                    </div>
                                    <div className="cart-quantity" aria-label="Số lượng">
                                        <button type="button" onClick={() => changeQuantity(id, quantity - 1)} aria-label="Giảm số lượng">−</button>
                                        <span>{quantity}</span>
                                        <button type="button" onClick={() => changeQuantity(id, quantity + 1)} aria-label="Tăng số lượng">+</button>
                                    </div>
                                    <button className="cart-remove" type="button" onClick={() => removeItem(id)} aria-label={`Xóa ${product.name}`}>×</button>
                                </article>
                            ))}
                        </section>

                        <aside className="cart-summary">
                            <h2>Tóm tắt đơn hàng</h2>
                            <div className="cart-summary-line"><span>Tạm tính</span><strong>{formattedSubtotal}</strong></div>
                            <div className="cart-summary-line"><span>Phí vận chuyển</span><strong>Miễn phí</strong></div>
                            <div className="cart-summary-total"><span>Tổng cộng</span><strong>{formattedSubtotal}</strong></div>
                            <small>Đã bao gồm thuế VAT</small>
                            <button className="cart-checkout-button" type="button" onClick={goToCheckout}>Thanh toán <span>→</span></button>
                            <Link className="cart-back" to="/shop">← Tiếp tục mua sắm</Link>
                        </aside>
                    </div>
                )}
            </div>
        </main>
    );
}

export default Cart;
