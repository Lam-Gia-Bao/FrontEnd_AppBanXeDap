export const categoriesData = [
    { id: 1, name: "Tất cả", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Xe địa hình", image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Xe đua", image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "Xe touring", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80" },
    { id: 5, name: "Xe thành phố", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=600&q=80" },
    { id: 6, name: "Xe fixed gear", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80" },
    { id: 7, name: "Xe đạp gấp", image: "https://images.unsplash.com/photo-1505705694340-019e1e4e6f4a?auto=format&fit=crop&w=600&q=80" },
    { id: 8, name: "Xe BMX", image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=600&q=80" },
    { id: 9, name: "Xe đạp điện", image: "https://images.unsplash.com/photo-1624243519828-52a0f2c88af3?q=80&w=600&auto=format&fit=crop" },
    { id: 10, name: "Xe phổ thông", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=600&q=80" },
    { id: 11, name: "Phụ kiện", image: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?auto=format&fit=crop&w=600&q=80" }
];

export const productsData = [
    // xe dia hinh
    { id: 1, name: "BikeTrend Explorer 27.5", category: "Xe địa hình", desc: "Khung nhôm · 21 tốc độ · Phuộc trước", price: 7890000, priceFormatted: "7.890.000đ", badge: "BÁN CHẠY", image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=800&q=85" },
    { id: 2, name: "BikeTrend Mountain Pro 29", category: "Xe địa hình", desc: "Phanh đĩa dầu · Phuộc khóa hành trình", price: 13500000, priceFormatted: "13.500.000đ", badge: "NỔI BẬT", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=85" },
    { id: 3, name: "BikeTrend Trail Full 29", category: "Xe địa hình", desc: "Giảm xóc trước sau · Bánh 29 inch", price: 21900000, priceFormatted: "21.900.000đ", badge: "CAO CẤP", image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=800&q=85" },

    // xe dua
    { id: 4, name: "BikeTrend Road Sport", category: "Xe đua", desc: "Ghi đông cong · Shimano 16 tốc độ", price: 12900000, priceFormatted: "12.900.000đ", badge: "", image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=800&q=85" },
    { id: 5, name: "BikeTrend Aero Carbon", category: "Xe đua", desc: "Khung sợi carbon · Nặng 8.2kg", price: 28500000, priceFormatted: "28.500.000đ", badge: "CAO CẤP", image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=800&q=85" },
    { id: 6, name: "BikeTrend Speed 300", category: "Xe đua", desc: "Khung nhôm nhẹ · Lốp 700x25C", price: 15400000, priceFormatted: "15.400.000đ", badge: "MỚI", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=85" },

    // xe touring
    { id: 7, name: "BikeTrend Touring X1", category: "Xe touring", desc: "Baga sau chở đồ · Chắn bùn hai bánh", price: 10800000, priceFormatted: "10.800.000đ", badge: "", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=85" },
    { id: 8, name: "BikeTrend Trekking 700", category: "Xe touring", desc: "Khung thép Cr-Mo · Dáng ngồi thoải mái", price: 12200000, priceFormatted: "12.200.000đ", badge: "MỚI", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=85" },
    { id: 9, name: "BikeTrend Long Road", category: "Xe touring", desc: "Lốp 700x40C · Đi đường dài", price: 14600000, priceFormatted: "14.600.000đ", badge: "", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=85" },

    // xe thanh pho (hybrid / city)
    { id: 10, name: "BikeTrend Urban One", category: "Xe thành phố", desc: "Tay lái ngang · Khung nhôm gọn nhẹ", price: 6490000, priceFormatted: "6.490.000đ", badge: "BÁN CHẠY", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=85" },
    { id: 11, name: "BikeTrend City Flex", category: "Xe thành phố", desc: "Giỏ trước tiện lợi · Phuộc nhún nhẹ", price: 5890000, priceFormatted: "5.890.000đ", badge: "", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=85" },
    { id: 12, name: "BikeTrend Metro Lite", category: "Xe thành phố", desc: "Nặng 11kg · Phù hợp đi làm hằng ngày", price: 7450000, priceFormatted: "7.450.000đ", badge: "MỚI", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=85" },

    // xe fixed gear
    { id: 13, name: "BikeTrend Fixie Street", category: "Xe fixed gear", desc: "Không líp tự do · Vành cao 40mm", price: 4290000, priceFormatted: "4.290.000đ", badge: "", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=85" },
    { id: 14, name: "BikeTrend Fixie Color", category: "Xe fixed gear", desc: "Khung thép · Nhiều màu nổi bật", price: 3890000, priceFormatted: "3.890.000đ", badge: "NỔI BẬT", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=85" },
    { id: 15, name: "BikeTrend Track Pro", category: "Xe fixed gear", desc: "Khung nhôm · Kiểu dáng xe đua lòng chảo", price: 6750000, priceFormatted: "6.750.000đ", badge: "", image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=800&q=85" },

    // xe dap gap
    { id: 16, name: "BikeTrend Fold 16", category: "Xe đạp gấp", desc: "Bánh 16 inch · Gấp gọn trong 15 giây", price: 5900000, priceFormatted: "5.900.000đ", badge: "", image: "https://images.unsplash.com/photo-1505705694340-019e1e4e6f4a?auto=format&fit=crop&w=800&q=85" },
    { id: 17, name: "BikeTrend Fold 20", category: "Xe đạp gấp", desc: "Bánh 20 inch · 7 tốc độ", price: 7200000, priceFormatted: "7.200.000đ", badge: "BÁN CHẠY", image: "https://images.unsplash.com/photo-1505705694340-019e1e4e6f4a?auto=format&fit=crop&w=800&q=85" },
    { id: 18, name: "BikeTrend Fold Light", category: "Xe đạp gấp", desc: "Khung nhôm · Nặng chỉ 10kg", price: 9800000, priceFormatted: "9.800.000đ", badge: "MỚI", image: "https://images.unsplash.com/photo-1505705694340-019e1e4e6f4a?auto=format&fit=crop&w=800&q=85" },

    // xe bmx
    { id: 19, name: "BikeTrend BMX Street", category: "Xe BMX", desc: "Bánh 20 inch · Có pegs đứng biểu diễn", price: 4590000, priceFormatted: "4.590.000đ", badge: "", image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=800&q=85" },
    { id: 20, name: "BikeTrend BMX Jump", category: "Xe BMX", desc: "Khung thép chịu lực · Cổ lái xoay 360 độ", price: 5990000, priceFormatted: "5.990.000đ", badge: "NỔI BẬT", image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=800&q=85" },
    { id: 21, name: "BikeTrend BMX Kid", category: "Xe BMX", desc: "Bánh 18 inch · Cho người mới tập", price: 3290000, priceFormatted: "3.290.000đ", badge: "", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=85" },

    // xe dap dien (tro luc)
    { id: 22, name: "BikeTrend E-City", category: "Xe đạp điện", desc: "Pin 36V · Đi được khoảng 50km", price: 15990000, priceFormatted: "15.990.000đ", badge: "", image: "https://images.unsplash.com/photo-1624243519828-52a0f2c88af3?q=80&w=800&auto=format&fit=crop" },
    { id: 23, name: "BikeTrend E-Fold Mini", category: "Xe đạp điện", desc: "Xe điện gấp gọn · Pin Lithium", price: 16500000, priceFormatted: "16.500.000đ", badge: "MỚI", image: "https://images.unsplash.com/photo-1505705694340-019e1e4e6f4a?auto=format&fit=crop&w=800&q=85" },
    { id: 24, name: "BikeTrend E-Cargo Plus", category: "Xe đạp điện", desc: "Động cơ 500W · Quãng đường 70km", price: 21900000, priceFormatted: "21.900.000đ", badge: "BÁN CHẠY", image: "https://images.unsplash.com/photo-1624243519828-52a0f2c88af3?q=80&w=800&auto=format&fit=crop" },

    // xe pho thong
    { id: 25, name: "BikeTrend Học Sinh 24", category: "Xe phổ thông", desc: "Bánh 24 inch · Có giỏ và baga", price: 2190000, priceFormatted: "2.190.000đ", badge: "BÁN CHẠY", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=85" },
    { id: 26, name: "BikeTrend Mini 20", category: "Xe phổ thông", desc: "Khung thấp · Dễ lên xuống xe", price: 1890000, priceFormatted: "1.890.000đ", badge: "", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=85" },
    { id: 27, name: "BikeTrend Classic 26", category: "Xe phổ thông", desc: "Khung thép bền · Yên lò xo êm", price: 2650000, priceFormatted: "2.650.000đ", badge: "", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=85" },

    // phu kien
    { id: 28, name: "Mũ bảo hiểm BikeTrend Safe", category: "Phụ kiện", desc: "Siêu nhẹ · 18 lỗ thoáng khí", price: 650000, priceFormatted: "650.000đ", badge: "BÁN CHẠY", image: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=800&q=85" },
    { id: 29, name: "Đèn pha LED BikeTrend 800Lm", category: "Phụ kiện", desc: "Chống nước · Sạc Type-C", price: 450000, priceFormatted: "450.000đ", badge: "", image: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=800&q=85" },
    { id: 30, name: "Khóa số BikeGuard", category: "Phụ kiện", desc: "Cáp thép bọc nhựa · 5 số bảo mật", price: 320000, priceFormatted: "320.000đ", badge: "", image: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?auto=format&fit=crop&w=800&q=85" }
];

export const journalData = [
    {
        id: 1,
        title: "5 cung đường tuyệt đẹp cho chuyến đạp xe cuối tuần",
        category: "Phong cách sống",
        date: "12.06.2025",
        readTime: "4 phút đọc",
        image: "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=900&q=80",
        excerpt: "Gợi ý những cung đường thoáng đãng, nhiều cây xanh để bạn nạp lại năng lượng và tận hưởng thiên nhiên dịp cuối tuần.",
        content: [
            "Đạp xe cuối tuần không chỉ giúp rèn luyện thể lực mà còn là cách giải tỏa căng thẳng hiệu quả sau một tuần làm việc. Việc chọn đúng cung đường ít khói bụi và có cảnh quan đẹp sẽ giúp chuyến đi trọn vẹn hơn.",
            "Cung đường ven hồ hoặc các tuyến đường ngoại ô vào sáng sớm từ 5h30 đến 7h30 luôn là lựa chọn lý tưởng. Mặt đường bằng phẳng phù hợp cho cả dòng xe thành phố (City Bike) lẫn xe thể thao đường trường.",
            "Đừng quên kiểm tra áp suất lốp, mang theo bình nước cá nhân và đội mũ bảo hiểm đạt chuẩn trước khi xuất phát để đảm bảo an toàn trên suốt hành trình."
        ]
    },
    {
        id: 2,
        title: "Chăm xe đúng cách cho hành trình dài bền bỉ",
        category: "Mẹo hay",
        date: "08.06.2025",
        readTime: "5 phút đọc",
        image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=700&q=80",
        excerpt: "Hướng dẫn vệ sinh sên xích, kiểm tra má phanh và bảo dưỡng định kỳ giúp chiếc xe của bạn luôn vận hành êm ái.",
        content: [
            "Bộ truyền động (sên, líp, dĩa) là bộ phận tiếp xúc trực tiếp với bụi bẩn và bùn đất nhiều nhất. Sau mỗi 150km đến 200km di chuyển, bạn nên tẩy rửa sên bằng dung dịch chuyên dụng và tra dầu bôi trơn mới.",
            "Hệ thống phanh đĩa cơ hoặc phanh thủy lực cần được kiểm tra độ mòn của má phanh mỗi tháng một lần. Nếu nghe thấy tiếng kêu ken két khi bóp phanh, rất có thể đĩa phanh đã dính dầu hoặc má phanh đã mòn tới giới hạn.",
            "Ngoài ra, hãy giữ lốp xe ở mức áp suất khuyến nghị ghi trên thành lốp (thường từ 45 đến 65 PSI đối với xe địa hình và 80 đến 100 PSI đối với xe đua) để tránh tình trạng dập ruột và giúp xe lướt nhẹ hơn."
        ]
    },
    {
        id: 3,
        title: "Những món phụ kiện không thể thiếu khi mới bắt đầu",
        category: "Trang bị",
        date: "02.06.2025",
        readTime: "3 phút đọc",
        image: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=700&q=80",
        excerpt: "Tổng hợp các trang bị cơ bản nhưng quan trọng giúp người mới đạp xe an toàn và thoải mái hơn trên mọi cung đường.",
        content: [
            "Món phụ kiện quan trọng đầu tiên chắc chắn là mũ bảo hiểm xe đạp chuyên dụng. Thiết kế nhiều khe thoáng khí và trọng lượng siêu nhẹ dưới 300g sẽ bảo vệ vùng đầu mà không gây mỏi cổ khi đội lâu.",
            "Tiếp theo là bộ đèn pha phía trước và đèn nháy cảnh báo phía sau nếu bạn thường xuyên đạp xe vào sáng sớm hoặc chiều tối. Ánh sáng rõ ràng giúp các phương tiện khác nhận diện bạn từ khoảng cách xa.",
            "Một chiếc túi treo khung chống nước kèm găng tay đệm Gel và bình nước giữ nhiệt sẽ hoàn thiện bộ trang bị cơ bản, giúp bạn mang theo điện thoại, ví tiền gọn gàng mà không bị vướng víu."
        ]
    },
    {
        id: 4,
        title: "Cách chỉnh độ cao yên xe chuẩn xác chống đau mỏi gối",
        category: "Mẹo hay",
        date: "28.05.2025",
        readTime: "4 phút đọc",
        image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80",
        excerpt: "Yên xe quá thấp hoặc quá cao đều gây áp lực xấu lên khớp gối và lưng dưới. Hãy áp dụng quy tắc gót chân đơn giản sau.",
        content: [
            "Rất nhiều người mới đi xe đạp có thói quen hạ yên thật thấp để hai bàn chân chạm đất hoàn toàn khi ngồi trên yên. Tuy nhiên tư thế này khiến đầu gối luôn bị gập quá mức khi đạp, gây mỏi cơ đùi và đau khớp gối nhanh chóng.",
            "Cách chỉnh chuẩn nhất: Ngồi lên yên, đặt phần gót chân lên bàn đạp ở vị trí thấp nhất (hướng 6 giờ). Khi đó chân của bạn duỗi thẳng hoàn toàn là độ cao yên đã chuẩn.",
            "Khi chuyển sang tư thế đạp thực tế bằng phần ức bàn chân, đầu gối sẽ có độ chùng nhẹ tự nhiên khoảng 25 độ, giúp phát lực tối ưu và bảo vệ khớp gối lâu dài."
        ]
    },
    {
        id: 5,
        title: "Phân biệt xe đạp thành phố, xe địa hình và xe đường trường",
        category: "Trang bị",
        date: "20.05.2025",
        readTime: "6 phút đọc",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=80",
        excerpt: "Mỗi dòng xe được thiết kế hình học khung và cỡ lốp riêng biệt. Cùng tìm hiểu dòng xe nào sinh ra dành cho nhu cầu của bạn.",
        content: [
            "Xe đạp thành phố (City / Hybrid Bike) có ghi đông ngang, tư thế ngồi thẳng lưng thoải mái và lốp cỡ vừa 700C, rất thích hợp để đi làm, đi học hằng ngày hoặc dạo phố nhẹ nhàng.",
            "Xe đạp địa hình (Mountain Bike - MTB) nổi bật với phuộc nhún giảm xóc trước, lốp bản rộng nhiều gai bám đường và khung sườn chắc chắn, giúp bạn tự tin vượt qua đường gồ ghề, sỏi đá.",
            "Xe đạp đua đường trường (Road Bike) sử dụng ghi đông cong, lốp mỏng trơn áp suất cao và trọng lượng tối giản để đạt tốc độ tối đa trên những tuyến đường nhựa bằng phẳng."
        ]
    },
    {
        id: 6,
        title: "Lợi ích của thói quen đạp xe 30 phút mỗi ngày đối với sức khỏe",
        category: "Phong cách sống",
        date: "14.05.2025",
        readTime: "4 phút đọc",
        image: "https://images.unsplash.com/photo-1529422643029-d4585747aaf2?auto=format&fit=crop&w=800&q=80",
        excerpt: "Chỉ với nửa tiếng đạp xe đều đặn mỗi ngày, hệ tim mạch, giấc ngủ và độ dẻo dai của cơ thể đều được cải thiện rõ rệt.",
        content: [
            "Đạp xe là bộ môn vận động nhịp nhàng ít gây chấn động lên cổ chân và khớp gối hơn so với chạy bộ trên nền cứng, phù hợp với mọi lứa tuổi.",
            "Duy trì 30 phút đạp xe ở cường độ vừa phải giúp đốt cháy từ 250 đến 400 calo, tăng cường tuần hoàn máu và cải thiện dung tích phổi hiệu quả.",
            "Bên cạnh lợi ích thể chất, việc hít thở không khí ngoài trời và ngắm nhìn nhịp sống xung quanh trên chiếc xe đạp còn giúp tinh thần thư thái, ngủ sâu giấc hơn vào ban đêm."
        ]
    }
];