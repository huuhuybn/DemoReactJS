import React, { useEffect } from 'react';
import './App.css';

function App() {
    // Tạo các lá rơi và ánh sáng
    useEffect(() => {
        const leafCount = 20; // Số lá rơi
        const sparkleCount = 50; // Số điểm sáng

        // Tạo các lá rơi
        for (let i = 0; i < leafCount; i++) {
            const leaf = document.createElement('div');
            leaf.classList.add('falling-leaf');
            document.body.appendChild(leaf);
        }

        // Tạo các điểm sáng
        for (let i = 0; i < sparkleCount; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            sparkle.style.top = `${Math.random() * 100}vh`;
            sparkle.style.left = `${Math.random() * 100}vw`;
            document.body.appendChild(sparkle);
        }
    }, []);

    return (
        <div className="App">
            <h1>Nguyễn Hữu Huy</h1>
            <p>Email: <a href="mailto:huuhuybn@gmail.com">huuhuybn@gmail.com</a></p>
            <p>SĐT: 0913360468</p>

            <section>
                <h2>MỤC TIÊU NGHỀ NGHIỆP</h2>
                <p>
                    Là một lập trình viên với kinh nghiệm sâu sắc về ReactJS và các công nghệ frontend khác, tôi mong muốn phát triển kỹ năng lập trình và đóng góp vào các dự án sáng tạo. Tôi cũng có kinh nghiệm giảng dạy về AI và phát triển các ứng dụng thông minh, kết hợp với kiến thức vững về JavaScript, JSX, và các công cụ phát triển hiện đại như Babel và Webpack.
                </p>
            </section>

            <section>
                <h2>KỸ NĂNG CHUYÊN MÔN</h2>
                <ul>
                    <li>Frontend Development: ReactJS, JavaScript, JSX, HTML, CSS</li>
                    <li>Hooks: Sử dụng useState, useEffect, và các hooks khác để quản lý state và lifecycle trong React</li>
                    <li>ESLint & Code Quality: Kiến thức sử dụng ESLint để kiểm tra chất lượng mã nguồn và xử lý lỗi</li>
                    <li>UI/UX: Tối ưu hóa giao diện người dùng với ReactJS, đảm bảo khả năng tương tác tốt và đáp ứng mọi kích thước màn hình</li>
                    <li>API: Kết nối và xử lý dữ liệu từ APIs RESTful</li>
                    <li>Tools: Webpack, Babel, Git, npm, Visual Studio Code</li>
                    <li>Responsive Design: Thiết kế giao diện đáp ứng với các kích thước màn hình khác nhau</li>
                    <li>AI Teaching: Kinh nghiệm giảng dạy về AI với các công nghệ và phương pháp học máy tiên tiến</li>
                </ul>
            </section>

            <section>
                <h2>KINH NGHIỆM LÀM VIỆC</h2>
                <h3>Lập trình viên ReactJS - Freelance</h3>
                <p>Thời gian: 2022 – nay</p>
                <ul>
                    <li>Phát triển các ứng dụng web với ReactJS và React Hooks, bao gồm quản lý state, xử lý sự kiện và tối ưu hóa giao diện người dùng.</li>
                    <li>Sử dụng các công cụ build như Webpack và Babel để chuyển đổi mã nguồn và tối ưu hóa hiệu suất ứng dụng.</li>
                    <li>Xử lý các lỗi phát sinh trong quá trình phát triển và đảm bảo mã nguồn tuân thủ các quy chuẩn chất lượng cao.</li>
                    <li>Tạo các trang web tương tác với người dùng, bao gồm xử lý form và xác thực thông tin (username, password, v.v.).</li>
                    <li>Sử dụng ESLint để đảm bảo mã nguồn không có lỗi và tuân thủ các quy tắc đặt tên biến và cấu trúc mã.</li>
                </ul>

                <h3>Giảng viên AI siêu cấp PRO MAX 16 - Giảng dạy AI</h3>
                <p>Thời gian: 2020 – nay</p>
                <ul>
                    <li>Giảng dạy về các chủ đề AI cơ bản đến nâng cao, từ các thuật toán học máy đến các mô hình học sâu (Deep Learning).</li>
                    <li>Phát triển các bài giảng và tài liệu học cho sinh viên, sử dụng AI để tối ưu hóa các bài toán phức tạp.</li>
                    <li>Hướng dẫn sinh viên cách áp dụng AI vào các dự án thực tế và giải quyết các vấn đề trong lĩnh vực công nghệ.</li>
                </ul>
            </section>

            <section>
                <h2>DỰ ÁN TIÊU BIỂU</h2>
                <h3>Ứng dụng Calculator với ReactJS</h3>
                <ul>
                    <li>Phát triển ứng dụng tính toán cơ bản sử dụng ReactJS với khả năng nhập và tính toán số học.</li>
                    <li>Sử dụng các hooks (useState) để quản lý state cho các input và kết quả tính toán.</li>
                    <li>Cải thiện giao diện người dùng với khả năng xử lý các sự kiện như click, nhập liệu và hiển thị kết quả.</li>
                    <li>Kiểm tra và xử lý các dữ liệu nhập vào để đảm bảo chỉ nhận các giá trị hợp lệ (chỉ số).</li>
                </ul>

                <h3>Ứng dụng Quản lý Người Dùng với ReactJS</h3>
                <ul>
                    <li>Tạo ra giao diện người dùng cho việc nhập và xác thực thông tin người dùng.</li>
                    <li>Sử dụng các component React để quản lý các form nhập liệu và xử lý dữ liệu theo nhu cầu.</li>
                </ul>
            </section>

            <section>
                <h2>HỌC VẤN</h2>
                <h3>Cử nhân Công Nghệ Thông Tin</h3>
                <p>Trường Đại học XYZ, 2017 – 2021</p>
                <ul>
                    <li>Tìm hiểu và nghiên cứu về lập trình web, cơ sở dữ liệu, và phát triển ứng dụng di động.</li>
                    <li>Tham gia các dự án học thuật về AI và học máy.</li>
                </ul>
            </section>

            <section>
                <h2>NGÔN NGỮ & KỸ NĂNG</h2>
                <ul>
                    <li>Ngôn ngữ lập trình: JavaScript, HTML, CSS, SQL</li>
                    <li>Công cụ: Git, npm, Visual Studio Code</li>
                    <li>Ngoại ngữ: Tiếng Anh (Thông thạo)</li>
                </ul>
            </section>

            <section>
                <h2>SỞ THÍCH</h2>
                <ul>
                    <li>Đọc sách về AI và công nghệ</li>
                    <li>Tham gia các hội thảo về lập trình và học máy</li>
                    <li>Chia sẻ kiến thức qua các bài giảng và blog</li>
                </ul>
            </section>
        </div>
    );
}

export default App;
