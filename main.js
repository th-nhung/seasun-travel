// CENTRALIZED DATA STORE (Source of Truth)
const SiteData = {
    images: {
        default: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        heroBg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        payment: {
            vcb: "https://cdn.haitrieu.com/wp-content/uploads/2022/02/Logo-Vietcombank.png",
            onepay: "https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-OnePay.png",
            visa: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
            mastercard: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
            jcb: "https://upload.wikimedia.org/wikipedia/commons/4/40/JCB_logo.svg"
        }
    },
    tours: {
        "phu-quy": {
            shortTitle: "Phú Quý - Tiểu Bali",
            shortDesc: "Hòn đảo nhỏ giữa đại dương với vách đá Gành Hang kỳ vĩ và làn nước trong vắt.",
            rating: "4.8",
            title: "Tour Phú Quý: Sự bình yên của 'Tiểu Bali'",
            duration: "3 Ngày 2 Đêm",
            transport: "Tàu cao tốc + Xe máy",
            price: "3.000.000₫",
            location: "Bình Thuận, Việt Nam",
            image: "https://ik.imagekit.io/tvlk/blog/2022/09/kinh-nghiem-du-lich-dao-phu-quy-cover.jpg",
            intro: "Là hòn đảo nhỏ nằm giữa đại dương, nổi tiếng với những vách đá kỳ vĩ tại Gành Hang, Bãi Nhỏ và làn nước trong vắt nhìn tận đáy. Đảo Phú Quý cũng sở hữu những điểm đến mộc mạc nhưng cực kỳ lên hình như Dốc Phượt, cột cờ chủ quyền và bờ kè đa sắc.",
            itinerary: [
                { day: "Ngày 1", title: "Khám phá đảo", desc: "Check-in Dốc Phượt, cột cờ chủ quyền biển đảo." },
                { day: "Ngày 2", title: "Lặn biển & Hoàng hôn", desc: "Đi cano ra Hòn Đen lặn ngắm san hô, tắm biển tại Bãi Nhỏ - Gành Hang, ngắm hoàng hôn tại bờ kè đa sắc." },
                { day: "Ngày 3", title: "Văn hóa tâm linh", desc: "Thăm chùa Linh Sơn và hải đăng Phú Quý trước khi về lại đất liền." }
            ]
        },
        "nha-trang": {
            shortTitle: "Nha Trang - Thiên Đường",
            shortDesc: "Bãi cát dài cong vút, VinWonders hiện đại và dịch vụ tắm bùn khoáng nóng.",
            rating: "5.0",
            title: "Tour Nha Trang: Thiên đường Giải trí & Biển đảo",
            duration: "3 Ngày 2 Đêm",
            transport: "Máy bay + Cano",
            price: "8.500.000₫",
            location: "Khánh Hòa, Việt Nam",
            image: "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            intro: "Sở hữu bãi cát dài cong vút ôm lấy làn nước xanh ngắt, cùng hệ thống đảo đa dạng như Hòn Tre, Hòn Mun với rặng san hô rực rỡ. Ngoài ra, Nha Trang còn là nơi hội tụ các resort đẳng cấp quốc tế, công viên giải trí VinWonders hiện đại và dịch vụ tắm bùn khoáng nóng độc đáo.",
            itinerary: [
                { day: "Ngày 1", title: "VinWonders", desc: "Di chuyển ra đảo Hòn Tre bằng tàu cao tốc, vui chơi không giới hạn tại VinWonders." },
                { day: "Ngày 2", title: "Tour 3 Đảo & Tắm bùn", desc: "Tour 3 đảo bằng cano (Hòn Mun - Làng Chài - Hòn Tằm). Trải nghiệm tắm bùn khoáng trên đảo Hòn Tằm." },
                { day: "Ngày 3", title: "Văn hóa & Mua sắm", desc: "Tham quan Tháp Bà Ponagar trong đất liền và chợ Đầm mua sắm đặc sản." }
            ]
        },
        "quy-nhon-ky-co": {
            shortTitle: "Quy Nhơn - Kỳ Co Eo Gió",
            shortDesc: "Tuyệt tác đá và gió tại Eo Gió cùng thiên đường biển xanh Kỳ Co.",
            rating: "4.9",
            title: "Tour Quy Nhơn: Kỳ Co - Eo Gió",
            duration: "3 Ngày 2 Đêm",
            transport: "Xe du lịch + Cano",
            price: "11.000.000₫",
            location: "Bình Định, Việt Nam",
            image: "https://sakos.vn/wp-content/uploads/2024/06/KyCo-1655198784-2371-1655201199-1.jpg",
            intro: "Hành trình khám phá Eo Gió - Tuyệt tác đá và gió, nổi tiếng với con đường đi bộ ven biển uốn lượn. Kỳ Co - Thiên đường biển xanh sở hữu bãi cát trắng mịn màng và làn nước biển hai màu xanh ngắt trong vắt, cực kỳ lý tưởng cho các hoạt động tắm biển.",
            itinerary: [
                { day: "Ngày 1", title: "Nghỉ dưỡng & Ẩm thực", desc: "Nghỉ ngơi tại resort, thưởng thức ẩm thực cao cấp tại nhà hàng Vị." },
                { day: "Ngày 2", title: "Kỳ Co - Eo Gió", desc: "Đi cano ra bãi Kỳ Co tắm biển, sau đó trekking con đường ven biển đẹp nhất Việt Nam tại Eo Gió. Ghé thăm Tịnh xá Ngọc Hòa." },
                { day: "Ngày 3", title: "Di tích lịch sử", desc: "Tham quan Tháp Đôi hoặc Ghềnh Ráng Tiên Sa trước khi về." }
            ]
        },
        "ly-son-volcano": {
            shortTitle: "Lý Sơn - Núi Lửa",
            shortDesc: "Khám phá vách đá trầm tích triệu năm, Cổng Tò Vò và cánh đồng tỏi.",
            rating: "4.7",
            title: "Tour Lý Sơn: Khám phá dấu tích Núi lửa",
            duration: "2 Ngày 1 Đêm",
            transport: "Tàu cao tốc",
            price: "2.200.000₫",
            location: "Quảng Ngãi, Việt Nam",
            image: "https://letravel.vn/uploaded/khamphaditichnuilualyson1.jpg",
            intro: "Đảo Lý Sơn nổi tiếng với đặc sản tỏi cô đơn và những vách đá trầm tích kỳ vĩ được hình thành từ sự phun trào núi lửa hàng triệu năm trước. Nơi đây sở hữu những địa danh mang tính biểu tượng như Cổng Tò Vò, Hang Câu và đỉnh Thới Lới.",
            itinerary: [
                { day: "Ngày 1", title: "Cổng Tò Vò", desc: "Check-in Cổng Tò Vò đón hoàng hôn, tham quan Chùa Hang." },
                { day: "Ngày 2", title: "Đỉnh Thới Lới - Đảo Bé", desc: "Lên đỉnh Thới Lới ngắm toàn cảnh đảo, thăm Hang Câu và cánh đồng tỏi. Nếu có thời gian, đi cano sang Đảo Bé tắm biển." }
            ]
        },
        "hoi-an-memory": {
            shortTitle: "Hội An - Ký ức Cửa Đại",
            shortDesc: "Giao thoa giữa phố cổ kính và biển Cửa Đại xanh ngát.",
            rating: "4.8",
            title: "Tour Hội An: Ký ức Cửa Đại & Phố Cổ",
            duration: "2 Ngày 1 Đêm",
            transport: "Xe du lịch",
            price: "3.500.000₫",
            location: "Quảng Nam, Việt Nam",
            image: "https://vcdn1-dulich.vnecdn.net/2024/12/12/a-nh-5-1-jpeg-1733968719-5503-1733968873.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=ZIm7PCgr1K9yd2wjMs74Ww",
            intro: "Nằm ngay điểm giao thoa giữa phố cổ Hội An cổ kính và biển khơi bao la, cực kỳ thuận tiện để du khách kết hợp nghỉ dưỡng biển và khám phá văn hóa. Bãi Cửa Đại sở hữu bờ cát trắng mịn uốn lượn và làn nước trong xanh.",
            itinerary: [
                { day: "Ngày 1", title: "Biển & Phố Cổ", desc: "Nghỉ ngơi tại bãi biển riêng của resort. Chiều tối đi xe đưa đón của khách sạn vào Phố cổ Hội An đi thuyền thả hoa đăng." },
                { day: "Ngày 2", title: "Văn hóa làng nghề", desc: "Tham quan rừng dừa Bảy Mẫu (đi thuyền thúng) hoặc thăm làng gốm Thanh Hà." }
            ]
        }
    },
    accommodation: {
        "queen-sea-resort": {
            shortTitle: "Queen Sea Resort",
            shortDesc: "Không gian thoáng mát, phòng hướng biển tại đảo Phú Quý.",
            starHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',
            price: "Từ 600.000₫/đêm",
            badgeText: "Resort",
            badgeClass: "bg-primary",
            title: "Queen Sea Resort - Đảo Phú Quý",
            location: "Tam Thanh, Phú Quý",
            locationCard: "Phú Quý, Bình Thuận",
            image: "https://vetauphuquy.vn/wp-content/uploads/2024/06/Queen-SeA-Resort.jpg",
            intro: "Queen Sea Resort là một trong những điểm nghỉ dưỡng nổi bật trên đảo Phú Quý (Bình Thuận), nằm tại xã Tam Thanh, với vị trí gần làng chài và bãi biển, được đánh giá cao nhờ không gian thoáng mát, phòng hướng biển và dịch vụ thân thiện. Đây là lựa chọn lý tưởng cho du khách muốn trải nghiệm kỳ nghỉ thoải mái trên đảo.",
            nearby: ["Gần làng chài Tam Thanh", "Cách bãi biển 200m", "Trung tâm đảo"],
            roomTypes: ["Phòng Đôi View Biển", "Phòng Gia Đình", "Bungalow"],
            relatedTourId: "phu-quy"
        },
        "vinpearl-nha-trang": {
            shortTitle: "Vinpearl Resort & Spa",
            shortDesc: "Kiến trúc hình cánh cung trắng độc đáo trên đảo Hòn Tre.",
            starHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',
            price: "Từ 2.881.000₫/đêm",
            badgeText: "Luxury",
            badgeClass: "bg-success",
            title: "Vinpearl Resort & Spa Nha Trang Bay",
            location: "Đảo Hòn Tre, Nha Trang",
            locationCard: "Nha Trang, Khánh Hòa",
            image: "https://dongtayland.vn/wp-content/smush-webp/2018/06/biet-thu-bien-vinpearl-resort-spa-nha-trang-bay-1.jpg.webp",
            intro: "Vinpearl Resort & Spa Nha Trang Bay là khu nghỉ dưỡng 5 sao nằm trên đảo Hòn Tre, nổi bật với kiến trúc hình cánh cung trắng độc đáo, bãi biển riêng tuyệt đẹp và dịch vụ nghỉ dưỡng - giải trí cao cấp.",
            nearby: ["Kế bên VinWonders", "Bãi biển riêng", "Sân Golf"],
            roomTypes: ["Deluxe Ocean View", "Villa 3 Phòng Ngủ", "Executive Suite"],
            relatedTourId: "nha-trang"
        },
        "maia-resort": {
            shortTitle: "Maia Resort Quy Nhơn",
            shortDesc: "Resort 5 sao chú trọng trải nghiệm ẩm thực và wellness.",
            starHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',
            price: "Từ 4.071.000₫/đêm",
            badgeText: "Wellness",
            badgeClass: "bg-info text-dark",
            title: "Maia Resort Quy Nhơn (Fusion Group)",
            location: "Khu kinh tế Nhơn Hội, Cát Tiến",
            locationCard: "Phù Cát, Bình Định",
            image: "https://fusionresorts.com/quynhon-old/wp-content/uploads/sites/11/2020/08/Garden-Pool-Villa-facade-02_resize.jpg",
            intro: "Là khu nghỉ dưỡng 5 sao thuộc Fusion Group. Nổi bật với các villa có hồ bơi riêng, phong cách thiết kế hiện đại hòa mình vào thiên nhiên, với đặc thù chú trọng đến trải nghiệm ẩm thực và wellness (chăm sóc sức khỏe).",
            nearby: ["Gần Kỳ Co - Eo Gió", "Bãi biển Cát Tiến", "Tịnh xá Ngọc Hòa"],
            roomTypes: ["Garden Villa", "Pool Villa", "Beachfront Villa"],
            relatedTourId: "quy-nhon-ky-co"
        },
        "muong-thanh-ly-son": {
            shortTitle: "Mường Thanh Holiday",
            shortDesc: "Khách sạn 4 sao hiện đại ngay trung tâm đảo Lý Sơn.",
            starHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',
            price: "Từ 1.009.000₫/đêm",
            badgeText: "Hotel",
            badgeClass: "bg-warning text-dark",
            title: "Mường Thanh Holiday Lý Sơn",
            location: "An Vĩnh, Lý Sơn",
            locationCard: "Lý Sơn, Quảng Ngãi",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/110782353.jpg?k=ae60536a5795b81516b249e252a56bdd1bb0724bae52bd8ccdcf351f12092d84&o=",
            intro: "Là khách sạn 4 sao hiện đại nằm ngay trong trung tâm đảo Lý Sơn, nổi bật với không gian sang trọng, tiện nghi đầy đủ và tầm nhìn hướng biển xanh, cát trắng, nắng vàng, mang đến trải nghiệm nghỉ dưỡng lý tưởng cho du khách.",
            nearby: ["Gần cảng Lý Sơn", "Cổng Tò Vò", "Chợ đêm Lý Sơn"],
            roomTypes: ["Deluxe King", "Deluxe Twin", "Executive Suite"],
            relatedTourId: "ly-son-volcano"
        },
        "victoria-hoi-an": {
            shortTitle: "Victoria Beach Resort",
            shortDesc: "Phong cách Đông Dương kết hợp làng chài ngay biển Cửa Đại.",
            starHtml: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',
            price: "Từ 1.540.000₫/đêm",
            badgeText: "Indochine",
            badgeClass: "bg-danger",
            title: "Victoria Hoi An Beach Resort & Spa",
            location: "Biển Cửa Đại, Hội An",
            locationCard: "Hội An, Quảng Nam",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/571676046.jpg?k=97e40dc08103b933df4422a9450805135d7edbb41e522999e2fec8a4af3242f1&o=",
            intro: "Victoria Hội An Beach Resort & Spa là khu nghỉ dưỡng 4 sao cao cấp nằm ngay bãi biển Cửa Đại, Hội An. Nổi bật với kiến trúc mang phong cách Đông Dương kết hợp làng chài truyền thống, resort có bãi biển riêng, hồ bơi ngoài trời và dịch vụ spa - ẩm thực đa dạng.",
            nearby: ["Biển Cửa Đại", "Phố cổ Hội An (5km)", "Làng rau Trà Quế"],
            roomTypes: ["River View", "Garden View", "Ocean View Suite"],
            relatedTourId: "hoi-an-memory"
        }
    },
    cuisine: {
        "cua-huynh-de": {
            shortTitle: "Cua Huỳnh Đế",
            shortDesc: "Loại cua hình dáng lạ mắt, thịt trắng muốt, thơm và béo ngậy.",
            title: "Đặc Sản Cua Huỳnh Đế - Phú Quý",
            location: "Đảo Phú Quý",
            image: "https://diadanhbinhthuan.com/wp-content/uploads/2021/09/4-12.jpg",
            intro: "Khác với cua thông thường, cua Huỳnh Đế có hình dáng khá lạ mắt, trông giống một con bọ khổng lồ với lớp vỏ dày, cứng màu đỏ hồng và đôi càng ngắn. Thịt cua cực kỳ chắc, trắng muốt, thơm và béo ngậy.",
            ingredients: ["Cua Huỳnh Đế tươi sống", "Muối tiêu chanh", "Sả, gừng (khi hấp)"],
            taste: "Phần gạch cua rất thơm ngon và bổ dưỡng, xứng danh món ăn từng dùng để tiến vua.",
            relatedTourId: "phu-quy"
        },
        "nem-nuong": {
            shortTitle: "Nem Nướng Nha Trang",
            shortDesc: "Thịt heo nướng thơm lừng cuốn cùng bánh tráng và nước chấm sền sệt.",
            title: "Nem Nướng Ninh Hòa - Nha Trang",
            location: "Nha Trang",
            image: "https://mms.img.susercontent.com/vn-11134513-7r98o-lsvd0fj6o1p508@resize_ss1242x600!@crop_w1242_h600_cT",
            intro: "Món ăn nổi bật với thịt heo nướng thơm lừng, ăn kèm rau sống, bánh tráng giòn và cuốn dẻo, cùng bát nước chấm vàng cam sền sệt được chế biến cầu kỳ, tạo nên hương vị hài hòa và đặc trưng.",
            ingredients: ["Thịt heo xay quết dẻo", "Bánh tráng chiên giòn", "Rau sống, xoài, dưa leo", "Nước chấm nếp"],
            taste: "Vị ngọt thơm của thịt nướng than hoa quyện với độ giòn rụm của bánh tráng và vị béo bùi của nước chấm.",
            relatedTourId: "nha-trang"
        },
        "banh-xeo-tom-nhay": {
            shortTitle: "Bánh Xèo Tôm Nhảy",
            shortDesc: "Vỏ bánh vàng giòn rụm, nhân tôm tươi ngọt ăn kèm rau mầm.",
            title: "Bánh Xèo Tôm Nhảy Quy Nhơn",
            location: "Quy Nhơn",
            image: "https://static.vinwonders.com/production/banh-xeo-tom-nhay-quy-nhon-3.jpg",
            intro: "Món ăn nổi bật với lớp vỏ vàng giòn rụm, nhân tôm tươi ngọt, kết hợp cùng giá, hành và rau sống thanh mát. Tôm đất đỏ au còn nhảy đành đạch trên khuôn bánh nóng hổi.",
            ingredients: ["Bột gạo", "Tôm đất tươi sống", "Giá đỗ, hành lá", "Rau mầm, xoài chua"],
            taste: "Vỏ bánh giòn tan, tôm ngọt lịm. Ăn kèm nước chấm chua ngọt đậm đà tạo nên hương vị khó quên.",
            relatedTourId: "quy-nhon-ky-co"
        },
        "goi-toi": {
            shortTitle: "Gỏi Tỏi Lý Sơn",
            shortDesc: "Chế biến từ cây tỏi đực, vị cay nhẹ, thơm đặc trưng và ấm bụng.",
            title: "Gỏi Tỏi - Đặc Sản Lý Sơn",
            location: "Đảo Lý Sơn",
            image: "https://ss-images.saostar.vn/wp700/pc/1682649468963/saostar-gd9hrr8vpo2coa9c.jpg",
            intro: "Được chế biến từ cây tỏi đực, loại tỏi không sinh củ và có vị cay nhẹ, thơm đặc trưng, khi ăn thấy ấm bụng, tạo nên cảm giác lạ miệng.",
            ingredients: ["Thân tỏi non Lý Sơn", "Đậu phộng rang", "Rau thơm", "Nước mắm chua ngọt"],
            taste: "Tỏi non được trộn cùng các nguyên liệu dân dã tạo vị cay nồng nhẹ, giòn sần sật và bùi béo.",
            relatedTourId: "ly-son-volcano"
        },
        "mi-quang": {
            shortTitle: "Mì Quảng",
            shortDesc: "Sợi mì gạo vàng óng, nước dùng đậm đà chan vừa đủ, thơm mùi nghệ.",
            title: "Mì Quảng Phú Chiêm - Hội An",
            location: "Hội An, Quảng Nam",
            image: "https://lalago.vn/wp-content/uploads/2025/06/du-lich-hoi-an-2-ngay-1-dem-23.webp",
            intro: "Với sợi mì gạo vàng óng, nước dùng đậm đà chan vừa đủ dùng, sánh nhẹ thơm mùi nghệ, hòa quyện cùng vị ngọt của tôm thịt, vị béo của đậu phộng, vị giòn của bánh tráng và vị tươi mát của rau sống.",
            ingredients: ["Sợi mì Quảng", "Tôm, thịt heo/gà", "Bánh tráng nướng", "Đậu phộng, rau sống"],
            taste: "Hương vị dân dã khó quên với nước lèo đậm đà, sợi mì dai mềm và mùi thơm của nén, nghệ.",
            relatedTourId: "hoi-an-memory"
        }
    }
};

// COMPONENT RENDERING (Client Side)

function renderNavbar() {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (!navbarPlaceholder) return;

    // Determine basic active state
    const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');
    
    const html = `
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
            <a class="navbar-brand" href="index.html"><i class="fa-solid fa-umbrella-beach me-2"></i>Sea Sun Travel</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item"><a class="nav-link" href="index.html#home">Trang chủ</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html#about">Giới thiệu</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html#tours">Tour Nổi Bật</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html#cuisine">Ẩm thực</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html#accommodation">Lưu trú</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html#contact">Liên hệ</a></li>
                    <li class="nav-item ms-lg-3 mt-3 mt-lg-0">
                        <a href="index.html#newsletter" class="btn btn-book">Nhận ưu đãi</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`;
    
    navbarPlaceholder.innerHTML = html;

    // Attach Scroll Listener
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { navbar.classList.add('navbar-scrolled'); } 
        else { navbar.classList.remove('navbar-scrolled'); }
    });

    // Attach Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"], a[href^="index.html#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // If on detail page and clicking anchor, allow default behavior to go to index
            if (!isIndex && href.startsWith('index.html')) return;

            // If on index page or anchor is just #id
            if (isIndex || href.startsWith('#')) {
                const targetId = href.includes('#') ? href.split('#')[1] : null;
                if (!targetId) return;
                
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    window.scrollTo({ top: targetElement.offsetTop - navHeight, behavior: 'smooth' });
                    
                    // Close mobile menu
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                        if (bsCollapse) bsCollapse.hide();
                    }
                }
            }
        });
    });
}

function renderFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) return;

    const html = `
    <footer id="contact">
        <div class="container">
            <div class="row gy-4">
                <div class="col-lg-5 col-md-12">
                    <a href="#" class="footer-logo"><i class="fa-solid fa-umbrella-beach me-2"></i>Sea Sun Travel</a>
                    <p class="text-secondary pe-4">Chuyên cung cấp các tour du lịch biển đảo hàng đầu tại Việt Nam. Cam kết mang lại trải nghiệm đáng nhớ cho mỗi hành trình.</p>
                    <div class="social-icons mt-3">
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                        <a href="#"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="mb-3">Liên Kết Nhanh</h5>
                    <div class="footer-links">
                        <a href="index.html#home">Trang chủ</a>
                        <a href="index.html#about">Về chúng tôi</a>
                        <a href="index.html#tours">Tour du lịch</a>
                        <a href="index.html#cuisine">Ẩm thực</a>
                        <a href="index.html#accommodation">Lưu trú</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="mb-3">Thông Tin Liên Hệ</h5>
                    <div class="footer-links">
                        <p class="text-secondary mb-2"><i class="fa-solid fa-phone me-2"></i>090 123 4567</p>
                        <p class="text-secondary mb-2"><i class="fa-solid fa-envelope me-2"></i>info@seasuntravel.vn</p>
                        <p class="text-secondary"><i class="fa-solid fa-map-location-dot me-2"></i>Nguyễn Văn Cừ Nối Dài, Ninh Kiều, TP. Cần Thơ</p>
                    </div>
                </div>
            </div>

            <div class="row mt-5 mb-3">
                <div class="col-12 text-center">
                    <p class="text-white-50 small text-uppercase mb-2" style="letter-spacing: 1px;">Chấp nhận thanh toán</p>
                    <div class="d-flex justify-content-center flex-wrap">
                        <img src="${SiteData.images.payment.vcb}" onerror="this.style.display='none'" alt="Vietcombank" class="payment-icon">
                        <img src="${SiteData.images.payment.onepay}" onerror="this.style.display='none'" alt="OnePay" class="payment-icon">
                        <img src="${SiteData.images.payment.visa}" onerror="this.style.display='none'" alt="Visa" class="payment-icon">
                        <img src="${SiteData.images.payment.mastercard}" onerror="this.style.display='none'" alt="Mastercard" class="payment-icon">
                        <img src="${SiteData.images.payment.jcb}" onerror="this.style.display='none'" alt="JCB" class="payment-icon">
                    </div>
                </div>
            </div>
            
            <div class="border-top border-secondary pt-4 text-center text-secondary small">
                &copy; 2026 Sea Sun Travel. All Rights Reserved. Designed by Cookie.
            </div>
        </div>
    </footer>`;

    footerPlaceholder.innerHTML = html;
}

// BACK TO TOP BUTTON LOGIC
function setupBackToTop() {
    const btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    btn.setAttribute('aria-label', 'Lên đầu trang');
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// UTILITIES
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function handleNewsletter() {
    const btn = document.getElementById('newsletter-btn');
    if(!btn) return;

    let toastTimeout; 

    btn.addEventListener('click', function() {
        const emailInput = document.getElementById('newsletter-email');
        const toast = document.getElementById('custom-toast');
        const email = emailInput.value.trim();

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (toastTimeout) clearTimeout(toastTimeout);
        emailInput.classList.remove('is-invalid-custom');

        if (emailRegex.test(email)) {
            toast.innerHTML = '<i class="fa-solid fa-circle-check me-2"></i><span>Đã nhận được email đăng ký của bạn</span>';
            toast.className = "show success";
            emailInput.value = "";
        } else {
            toast.innerHTML = '<i class="fa-solid fa-circle-exclamation me-2"></i><span>Email đăng ký của bạn không hợp lệ</span>';
            toast.className = "show error";
            emailInput.classList.add('is-invalid-custom');
            emailInput.value = "";
        }

        toastTimeout = setTimeout(function(){ 
            toast.classList.remove("show");
        }, 3000);
    });
    
    document.getElementById('newsletter-email').addEventListener('input', function() {
        this.classList.remove('is-invalid-custom');
    });
}

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderFooter();
    handleNewsletter();
    setupBackToTop();
});
