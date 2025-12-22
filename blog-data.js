const blogData = [
  {
    id: 1,
    title: "Socket Programming cơ bản với Python",
    date: "20/12/2025",
    cat: "CODE",
    desc: "Cách tạo client-server đơn giản bằng thư viện socket.",
    content: `
      <p>Lập trình Socket là nền tảng của mọi ứng dụng mạng. Trong bài viết này, chúng ta sẽ đi sâu vào việc xây dựng một mô hình Client-Server đơn giản sử dụng Python.</p>
      
      <h3>1. Socket là gì?</h3>
      <p>Socket là một điểm cuối (endpoint) trong liên kết truyền thông hai chiều giữa hai chương trình chạy trên mạng. Một socket bị ràng buộc với một số cổng (port) để tầng TCP có thể định danh ứng dụng mà dữ liệu được định gửi tới.</p>
      
      <h3>2. Quy trình hoạt động (TCP)</h3>
      <ul>
        <li><strong>Server:</strong> Tạo socket -> Bind (gán IP/Port) -> Listen (lắng nghe) -> Accept (chấp nhận kết nối) -> Receive/Send -> Close.</li>
        <li><strong>Client:</strong> Tạo socket -> Connect (kết nối đến IP/Port Server) -> Send/Receive -> Close.</li>
      </ul>

      <h3>3. Code ví dụ: Echo Server</h3>
      <pre style="background:#f4f4f4; padding:15px; border-radius:8px;"><code>import socket

HOST = '127.0.0.1'  # Localhost
PORT = 65432        # Port lắng nghe

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((HOST, PORT))
    s.listen()
    print(f"Server đang lắng nghe tại {HOST}:{PORT}")
    conn, addr = s.accept()
    with conn:
        print('Đã kết nối bởi', addr)
        while True:
            data = conn.recv(1024)
            if not data:
                break
            conn.sendall(data)</code></pre>

      <h3>4. Kết luận</h3>
      <p>Đoạn code trên minh họa cơ chế blocking I/O cơ bản. Trong thực tế, để xử lý nhiều client cùng lúc, bạn cần sử dụng Multi-threading hoặc Asynchronous I/O (asyncio) mà chúng ta sẽ bàn ở các bài viết sau.</p>
    `
  },
  {
    id: 2,
    title: "Phân tích gói tin với Wireshark",
    date: "18/12/2025",
    cat: "TOOLS",
    desc: "Hướng dẫn bắt và đọc các gói tin HTTP, TCP trong mạng LAN.",
    content: `
      <p>Wireshark là công cụ phân tích giao thức mạng phổ biến nhất thế giới. Nó cho phép bạn xem những gì đang xảy ra trên mạng của mình ở cấp độ vi mô (microscopic level).</p>

      <h3>1. Tại sao cần Wireshark?</h3>
      <p>Khi lập trình mạng, bạn thường gặp lỗi "kết nối thất bại" nhưng không biết do code sai, tường lửa chặn hay gói tin bị mất. Wireshark giúp bạn "nhìn thấy" dòng chảy dữ liệu.</p>

      <h3>2. Bắt gói tin (Capture)</h3>
      <p>Khi mở Wireshark, bạn chọn Interface (như Wi-Fi hoặc Ethernet) để bắt đầu lắng nghe. Chế độ "Promiscuous mode" nên được bật để bắt tất cả gói tin đi qua card mạng.</p>

      <h3>3. Bộ lọc (Filters) quan trọng</h3>
      <p>Màn hình sẽ trôi rất nhanh. Bạn cần dùng filter:</p>
      <ul>
        <li><code>ip.addr == 192.168.1.10</code>: Chỉ hiện gói tin đến/đi từ IP này.</li>
        <li><code>tcp.port == 80</code>: Chỉ hiện traffic web thường.</li>
        <li><code>http.request.method == "POST"</code>: Tìm các form đăng nhập hoặc gửi dữ liệu.</li>
      </ul>

      <h3>4. Phân tích 3 bước bắt tay (3-way Handshake)</h3>
      <p>Hãy lọc <code>tcp</code> và tìm 3 gói tin đầu tiên của một kết nối:</p>
      <ol>
        <li><strong>SYN:</strong> Client gửi yêu cầu kết nối (Seq=0).</li>
        <li><strong>SYN, ACK:</strong> Server đồng ý và gửi lại yêu cầu xác nhận (Ack=1).</li>
        <li><strong>ACK:</strong> Client xác nhận lần cuối. Kết nối thiết lập!</li>
      </ol>
      <p>Nếu bạn thấy gói tin <strong>RST (Reset)</strong> màu đỏ, nghĩa là kết nối bị từ chối (Server không mở port hoặc Firewall chặn).</p>
    `
  },
  {
    id: 3,
    title: "Mô hình OSI vs TCP/IP",
    date: "15/12/2025",
    cat: "THEORY",
    desc: "Sự khác biệt thực tế giữa lý thuyết và triển khai hiện đại.",
    content: `
      <p>Bất kỳ sinh viên CNTT nào cũng thuộc làu mô hình OSI 7 tầng, nhưng thực tế Internet lại chạy trên TCP/IP 4 tầng. Tại sao lại có sự khác biệt này?</p>

      <h3>1. Mô hình OSI (7 Tầng)</h3>
      <p>Là mô hình lý thuyết tiêu chuẩn:</p>
      <ul>
        <li>Physical, Data Link, Network, Transport, Session, Presentation, Application.</li>
      </ul>
      <p>Ưu điểm của nó là tách biệt rõ ràng trách nhiệm. Tuy nhiên, tầng Session và Presentation thường thừa thãi trong thực tế.</p>

      <h3>2. Mô hình TCP/IP (4 Tầng)</h3>
      <p>Đây là mô hình thực chiến:</p>
      <ul>
        <li><strong>Network Interface:</strong> Gộp Physical và Data Link.</li>
        <li><strong>Internet:</strong> Tương ứng Network (IP).</li>
        <li><strong>Transport:</strong> TCP/UDP.</li>
        <li><strong>Application:</strong> Gộp 3 tầng trên cùng của OSI (HTTP, FTP, DNS...).</li>
      </ul>

      <h3>3. Quá trình Đóng gói (Encapsulation)</h3>
      <p>Khi bạn gửi một dòng text "Hello":</p>
      <ol>
        <li>Application thêm HTTP header.</li>
        <li>Transport thêm TCP header (Source Port, Dest Port).</li>
        <li>Internet thêm IP header (Source IP, Dest IP).</li>
        <li>Network Interface thêm MAC header và Checksum (FCS).</li>
      </ol>
      <p>Hiểu quá trình này giúp bạn debug lỗi: Lỗi ở tầng nào? Ping thông (tầng Internet) nhưng web không vào được (tầng Transport/App)?</p>
    `
  },
  {
    id: 4,
    title: "Xây dựng HTTP Server từ con số 0",
    date: "10/12/2025",
    cat: "CODE",
    desc: "Hiểu sâu về giao thức HTTP bằng cách tự viết server bằng C++ hoặc Python.",
    content: `
      <p>Chúng ta thường dùng Apache, Nginx hay Tomcat. Nhưng để hiểu HTTP thực sự là gì, hãy thử tự viết một Web Server đơn giản chỉ dùng Socket.</p>

      <h3>1. HTTP là Text-based Protocol</h3>
      <p>Khác với các giao thức nhị phân, HTTP rất dễ đọc. Khi trình duyệt gửi yêu cầu, nó gửi một chuỗi văn bản như sau:</p>
      <pre><code>GET /index.html HTTP/1.1
Host: localhost:8080
User-Agent: Mozilla/5.0...</code></pre>

      <h3>2. Cấu trúc Response</h3>
      <p>Server của bạn phải phân tích chuỗi trên và trả về đúng định dạng:</p>
      <pre><code>HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 50

&lt;html&gt;&lt;body&gt;Hello World&lt;/body&gt;&lt;/html&gt;</code></pre>
      
      <h3>3. Thử thách logic</h3>
      <p>Khi viết server, bạn phải xử lý:</p>
      <ul>
        <li><strong>Parsing:</strong> Tách dòng đầu tiên để lấy Method (GET/POST) và Path (/index.html).</li>
        <li><strong>File System:</strong> Đọc file từ ổ cứng và gửi đi. Nếu không thấy file? Phải gửi mã <code>404 Not Found</code>.</li>
        <li><strong>Concurrency:</strong> Nếu 2 người truy cập cùng lúc thì sao? (Cần đa luồng).</li>
      </ul>
      <p>Bài tập này giúp bạn hiểu rõ ý nghĩa của Status Code và Headers.</p>
    `
  },
  {
    id: 5,
    title: "Load Balancing là gì?",
    date: "05/12/2025",
    cat: "SYSTEM",
    desc: "Các thuật toán cân bằng tải: Round Robin, Least Connections.",
    content: `
      <p>Khi website của bạn có hàng triệu user, một server duy nhất sẽ bị quá tải (CPU 100%, RAM tràn). Load Balancing (Cân bằng tải) là giải pháp phân phối lưu lượng truy cập đến nhiều server khác nhau.</p>

      <h3>1. Load Balancer hoạt động ở đâu?</h3>
      <p>Nó đứng trước các server ứng dụng (Backend). Người dùng kết nối tới Load Balancer, và nó sẽ âm thầm chuyển tiếp gói tin tới Server 1, Server 2, hoặc Server 3.</p>

      <h3>2. Các thuật toán phổ biến</h3>
      <ul>
        <li><strong>Round Robin:</strong> Chia đều lần lượt. Request 1 vào Server A, Request 2 vào Server B... (Dễ cài đặt nhưng không quan tâm server nào đang bận).</li>
        <li><strong>Least Connections:</strong> Chuyển request mới vào server đang xử lý ít kết nối nhất. (Tối ưu hơn cho các request xử lý lâu).</li>
        <li><strong>IP Hash:</strong> Dựa vào IP người dùng để luôn chuyển họ về đúng 1 server cố định (Giữ Session đăng nhập).</li>
      </ul>

      <h3>3. Layer 4 vs Layer 7 Load Balancing</h3>
      <ul>
        <li><strong>Layer 4 (Transport):</strong> Chỉ dựa vào IP và Port. Tốc độ cực nhanh.</li>
        <li><strong>Layer 7 (Application):</strong> Đọc được nội dung HTTP (Cookie, Header, URL). Có thể định tuyến thông minh (ví dụ: URL ảnh `.jpg` qua server chứa ảnh, URL API qua server xử lý logic).</li>
      </ul>
      <p>Nginx và HAProxy là hai phần mềm Load Balancing mã nguồn mở nổi tiếng nhất hiện nay.</p>
    `
  },
  {
    id: 6,
    title: "Websocket vs REST API",
    date: "01/12/2025",
    cat: "WEB",
    desc: "Khi nào cần giao tiếp thời gian thực (Real-time)?",
    content: `
      <p>Trong phát triển web hiện đại, việc chọn phương thức giao tiếp giữa Client và Server ảnh hưởng lớn đến trải nghiệm người dùng.</p>

      <h3>1. REST API (HTTP)</h3>
      <p>Hoạt động theo cơ chế <strong>Request-Response</strong>. Client hỏi, Server trả lời. Server không thể tự nhiên gửi tin nhắn cho Client nếu không được hỏi.</p>
      <p><em>Vấn đề:</em> Nếu làm ứng dụng Chat, Client phải liên tục gửi "Có tin nhắn mới không?" mỗi 1 giây (Polling). Rất tốn tài nguyên.</p>

      <h3>2. WebSocket</h3>
      <p>Là giao thức giao tiếp <strong>Full-duplex</strong> (hai chiều) trên một kết nối TCP duy nhất.</p>
      <ul>
        <li><strong>Handshake:</strong> Ban đầu Client gửi HTTP Request có header <code>Upgrade: websocket</code>. Server đồng ý mã 101 Switching Protocols.</li>
        <li><strong>Persistent Connection:</strong> Kết nối giữ nguyên, không đóng lại.</li>
        <li><strong>Real-time:</strong> Server có thể đẩy data xuống Client ngay lập tức khi có sự kiện.</li>
      </ul>

      <h3>3. Khi nào dùng cái nào?</h3>
      <ul>
        <li>Dùng <strong>REST</strong> cho các tác vụ CRUD (Tạo, Đọc, Sửa, Xóa) thông thường: Blog, trang tin tức, profile user.</li>
        <li>Dùng <strong>WebSocket</strong> cho: Game online, Chat app, Chứng khoán, Thông báo thời gian thực (Notification).</li>
      </ul>
    `
  },
  {
    id: 7,
    title: "Bảo mật mạng với Firewall (iptables)",
    date: "28/11/2025",
    cat: "SECURITY",
    desc: "Cấu hình iptables cơ bản trên Linux để chặn kết nối lạ.",
    content: `
      <p>Trong Linux, <code>iptables</code> là công cụ tường lửa giao diện dòng lệnh cực mạnh để kiểm soát lưu lượng mạng vào và ra server.</p>

      <h3>1. Các Chains cơ bản</h3>
      <ul>
        <li><strong>INPUT:</strong> Kiểm soát gói tin ĐẾN server của bạn.</li>
        <li><strong>OUTPUT:</strong> Kiểm soát gói tin TỪ server đi ra ngoài.</li>
        <li><strong>FORWARD:</strong> Dùng khi server đóng vai trò router chuyển tiếp gói tin.</li>
      </ul>

      <h3>2. Nguyên tắc "Chặn tất cả, mở vài cái"</h3>
      <p>Để bảo mật tối đa, chính sách mặc định (Default Policy) nên là DROP tất cả, chỉ cho phép những gì cần thiết.</p>
      <pre><code># Thiết lập chính sách mặc định
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

# Cho phép loopback (localhost)
iptables -A INPUT -i lo -j ACCEPT

# Cho phép kết nối đã thiết lập (quan trọng)
iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT

# Mở port SSH (22) và Web (80)
iptables -A INPUT -p tcp --dport 22 -j ACCEPT
iptables -A INPUT -p tcp --dport 80 -j ACCEPT</code></pre>

      <h3>3. Chống tấn công DOS cơ bản</h3>
      <p>Bạn có thể giới hạn số lượng kết nối từ một IP để tránh bị spam request.</p>
      <p>Lưu ý: Sai một lệnh <code>iptables</code> có thể khiến bạn mất kết nối SSH tới server ngay lập tức!</p>
    `
  },
  {
    id: 8,
    title: "Tìm hiểu về DNS Lookup",
    date: "25/11/2025",
    cat: "NETWORK",
    desc: "Điều gì xảy ra khi bạn gõ google.com vào trình duyệt?",
    content: `
      <p>DNS (Domain Name System) là danh bạ điện thoại của Internet, dịch tên miền (google.com) thành địa chỉ IP (142.250.x.x).</p>

      <h3>1. Quy trình phân giải (Lookup Journey)</h3>
      <ol>
        <li><strong>Browser Cache:</strong> Kiểm tra xem trình duyệt có nhớ IP này không.</li>
        <li><strong>OS Cache (file hosts):</strong> Kiểm tra trong máy tính.</li>
        <li><strong>Resolver Server (ISP/Google 8.8.8.8):</strong> Hỏi server DNS của nhà mạng.</li>
        <li><strong>Root Server (.):</strong> Nếu Resolver không biết, nó hỏi Root Server quốc tế. Root chỉ về TLD Server quản lý đuôi <code>.com</code>.</li>
        <li><strong>TLD Server (.com):</strong> Chỉ về Authoritative Server quản lý tên miền <code>google.com</code>.</li>
        <li><strong>Authoritative Server:</strong> Trả về IP chính xác.</li>
      </ol>

      <h3>2. Các loại Record phổ biến</h3>
      <ul>
        <li><strong>A Record:</strong> Tên miền -> IP v4.</li>
        <li><strong>AAAA Record:</strong> Tên miền -> IP v6.</li>
        <li><strong>CNAME:</strong> Tên miền giả -> Tên miền thật (Alias).</li>
        <li><strong>MX Record:</strong> Dùng cho gửi nhận Email.</li>
      </ul>
      <p>Hiểu về DNS giúp bạn xử lý các vấn đề khi chuyển host, trỏ tên miền hoặc debug lỗi không truy cập được web.</p>
    `
  },
  {
    id: 9,
    title: "Đa luồng (Multi-threading) trong Server",
    date: "20/11/2025",
    cat: "CODE",
    desc: "Xử lý hàng ngàn kết nối đồng thời mà không bị chặn (blocking).",
    content: `
      <p>Quay lại bài 1 về Socket, nếu dùng vòng lặp <code>while</code> đơn giản, Server chỉ phục vụ được 1 người tại 1 thời điểm. Người thứ 2 phải chờ người thứ 1 thoát ra mới được kết nối. Đây là Blocking I/O.</p>

      <h3>1. Giải pháp Multi-threading</h3>
      <p>Ý tưởng: Mỗi khi có một Client mới kết nối (accept), Server sẽ tạo ra một luồng (Thread) riêng biệt để phục vụ client đó. Main thread quay lại tiếp tục lắng nghe kết nối mới.</p>

      <h3>2. Ví dụ Python với module <code>threading</code></h3>
      <pre><code>import socket
import threading

def handle_client(conn, addr):
    print(f"New connection: {addr}")
    # Xử lý logic gửi nhận tin ở đây...
    conn.close()

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(('0.0.0.0', 9999))
server.listen()

while True:
    conn, addr = server.accept()
    # Tạo luồng mới
    thread = threading.Thread(target=handle_client, args=(conn, addr))
    thread.start()
    print(f"Active connections: {threading.activeCount() - 1}")</code></pre>

      <h3>3. Vấn đề của Threading</h3>
      <p>Tạo quá nhiều thread (ví dụ 10.000 thread) sẽ ngốn rất nhiều RAM và CPU để switch context. Đây là lý do mô hình C10K problem ra đời và dẫn đến sự phát triển của Asynchronous I/O (NodeJS, Nginx).</p>
    `
  },
  {
    id: 10,
    title: "SSH Key và cơ chế xác thực",
    date: "15/11/2025",
    cat: "SECURITY",
    desc: "Tại sao nên dùng SSH Key thay vì mật khẩu truyền thống?",
    content: `
      <p>Khi quản trị server Linux, việc gõ mật khẩu (password) vừa tốn thời gian vừa kém bảo mật (dễ bị Brute-force). SSH Key là giải pháp thay thế an toàn hơn.</p>

      <h3>1. Mã hóa bất đối xứng (Asymmetric Encryption)</h3>
      <p>SSH Key hoạt động dựa trên cặp khóa:</p>
      <ul>
        <li><strong>Public Key (Khóa công khai):</strong> Có thể đưa cho bất kỳ ai. Được lưu trên Server (trong file <code>~/.ssh/authorized_keys</code>).</li>
        <li><strong>Private Key (Khóa bí mật):</strong> Giữ kỹ trên máy cá nhân của bạn. KHÔNG bao giờ chia sẻ.</li>
      </ul>

      <h3>2. Quy trình đăng nhập không cần mật khẩu</h3>
      <ol>
        <li>Bạn gửi yêu cầu đăng nhập kèm Username.</li>
        <li>Server kiểm tra xem có Public Key nào khớp không.</li>
        <li>Server tạo một chuỗi ngẫu nhiên, mã hóa nó bằng Public Key và gửi lại cho bạn (Challenge).</li>
        <li>Máy bạn dùng Private Key để giải mã chuỗi đó và gửi lại Server.</li>
        <li>Nếu khớp, Server cho phép đăng nhập.</li>
      </ol>

      <h3>3. Cách tạo Key</h3>
      <p>Trên Linux/Mac/Windows Terminal:</p>
      <pre><code>ssh-keygen -t rsa -b 4096</code></pre>
      <p>Lệnh này tạo ra <code>id_rsa</code> (Private) và <code>id_rsa.pub</code> (Public). Bạn chỉ cần copy nội dung file .pub lên server là xong.</p>
    `
  }
];
