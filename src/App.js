import React from "react";
import './App.css';

function App() {
    return (
        <div className="background-image p-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex">
                    <div className="w-1/3 bg-gray-200 p-4">
                        <div className="flex justify-center">
                            <img
                                alt="Profile picture of a person wearing glasses and a black coat"
                                className="rounded-full border-4 border-white"
                                height="150"
                                src="https://storage.googleapis.com/a1aa/image/TmSQf1lFB8rRDSbj9hTMGeYxiQnVDMK1vz47EPXYAKc.jpg"
                                width="150"
                            />
                        </div>
                        <div className="mt-4">
                            <h2 className="text-center text-xl font-bold">
                                NGUYỄN ĐÌNH LẬP
                            </h2>
                            <p className="text-center text-sm text-gray-600">
                                Nhân viên IT - Phần cứng - Mạng
                            </p>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">CHỨNG CHỈ</h3>
                            <p className="text-sm text-gray-600 mt-2">
                                Chứng chỉ xây dựng mô hình ảo hóa
                            </p>
                            <p className="text-sm text-gray-600">
                                Chứng chỉ xây dựng hệ thống giám sát
                            </p>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">GIẢI THƯỞNG</h3>
                            <p className="text-sm text-gray-600 mt-2">Nhân viên xuất sắc</p>
                            <p className="text-sm text-gray-600">Giải nhất tin học văn phòng</p>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">SỞ THÍCH</h3>
                            <p className="text-sm text-gray-600 mt-2">Thích xem phim</p>
                            <p className="text-sm text-gray-600">Chơi thể thao</p>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">KỸ NĂNG</h3>
                            <p className="text-sm text-gray-600 mt-2">Tin học văn phòng</p>
                            <p className="text-sm text-gray-600">PHP</p>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">NGƯỜI THAM CHIẾU</h3>
                            <p className="text-sm text-gray-600 mt-2">Ông Trần Hoàng Anh Quân</p>
                            <p className="text-sm text-gray-600">
                                Giám đốc công ty Hỗ trợ IT – Công nghệ thế giới mới TECHNO
                            </p>
                            <p className="text-sm text-gray-600">Số điện thoại: 0978 534 561</p>
                        </div>
                    </div>
                    <div className="w-2/3 p-4">
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold">THÔNG TIN LIÊN HỆ</h3>
                            <div className="flex items-center mt-2">
                                <i className="fas fa-user text-gray-600"></i>
                                <p className="text-sm text-gray-600 ml-2">02/07/1993</p>
                            </div>
                            <div className="flex items-center mt-2">
                                <i className="fas fa-phone text-gray-600"></i>
                                <p className="text-sm text-gray-600 ml-2">0985431655</p>
                            </div>
                            <div className="flex items-center mt-2">
                                <i className="fas fa-envelope text-gray-600"></i>
                                <p className="text-sm text-gray-600 ml-2">Nguyendinhlap@gmail.com</p>
                            </div>
                            <div className="flex items-center mt-2">
                                <i className="fas fa-map-marker-alt text-gray-600"></i>
                                <p className="text-sm text-gray-600 ml-2">Đại Vũ, Huyện Âu, Đà Nẵng</p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold">MỤC TIÊU NGHỀ NGHIỆP</h3>
                            <p className="text-sm text-gray-600 mt-2">
                                Có một công việc ổn định, trở thành nhân viên xuất sắc, tích lũy thêm nhiều kinh nghiệm,
                                rèn luyện kỹ năng để công việc hiệu quả, chính xác, nhanh chóng.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold">TRÌNH ĐỘ HỌC VẤN</h3>
                            <p className="text-sm text-gray-600 mt-2">Trường Đại học Sư phạm Kỹ Thuật</p>
                            <p className="text-sm text-gray-600">Chuyên ngành Mạng máy tính</p>
                            <p className="text-sm text-gray-600">Tốt nghiệp loại giỏi</p>
                            <p className="text-sm text-gray-600">Điểm trung bình: 8.2</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold">KINH NGHIỆM LÀM VIỆC</h3>
                            <p className="text-sm text-gray-600 mt-2">Công ty Hỗ trợ IT – Công nghệ thế giới mới
                                TECHNO</p>
                            <p className="text-sm text-gray-600">Thời gian: 01/2016 - nay</p>
                            <p className="text-sm text-gray-600">Vị trí: Nhân viên IT hỗ trợ kỹ thuật</p>
                            <p className="text-sm text-gray-600">
                                Bảo trì sửa chữa thiết bị, vật tư văn phòng, phần cứng máy tính, giải đáp thắc mắc với
                                khách hàng về dịch vụ
                            </p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold">HOẠT ĐỘNG</h3>
                            <p className="text-sm text-gray-600 mt-2">
                                Tham gia chiến dịch Mùa hè xanh, sửa chữa máy tính miễn phí cho các bạn sinh viên nghèo
                            </p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold">DỰ ÁN THAM GIA</h3>
                            <p className="text-sm text-gray-600 mt-2">
                                Dự án Nhà lắp trên vầng sáng tạo lương lai được thực hiện tại Công ty Hỗ trợ IT – Công
                                nghệ TECHNO
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
