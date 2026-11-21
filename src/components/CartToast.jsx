import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CartToast() {
    const [toast, setToast] = useState(null);

    useEffect(() => {
        const showToast = (event) => {
            setToast(event.detail);
        };

        window.addEventListener("bikeTrendCartAdded", showToast);
        return () => window.removeEventListener("bikeTrendCartAdded", showToast);
    }, []);

    useEffect(() => {
        if (!toast) return undefined;
        const timeoutId = window.setTimeout(() => setToast(null), 4000);
        return () => window.clearTimeout(timeoutId);
    }, [toast]);

    if (!toast) return null;

    return (
        <aside className="cart-toast" role="status" aria-live="polite">
            <button
                className="cart-toast-close"
                type="button"
                aria-label="Đóng thông báo"
                onClick={() => setToast(null)}
            >
                ×
            </button>
            <span className="cart-toast-check" aria-hidden="true">✓</span>
            <div className="cart-toast-content">
                <strong>Đã thêm vào giỏ hàng</strong>
                <div className="cart-toast-product">
                    <img src={toast.image} alt="" />
                    <span>
                        <b>{toast.name}</b>
                        <small>Số lượng: {toast.quantity}</small>
                    </span>
                </div>
                <Link to="/cart" onClick={() => setToast(null)}>
                    Xem giỏ hàng <span>→</span>
                </Link>
            </div>
        </aside>
    );
}

export default CartToast;
