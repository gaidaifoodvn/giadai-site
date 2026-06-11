/* ============================================================
   GIA DAI — language switcher (EN / VI)
   Walks the page, swaps text to Vietnamese and back, and
   remembers the choice in localStorage so it sticks across
   pages and reloads.
   ============================================================ */
(function () {
  'use strict';

  /* English → Vietnamese dictionary. Keys are the EXACT visible
     English text. Add more pages' strings here over time. */
  var VI = {
    /* top bar */
    "Premium Vietnamese Seafood & Agricultural Export · Since 2002": "Xuất Khẩu Hải Sản & Nông Sản Việt Nam Cao Cấp · Từ Năm 2002",

    /* nav */
    "Home": "Trang Chủ",
    "Products": "Sản Phẩm",
    "Quality": "Chất Lượng",
    "Wholesale": "Bán Sỉ",
    "About": "Giới Thiệu",
    "About Us": "Về Chúng Tôi",
    "Contact": "Liên Hệ",
    "Request a Quote": "Yêu Cầu Báo Giá",
    "Search products…": "Tìm sản phẩm…",

    /* hero */
    "Seafood & Agricultural Export": "Xuất Khẩu Hải Sản & Nông Sản",
    "From the Mekong": "Từ Sông Mekong",
    "to the world.": "đến toàn thế giới.",
    "Premium Vietnamese Seafood & Agriculture · Since 2002": "Hải Sản & Nông Sản Việt Nam Cao Cấp · Từ Năm 2002",
    "We source and export premium Vietnamese seafood and agricultural products, from frozen and dried seafood to prepared foods, shipping direct from Ho Chi Minh City to importers worldwide.": "Chúng tôi thu mua và xuất khẩu hải sản và nông sản Việt Nam cao cấp, từ hải sản đông lạnh và khô đến thực phẩm chế biến, giao hàng trực tiếp từ Thành phố Hồ Chí Minh đến các nhà nhập khẩu trên toàn thế giới.",
    "Browse Catalogue": "Xem Danh Mục",

    /* about */
    "About Us ": "Về Chúng Tôi",
    "Your Vietnamese food specialist": "Chuyên gia thực phẩm Việt Nam của bạn",
    "A privately owned import and export company supplying premium Vietnamese seafood and agricultural products from Ho Chi Minh City to markets at home and abroad. More than twenty years on, our promise is simple: good price, good quality, good service.": "Công ty xuất nhập khẩu tư nhân cung cấp hải sản và nông sản Việt Nam cao cấp từ Thành phố Hồ Chí Minh đến thị trường trong và ngoài nước. Hơn hai mươi năm qua, cam kết của chúng tôi rất đơn giản: giá tốt, chất lượng tốt, dịch vụ tốt.",
    "Cold-Chain Logistics": "Logistics Chuỗi Lạnh",
    "Temperature-controlled handling and shipping keep frozen and chilled lines at peak condition, port to port.": "Xử lý và vận chuyển kiểm soát nhiệt độ giữ cho hàng đông lạnh và ướp lạnh ở tình trạng tốt nhất, từ cảng đến cảng.",
    "Direct Sourcing & Export": "Thu Mua & Xuất Khẩu Trực Tiếp",
    "Bought straight from trusted Vietnamese farms and fisheries, then shipped worldwide with full documentation.": "Mua trực tiếp từ các trang trại và ngư trường Việt Nam uy tín, sau đó xuất khẩu toàn cầu với đầy đủ chứng từ.",
    "Est. Since": "Thành Lập Từ",

    /* trio */
    "Seafood": "Hải Sản",
    "Premium Seafood": "Hải Sản Cao Cấp",
    "Frozen and dried shrimp, fish, squid and crab from Vietnam's coast and the Mekong Delta.": "Tôm, cá, mực và cua đông lạnh và khô từ bờ biển Việt Nam và Đồng bằng sông Cửu Long.",
    "Agriculture": "Nông Sản",
    "Agricultural Products": "Sản Phẩm Nông Nghiệp",
    "Frozen and dried agricultural goods, from chili and okra to jackfruit, nuts and coconut.": "Nông sản đông lạnh và khô, từ ớt và đậu bắp đến mít, các loại hạt và dừa.",
    "Food": "Thực Phẩm",
    "Prepared Food": "Thực Phẩm Chế Biến",
    "Ready-to-cook Vietnamese specialities and value-added dishes, packed for export.": "Các món đặc sản Việt Nam ăn liền và món giá trị gia tăng, đóng gói để xuất khẩu.",

    /* portfolio */
    "Product Portfolio": "Danh Mục Sản Phẩm",
    "Explore our categories": "Khám phá các danh mục",
    "View full catalogue": "Xem toàn bộ danh mục",
    "frozen fresh seafood": "hải sản tươi đông lạnh",
    "dried seafood": "hải sản khô",
    "frozen fresh agricultural": "nông sản tươi đông lạnh",
    "dried agricultural": "nông sản khô",
    "prepared food": "thực phẩm chế biến",
    "exotic dried fruit": "trái cây sấy đặc sản",
    "Frozen Fresh Seafood": "Hải Sản Tươi Đông Lạnh",
    "Dried Seafood": "Hải Sản Khô",
    "Frozen Fresh Agricultural": "Nông Sản Tươi Đông Lạnh",
    "Dried Agricultural": "Nông Sản Khô",
    "Exotic Dried Fruit": "Trái Cây Sấy Đặc Sản",

    /* popular products */
    "Featured": "Nổi Bật",
    "Popular products": "Sản phẩm phổ biến",
    "View all": "Xem tất cả",
    "Frozen": "Đông Lạnh",
    "Dried": "Khô",
    "Frozen Salted Crab": "Ba Khía Đông Lạnh",
    "Dried Gourami Fish": "Khô Cá Sặc",
    "Frozen Red Chili": "Ớt Đỏ Đông Lạnh",
    "Shrimp Spring Rolls": "Chả Giò Rế Tôm Cua",
    "Export ready": "Sẵn sàng xuất khẩu",
    "Enquire": "Liên hệ",

    /* quality */
    "Quality You Can Trust": "Chất Lượng Bạn Có Thể Tin Tưởng",
    "Quality & Standards": "Chất Lượng & Tiêu Chuẩn",
    "US Registered": "Đăng Ký Tại Hoa Kỳ",
    "Importer since 2012": "Nhà nhập khẩu từ 2012",
    "Cold Chain": "Chuỗi Lạnh",
    "Temperature controlled": "Kiểm soát nhiệt độ",
    "Controlled Source": "Nguồn Kiểm Soát",
    "Trusted farms": "Trang trại uy tín",
    "Traceable": "Truy Xuất Nguồn Gốc",
    "Lot-level records": "Hồ sơ theo lô",
    "Inspected": "Kiểm Định",
    "Every batch": "Mỗi lô hàng",
    "20+ Years": "20+ Năm",
    "Since 2002": "Từ năm 2002",
    "Export Ready": "Sẵn Sàng Xuất Khẩu",
    "Full documentation": "Đầy đủ chứng từ",
    "See All": "Xem Tất Cả",
    "Our standards": "Tiêu chuẩn của chúng tôi",

    /* duo banner */
    "Export Catalogue": "Danh Mục Xuất Khẩu",
    "Product Catalogue": "Danh Mục Sản Phẩm",
    "Browse our full range of Vietnamese seafood and agricultural products, with pack sizes and export specs.": "Xem toàn bộ các sản phẩm hải sản và nông sản Việt Nam của chúng tôi, kèm quy cách đóng gói và thông số xuất khẩu.",
    "Request Now": "Yêu Cầu Ngay",
    "Partner With Us?": "Hợp Tác Cùng Chúng Tôi?",
    "Bring the richness of Vietnamese seafood and produce to your market with a supplier you can rely on.": "Mang sự phong phú của hải sản và nông sản Việt Nam đến thị trường của bạn với một nhà cung cấp đáng tin cậy.",
    "Become a Buyer": "Trở Thành Nhà Mua Hàng",

    /* contact cta */
    "Let's work together": "Hãy hợp tác cùng nhau",
    "Ready to source with confidence?": "Sẵn sàng thu mua với sự tự tin?",
    "Tell us what you need and our team will respond with pricing and availability. Give us a chance to exceed your expectations.": "Hãy cho chúng tôi biết nhu cầu của bạn và đội ngũ của chúng tôi sẽ phản hồi với giá cả và tình trạng hàng. Hãy cho chúng tôi cơ hội vượt qua mong đợi của bạn.",
    "Email Us": "Gửi Email",
    "Get in touch": "Liên Hệ",
    "Hotline": "Đường Dây Nóng",
    "Headquarters": "Trụ Sở Chính",
    "Ho Chi Minh City, Vietnam": "Thành phố Hồ Chí Minh, Việt Nam",

    /* footer */
    "Sourcing and exporting premium seafood and agricultural products to the world since 2002.": "Thu mua và xuất khẩu hải sản và nông sản cao cấp ra thế giới từ năm 2002.",
    "Explore": "Khám Phá",
    "Lot 4-6-8, 1A Street, Tan Tao Industrial Park, Tan Tao A Ward, Binh Tan, HCMC, Vietnam": "Lô 4-6-8, Đường 1A, KCN Tân Tạo, P. Tân Tạo A, Bình Tân, TP.HCM, Việt Nam",
    "© 2026 Gia Dai. All rights reserved.": "© 2026 Gia Dai. Bảo lưu mọi quyền.",
    "Better than your expectations": "Tốt hơn mong đợi của bạn"
  };

  /* ---- additional strings: inner pages ---- */
  Object.assign(VI, {
    /* shared */
    "Talk to Sales": "Trao Đổi Với Bộ Phận Kinh Doanh",
    "Request a quote": "Yêu cầu báo giá",
    "View": "Xem",
    "products": "sản phẩm",
    "Quality & standards": "Chất lượng & tiêu chuẩn",

    /* products page */
    "Product Range": "Dòng Sản Phẩm",
    "The full catalogue": "Toàn bộ danh mục",
    "Premium Vietnamese seafood and agricultural products across five categories, sourced direct and packed to your export specification. Pricing, pack sizes and minimums are available on enquiry.": "Hải sản và nông sản Việt Nam cao cấp thuộc năm danh mục, thu mua trực tiếp và đóng gói theo quy cách xuất khẩu của bạn. Giá cả, quy cách đóng gói và số lượng tối thiểu có sẵn khi liên hệ.",
    "Get the full price list & export specs": "Nhận bảng giá đầy đủ & thông số xuất khẩu",
    "Tell us your target products, volumes and destination port, and we will respond with pricing, pack details and lead times.": "Hãy cho chúng tôi biết sản phẩm, sản lượng và cảng đích của bạn, chúng tôi sẽ phản hồi với giá cả, chi tiết đóng gói và thời gian giao hàng.",

    /* about page */
    "A privately owned import and export company, sourcing and supplying premium Vietnamese seafood and agricultural products for both domestic and international markets. We have built our name on three things: good price, good quality and good service.": "Công ty xuất nhập khẩu tư nhân, thu mua và cung cấp hải sản và nông sản Việt Nam cao cấp cho cả thị trường trong nước và quốc tế. Chúng tôi xây dựng tên tuổi của mình dựa trên ba điều: giá tốt, chất lượng tốt và dịch vụ tốt.",
    "Our Story": "Câu Chuyện Của Chúng Tôi",
    "From the Mekong Delta to the world": "Từ Đồng bằng sông Cửu Long ra thế giới",
    "Founded in 2002, Gia Dai has spent more than two decades sourcing and supplying Vietnamese seafood and agricultural products. We buy direct from trusted producers and ship to customers at home and overseas.": "Thành lập năm 2002, Gia Dai đã có hơn hai thập kỷ thu mua và cung cấp hải sản và nông sản Việt Nam. Chúng tôi mua trực tiếp từ các nhà sản xuất uy tín và giao hàng cho khách hàng trong và ngoài nước.",
    "We work with green farms and fisheries where strict standards keep antibiotics and disease under control, so the products we ship are clean, safe and consistent. In 2012 we became a registered importer to the United States, opening the door to demanding international buyers.": "Chúng tôi hợp tác với các trang trại và ngư trường xanh, nơi các tiêu chuẩn nghiêm ngặt kiểm soát kháng sinh và dịch bệnh, nhờ đó sản phẩm chúng tôi xuất đi luôn sạch, an toàn và ổn định. Năm 2012, chúng tôi trở thành nhà nhập khẩu đăng ký tại Hoa Kỳ, mở ra cánh cửa đến với những khách hàng quốc tế khắt khe.",
    "Established": "Thành lập",
    "Years experience": "Năm kinh nghiệm",
    "Product categories": "Danh mục sản phẩm",
    "Products supplied": "Sản phẩm cung cấp",
    "Why Gia Dai": "Tại Sao Chọn Gia Dai",
    "01 · Good Price": "01 · Giá Tốt",
    "02 · Good Quality": "02 · Chất Lượng Tốt",
    "03 · Good Service": "03 · Dịch Vụ Tốt",
    "Direct value": "Giá trị trực tiếp",
    "Buying direct and keeping our overheads lean keeps our pricing competitive for buyers of every size.": "Mua trực tiếp và giữ chi phí vận hành tinh gọn giúp giá của chúng tôi cạnh tranh với người mua ở mọi quy mô.",
    "Clean & safe": "Sạch & an toàn",
    "Controlled sourcing and an unbroken cold chain protect quality from the farm to the container.": "Nguồn cung được kiểm soát và chuỗi lạnh không gián đoạn bảo vệ chất lượng từ trang trại đến container.",
    "Reliable": "Đáng tin cậy",
    "Consistent supply, clear export documentation and a team that responds quickly.": "Nguồn cung ổn định, chứng từ xuất khẩu rõ ràng và đội ngũ phản hồi nhanh chóng.",
    "Milestones": "Cột Mốc",
    "How we grew": "Hành trình phát triển",
    "Founded in Ho Chi Minh City": "Thành lập tại Thành phố Hồ Chí Minh",
    "Began sourcing and trading Vietnamese seafood and agricultural products.": "Bắt đầu thu mua và kinh doanh hải sản và nông sản Việt Nam.",
    "Registered US importer": "Nhà nhập khẩu đăng ký tại Hoa Kỳ",
    "Became a legal importer to the United States, reaching demanding international buyers.": "Trở thành nhà nhập khẩu hợp pháp vào Hoa Kỳ, tiếp cận những khách hàng quốc tế khắt khe.",
    "20+ yrs": "20+ năm",
    "Two decades on": "Hai thập kỷ phát triển",
    "A trusted supplier across five categories of seafood and agricultural products.": "Một nhà cung cấp đáng tin cậy trên năm danh mục hải sản và nông sản.",
    "Today": "Hiện Nay",
    "Growing worldwide": "Vươn ra toàn cầu",
    "Supplying domestic and international markets, and welcoming new wholesale partners.": "Cung cấp cho thị trường trong nước và quốc tế, đồng thời chào đón các đối tác bán sỉ mới.",
    "Become a buyer": "Trở thành nhà mua hàng",
    "Let's build a lasting supply": "Cùng xây dựng nguồn cung lâu dài",
    "Open an account and source premium Vietnamese seafood and produce, with pricing, specs and lead times to match.": "Mở tài khoản và thu mua hải sản và nông sản Việt Nam cao cấp, kèm giá cả, thông số và thời gian giao hàng phù hợp.",

    /* certifications page */
    "How we protect quality": "Cách chúng tôi bảo vệ chất lượng",
    "Standards we work to": "Tiêu chuẩn chúng tôi tuân thủ",
    "Quality runs through everything we do, from the farms and fisheries we buy from to the container we load. We have been a registered importer to the United States since 2012, and we stand behind every order to keep buyers confident in what they receive.": "Chất lượng hiện diện trong mọi việc chúng tôi làm, từ các trang trại và ngư trường chúng tôi thu mua đến container chúng tôi đóng hàng. Chúng tôi là nhà nhập khẩu đăng ký tại Hoa Kỳ từ năm 2012, và đứng sau mọi đơn hàng để người mua luôn tin tưởng vào những gì họ nhận được.",
    "Monitored farms & fisheries": "Trang trại & ngư trường được giám sát",
    "Quality checks each batch": "Kiểm tra chất lượng mỗi lô",
    "Experience since 2002": "Kinh nghiệm từ 2002",
    "Full export documentation": "Đầy đủ chứng từ xuất khẩu",
    "Reliable Supply": "Nguồn Cung Ổn Định",
    "Consistent volumes": "Sản lượng ổn định",
    "Our supply chain": "Chuỗi cung ứng của chúng tôi",
    "Cold chain you can rely on": "Chuỗi lạnh đáng tin cậy",
    "From source to container, every order is kept in a temperature-controlled, fully traceable cold chain on its way to your port.": "Từ nguồn đến container, mỗi đơn hàng đều được giữ trong chuỗi lạnh kiểm soát nhiệt độ, truy xuất đầy đủ trên đường đến cảng của bạn.",
    "Cold-Chain Handling": "Xử Lý Chuỗi Lạnh",
    "Frozen and chilled lines stay temperature-controlled from source through to export.": "Hàng đông lạnh và ướp lạnh được kiểm soát nhiệt độ từ nguồn đến khi xuất khẩu.",
    "Full Traceability": "Truy Xuất Đầy Đủ",
    "Lot-level documentation follows each order from source through to export.": "Chứng từ theo từng lô đi cùng mỗi đơn hàng từ nguồn đến khi xuất khẩu.",
    "Our promise": "Cam kết của chúng tôi",
    "Fair, direct": "Công bằng, trực tiếp",
    "Buying direct and keeping our overheads lean lets us keep pricing competitive without cutting corners.": "Mua trực tiếp và giữ chi phí vận hành tinh gọn giúp chúng tôi duy trì giá cạnh tranh mà không cắt giảm chất lượng.",
    "Consistent": "Ổn định",
    "Careful cold-chain handling and inspection protect quality in every shipment we send.": "Xử lý chuỗi lạnh cẩn thận và kiểm định bảo vệ chất lượng trong mọi lô hàng chúng tôi gửi đi.",
    "Dependable": "Đáng tin cậy",
    "Clear documentation, reliable supply and a team that answers when you need it.": "Chứng từ rõ ràng, nguồn cung ổn định và đội ngũ luôn sẵn sàng khi bạn cần.",
    "Where we ship": "Nơi chúng tôi giao hàng",
    "From source to your market": "Từ nguồn đến thị trường của bạn",
    "We supply the domestic Vietnamese market and export internationally, with United States import registration in place since 2012. Tell us your destination port and we will confirm specs, pricing and lead times.": "Chúng tôi cung cấp cho thị trường nội địa Việt Nam và xuất khẩu quốc tế, với đăng ký nhập khẩu vào Hoa Kỳ từ năm 2012. Hãy cho chúng tôi biết cảng đích của bạn và chúng tôi sẽ xác nhận thông số, giá cả và thời gian giao hàng.",
    "United States": "Hoa Kỳ",
    "Domestic Vietnam": "Việt Nam (nội địa)",
    "International markets": "Thị trường quốc tế",
    "Source with confidence": "Thu mua với sự tự tin",
    "Quality you can taste, supply you can trust": "Chất lượng cảm nhận được, nguồn cung đáng tin",
    "Open an account and source premium Vietnamese seafood and produce backed by two decades of experience.": "Mở tài khoản và thu mua hải sản và nông sản Việt Nam cao cấp được hậu thuẫn bởi hai thập kỷ kinh nghiệm.",

    /* wholesale page */
    "Wholesale & Export": "Bán Sỉ & Xuất Khẩu",
    "We supply importers, distributors, supermarkets and foodservice groups with premium Vietnamese seafood and agricultural products, packed to your specification and shipped from Ho Chi Minh City.": "Chúng tôi cung cấp cho các nhà nhập khẩu, nhà phân phối, siêu thị và đơn vị dịch vụ ẩm thực hải sản và nông sản Việt Nam cao cấp, đóng gói theo quy cách của bạn và giao từ Thành phố Hồ Chí Minh.",
    "Why buy from us": "Vì sao mua từ chúng tôi",
    "One trusted supplier": "Một nhà cung cấp đáng tin cậy",
    "01 · Range": "01 · Chủng Loại",
    "02 · Quality": "02 · Chất Lượng",
    "03 · Flexible": "03 · Linh Hoạt",
    "Five categories": "Năm danh mục",
    "Seafood, agriculture and prepared food in one supplier, so you can consolidate your Vietnamese sourcing.": "Hải sản, nông sản và thực phẩm chế biến trong một nhà cung cấp, giúp bạn hợp nhất nguồn cung từ Việt Nam.",
    "Cold-chain handling, controlled sourcing and careful inspection, with the documentation your market needs.": "Xử lý chuỗi lạnh, nguồn cung được kiểm soát và kiểm định cẩn thận, kèm chứng từ mà thị trường của bạn cần.",
    "Your spec": "Theo quy cách của bạn",
    "Pack sizes, grading, labelling and Incoterms tailored to your destination and channel.": "Quy cách đóng gói, phân loại, nhãn mác và điều kiện Incoterms phù hợp với điểm đến và kênh phân phối của bạn.",
    "How it works": "Quy trình",
    "From enquiry to container": "Từ yêu cầu đến container",
    "Enquire": "Liên hệ",
    "Send your target products, volumes and destination port.": "Gửi sản phẩm, sản lượng và cảng đích bạn mong muốn.",
    "Quote & samples": "Báo giá & mẫu",
    "We reply with pricing, specs, lead times and samples on request.": "Chúng tôi phản hồi với giá cả, thông số, thời gian giao hàng và mẫu khi có yêu cầu.",
    "Confirm order": "Xác nhận đơn hàng",
    "Agree pack, labelling and Incoterms, then we schedule sourcing and shipment.": "Thống nhất đóng gói, nhãn mác và Incoterms, sau đó chúng tôi lên lịch thu mua và giao hàng.",
    "Ship & document": "Giao hàng & chứng từ",
    "Cold-chain export with full documentation to your port.": "Xuất khẩu chuỗi lạnh với đầy đủ chứng từ đến cảng của bạn.",
    "Tell us what you need": "Hãy cho chúng tôi biết nhu cầu của bạn",
    "Share your requirements and we will respond with pricing and availability, usually within one business day.": "Chia sẻ yêu cầu của bạn và chúng tôi sẽ phản hồi với giá cả và tình trạng hàng, thường trong vòng một ngày làm việc.",
    "What you'll get": "Bạn sẽ nhận được",
    "Product specs and pack configurations": "Thông số sản phẩm và cấu hình đóng gói",
    "FOB or CIF pricing for your port": "Giá FOB hoặc CIF cho cảng của bạn",
    "Lead times and minimum order quantities": "Thời gian giao hàng và số lượng đặt hàng tối thiểu",
    "Company": "Công ty",
    "Country / market": "Quốc gia / thị trường",
    "Contact name": "Tên người liên hệ",
    "Products of interest": "Sản phẩm quan tâm",
    "Estimated volume": "Sản lượng dự kiến",
    "Details": "Chi tiết",
    "Send Enquiry": "Gửi Yêu Cầu",
    "Multiple / not sure yet": "Nhiều loại / chưa chắc chắn",
    "Not sure": "Chưa chắc chắn",
    "e.g. 2 x 40ft / month": "vd: 2 x 40ft / tháng",
    "Destination port, packing, labelling, timelines…": "Cảng đích, đóng gói, nhãn mác, thời gian…",
    "Thanks, your enquiry has been received. Our export team will be in touch within one business day.": "Cảm ơn bạn, yêu cầu của bạn đã được tiếp nhận. Đội ngũ xuất khẩu của chúng tôi sẽ liên hệ trong vòng một ngày làm việc.",

    /* contact page */
    "Talk to our team": "Trao đổi với đội ngũ của chúng tôi",
    "Phone": "Điện thoại",
    "Head office": "Văn phòng chính",
    "Lot 4-6-8, 1A Street, Tan Tao Industrial Park,": "Lô 4-6-8, Đường 1A, KCN Tân Tạo,",
    "Tan Tao A Ward, Binh Tan District, Ho Chi Minh City, Vietnam": "P. Tân Tạo A, Q. Bình Tân, TP. Hồ Chí Minh, Việt Nam",
    "Name": "Họ tên",
    "Subject": "Chủ đề",
    "Message": "Nội dung",
    "Pricing & availability": "Giá cả & tình trạng hàng",
    "Product samples": "Mẫu sản phẩm",
    "General enquiry": "Liên hệ chung",
    "How can we help?": "Chúng tôi có thể giúp gì cho bạn?",
    "Send Message": "Gửi Tin Nhắn",
    "Thanks, your message has been received. We'll reply within one business day.": "Cảm ơn bạn, tin nhắn của bạn đã được tiếp nhận. Chúng tôi sẽ phản hồi trong vòng một ngày làm việc.",

    /* product detail page */
    "More from this range": "Thêm từ dòng sản phẩm này",
    "Related products": "Sản phẩm liên quan",
    "Interested in this product?": "Quan tâm đến sản phẩm này?",
    "Category": "Danh mục",
    "Vietnamese name": "Tên tiếng Việt",
    "Packaging": "Quy cách đóng gói",
    "Availability": "Tình trạng",
    "Markets": "Thị trường",
    "Minimum order": "Số lượng tối thiểu",
    "United States, domestic & international": "Hoa Kỳ, nội địa & quốc tế",
    "On enquiry": "Theo yêu cầu"
  });

  var STORE_KEY = 'giadai-lang';

  /* collect translatable text nodes once, caching the English original */
  function collectNodes() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p) return NodeFilter.FILTER_REJECT;
        var tag = p.nodeName;
        if (tag === 'SCRIPT' || tag === 'STYLE') return NodeFilter.FILTER_REJECT;
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    var node;
    while ((node = walker.nextNode())) nodes.push(node);
    return nodes;
  }

  /* attributes worth translating (placeholders, etc.) */
  function attrTargets() {
    return Array.prototype.map.call(
      document.querySelectorAll('[placeholder]'),
      function (el) { return el; }
    );
  }

  function apply(lang) {
    var nodes = collectNodes();
    nodes.forEach(function (n) {
      if (n.__en === undefined) n.__en = n.nodeValue;          // cache original
      var key = n.__en.trim();
      var lead = n.__en.match(/^\s*/)[0];
      var tail = n.__en.match(/\s*$/)[0];
      if (lang === 'vi' && VI[key]) n.nodeValue = lead + VI[key] + tail;
      else n.nodeValue = n.__en;                                 // restore EN
    });

    attrTargets().forEach(function (el) {
      if (el.__phEn === undefined) el.__phEn = el.getAttribute('placeholder');
      var key = (el.__phEn || '').trim();
      if (lang === 'vi' && VI[key]) el.setAttribute('placeholder', VI[key]);
      else el.setAttribute('placeholder', el.__phEn);
    });

    document.documentElement.setAttribute('lang', lang === 'vi' ? 'vi' : 'en');

    /* toggle the active pill in the EN/VI switch */
    document.querySelectorAll('.lang a').forEach(function (a) {
      var t = a.textContent.trim().toUpperCase();
      a.classList.toggle('on', (lang === 'vi' && t === 'VI') || (lang !== 'vi' && t === 'EN'));
    });
  }

  function setLang(lang) {
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
    apply(lang);
  }

  function init() {
    var saved = 'en';
    try { saved = localStorage.getItem(STORE_KEY) || 'en'; } catch (e) {}

    /* wire the EN / VI links */
    document.querySelectorAll('.lang a').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var t = a.textContent.trim().toUpperCase();
        setLang(t === 'VI' ? 'vi' : 'en');
      });
    });

    apply(saved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
