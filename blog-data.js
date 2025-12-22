const blogdata = [
  {
    id: 1,
    title: "Socket Programming cơ bản với Python",
    date: "20/12/2025",
    cat: "CODE",
    desc: "Cách tạo client-server đơn giản bằng thư viện socket.",
    content: `
      <p>Lập trình Socket là nền tảng của mọi ứng dụng mạng. Trong bài viết này, chúng ta sẽ đi sâu vào việc xây dựng một mô hình Client-Server đơn giản sử dụng Python.</p>
      <h3>1. Socket là gì?</h3>
      <p>Socket là một điểm cuối (endpoint) trong liên kết truyền thông hai chiều giữa hai chương trình chạy trên mạng.</p>
      <h3>2. Code ví dụ: Echo Server</h3>
      <pre style="background:#f4f4f4; padding:15px; border-radius:8px;"><code>import socket
HOST = '127.0.0.1'
PORT = 65432
# ... code continues ...
</code></pre>
    `
  },
  {
    id: 2,
    title: "Phân tích gói tin với Wireshark",
    date: "18/12/2025",
    cat: "TOOLS",
    desc: "Hướng dẫn bắt và đọc các gói tin HTTP, TCP trong mạng LAN.",
    content: `
      <p>Wireshark là công cụ phân tích giao thức mạng phổ biến nhất thế giới.</p>
      <h3>1. Tại sao cần Wireshark?</h3>
      <p>Giúp bạn nhìn thấy dòng chảy dữ liệu khi gặp lỗi kết nối.</p>
      <h3>2. Bộ lọc quan trọng</h3>
      <ul>
        <li>ip.addr == 192.168.1.10</li>
        <li>tcp.port == 80</li>
      </ul>
    `
  },
  {
    id: 3,
    title: "Mô hình OSI vs TCP/IP",
    date: "15/12/2025",
    cat: "THEORY",
    desc: "Sự khác biệt thực tế giữa lý thuyết và triển khai hiện đại.",
    content: `
      <p>So sánh mô hình 7 tầng OSI và 4 tầng TCP/IP.</p>
    `
  },
  {
    id: 4,
    title: "Xây dựng HTTP Server từ con số 0",
    date: "10/12/2025",
    cat: "CODE",
    desc: "Hiểu sâu về giao thức HTTP bằng cách tự viết server.",
    content: `
      <p>Tự viết Web Server đơn giản dùng Socket.</p>
    `
  },
  {
    id: 5,
    title: "Load Balancing là gì?",
    date: "05/12/2025",
    cat: "SYSTEM",
    desc: "Các thuật toán cân bằng tải: Round Robin, Least Connections.",
    content: `
      <p>Giải pháp phân phối lưu lượng truy cập đến nhiều server.</p>
      <h3>Các thuật toán:</h3>
      <ul>
        <li>Round Robin</li>
        <li>Least Connections</li>
      </ul>
    `
  },
  {
    id: 6,
    title: "Websocket vs REST API",
    date: "01/12/2025",
    cat: "WEB",
    desc: "Khi nào cần giao tiếp thời gian thực?",
    content: `
      <p>So sánh giao tiếp thời gian thực và Request-Response truyền thống.</p>
    `
  },
  {
    id: 7,
    title: "Bảo mật mạng với Firewall (iptables)",
    date: "28/11/2025",
    cat: "SECURITY",
    desc: "Cấu hình iptables cơ bản trên Linux.",
    content: `
      <p>Sử dụng iptables để chặn kết nối lạ.</p>
    `
  },
  {
    id: 8,
    title: "Tìm hiểu về DNS Lookup",
    date: "25/11/2025",
    cat: "NETWORK",
    desc: "Quy trình phân giải tên miền.",
    content: `
      <p>Điều gì xảy ra khi bạn gõ google.com?</p>
    `
  },
  {
    id: 9,
    title: "Đa luồng (Multi-threading) trong Server",
    date: "20/11/2025",
    cat: "CODE",
    desc: "Xử lý nhiều kết nối đồng thời.",
    content: `
      <p>Giải quyết vấn đề Blocking I/O bằng đa luồng.</p>
    `
  },
  {
    id: 10,
    title: "SSH Key và cơ chế xác thực",
    date: "15/11/2025",
    cat: "SECURITY",
    desc: "Tại sao nên dùng SSH Key thay vì mật khẩu?",
    content: `
      <p>Sử dụng cặp khóa Public/Private để đăng nhập server an toàn hơn.</p>
      <pre><code>ssh-keygen -t rsa -b 4096</code></pre>
    `
  }
];const blogdata = [
  {
    id: 1,
    title: "Socket Programming cơ bản với Python",
    date: "20/12/2025",
    cat: "CODE",
    desc: "Cách tạo client-server đơn giản bằng thư viện socket.",
    content: `
      <p>Lập trình Socket là nền tảng của mọi ứng dụng mạng. Trong bài viết này, chúng ta sẽ đi sâu vào việc xây dựng một mô hình Client-Server đơn giản sử dụng Python.</p>
      <h3>1. Socket là gì?</h3>
      <p>Socket là một điểm cuối (endpoint) trong liên kết truyền thông hai chiều giữa hai chương trình chạy trên mạng.</p>
      <h3>2. Code ví dụ: Echo Server</h3>
      <pre style="background:#f4f4f4; padding:15px; border-radius:8px;"><code>import socket
HOST = '127.0.0.1'
PORT = 65432
# ... code continues ...
</code></pre>
    `
  },
  {
    id: 2,
    title: "Phân tích gói tin với Wireshark",
    date: "18/12/2025",
    cat: "TOOLS",
    desc: "Hướng dẫn bắt và đọc các gói tin HTTP, TCP trong mạng LAN.",
    content: `
      <p>Wireshark là công cụ phân tích giao thức mạng phổ biến nhất thế giới.</p>
      <h3>1. Tại sao cần Wireshark?</h3>
      <p>Giúp bạn nhìn thấy dòng chảy dữ liệu khi gặp lỗi kết nối.</p>
      <h3>2. Bộ lọc quan trọng</h3>
      <ul>
        <li>ip.addr == 192.168.1.10</li>
        <li>tcp.port == 80</li>
      </ul>
    `
  },
  {
    id: 3,
    title: "Mô hình OSI vs TCP/IP",
    date: "15/12/2025",
    cat: "THEORY",
    desc: "Sự khác biệt thực tế giữa lý thuyết và triển khai hiện đại.",
    content: `
      <p>So sánh mô hình 7 tầng OSI và 4 tầng TCP/IP.</p>
    `
  },
  {
    id: 4,
    title: "Xây dựng HTTP Server từ con số 0",
    date: "10/12/2025",
    cat: "CODE",
    desc: "Hiểu sâu về giao thức HTTP bằng cách tự viết server.",
    content: `
      <p>Tự viết Web Server đơn giản dùng Socket.</p>
    `
  },
  {
    id: 5,
    title: "Load Balancing là gì?",
    date: "05/12/2025",
    cat: "SYSTEM",
    desc: "Các thuật toán cân bằng tải: Round Robin, Least Connections.",
    content: `
      <p>Giải pháp phân phối lưu lượng truy cập đến nhiều server.</p>
      <h3>Các thuật toán:</h3>
      <ul>
        <li>Round Robin</li>
        <li>Least Connections</li>
      </ul>
    `
  },
  {
    id: 6,
    title: "Websocket vs REST API",
    date: "01/12/2025",
    cat: "WEB",
    desc: "Khi nào cần giao tiếp thời gian thực?",
    content: `
      <p>So sánh giao tiếp thời gian thực và Request-Response truyền thống.</p>
    `
  },
  {
    id: 7,
    title: "Bảo mật mạng với Firewall (iptables)",
    date: "28/11/2025",
    cat: "SECURITY",
    desc: "Cấu hình iptables cơ bản trên Linux.",
    content: `
      <p>Sử dụng iptables để chặn kết nối lạ.</p>
    `
  },
  {
    id: 8,
    title: "Tìm hiểu về DNS Lookup",
    date: "25/11/2025",
    cat: "NETWORK",
    desc: "Quy trình phân giải tên miền.",
    content: `
      <p>Điều gì xảy ra khi bạn gõ google.com?</p>
    `
  },
  {
    id: 9,
    title: "Đa luồng (Multi-threading) trong Server",
    date: "20/11/2025",
    cat: "CODE",
    desc: "Xử lý nhiều kết nối đồng thời.",
    content: `
      <p>Giải quyết vấn đề Blocking I/O bằng đa luồng.</p>
    `
  },
  {
    id: 10,
    title: "SSH Key và cơ chế xác thực",
    date: "15/11/2025",
    cat: "SECURITY",
    desc: "Tại sao nên dùng SSH Key thay vì mật khẩu?",
    content: `
      <p>Sử dụng cặp khóa Public/Private để đăng nhập server an toàn hơn.</p>
      <pre><code>ssh-keygen -t rsa -b 4096</code></pre>
    `
  }
];
