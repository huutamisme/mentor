const PolicyPrivacy: React.FC = () => {
    return (
        <div className="flex min-w-screen bg-white text-customBlue">
            <div className="overflow-y-auto overflow-x-hidden w-full p-9">
                <div className="flex-col">
                    <h1 className='text-7xl font-bold text-customBlue'>Chính sách bảo mật</h1>

                    {/* Mục 1 Mục đích */}
                    <div className="collapse collapse-arrow bg-background my-6">
                        <input type="radio" name="statsgroup" defaultChecked />
                        <div className="collapse-title text-4xl font-bold text-customBlue">1. Mục đích</div>
                        <div className="collapse-content">
                            <p className="text-2xl">
                                Chính sách Bảo mật này nhằm mục đích thông báo cho Quý khách hàng về các loại thông tin cá nhân mà chúng tôi thu thập, cách chúng tôi sử dụng và bảo vệ thông tin đó. Bằng việc sử dụng dịch vụ của Mentor, Quý khách đồng ý với các điều khoản và điều kiện của Chính sách Bảo mật này.
                            </p>
                        </div>
                    </div>

                    {/* Mục 2 Thông tin chúng tôi thu thập */}
                    <div className="collapse collapse-arrow bg-background my-6">
                        <input type="radio" name="statsgroup" />
                        <div className="collapse-title text-4xl font-bold text-customBlue">2. Thông tin chúng tôi thu thập</div>
                        <div className="collapse-content">
                            <ul className="list-disc pl-5">
                                <li><b>Thông tin cá nhân:</b> Khi đăng ký tài khoản, Quý khách sẽ cung cấp cho chúng tôi một số thông tin cá nhân như tên, email, số điện thoại, lĩnh vực quan tâm...</li>
                                <li><b>Thông tin hoạt động:</b> Chúng tôi thu thập thông tin về hoạt động của Quý khách trên nền tảng, bao gồm các dịch vụ mà Quý khách sử dụng, các cuộc tư vấn, đánh giá và nhận xét.</li>
                                <li><b>Thông tin thiết bị:</b> Chúng tôi có thể thu thập thông tin về thiết bị mà Quý khách sử dụng để truy cập vào nền tảng, bao gồm địa chỉ IP, loại trình duyệt, hệ điều hành...</li>
                            </ul>
                        </div>
                    </div>

                    {/* Mục 3 Mục đích sử dụng thông tin */}
                    <div className="collapse collapse-arrow bg-background my-6">
                        <input type="radio" name="statsgroup" />
                        <div className="collapse-title text-4xl font-bold text-customBlue">3. Mục đích sử dụng thông tin</div>
                        <div className="collapse-content">
                            <b>Chúng tôi sử dụng thông tin của Quý khách để:</b>
                            <ul className="list-disc pl-5">
                                <li><b>Cung cấp dịch vụ:</b> Chúng tôi sử dụng thông tin của Quý khách để cung cấp các dịch vụ mà Quý khách đã đăng ký, bao gồm kết nối với các mentor, tổ chức các buổi tư vấn, hỗ trợ khách hàng...</li>
                                <li><b>Cá nhân hóa trải nghiệm:</b> Chúng tôi sử dụng thông tin của Quý khách để cá nhân hóa trải nghiệm của Quý khách trên nền tảng, chẳng hạn như đề xuất các mentor phù hợp, các dịch vụ phù hợp.</li>
                                <li><b>Cải thiện dịch vụ:</b> Chúng tôi sử dụng thông tin của Quý khách để cải thiện chất lượng dịch vụ của chúng tôi, chẳng hạn như phát triển các tính năng mới, nâng cao hiệu quả của các dịch vụ hiện có.</li>
                                <li><b>Tiếp thị:</b> Chúng tôi có thể sử dụng thông tin của Quý khách để gửi các thông báo, khuyến mãi, hoặc các thông tin liên quan đến dịch vụ của chúng tôi.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Mục 4 Chia sẻ thông tin */}
                    <div className="collapse collapse-arrow bg-background my-6">
                        <input type="radio" name="statsgroup" />
                        <div className="collapse-title text-4xl font-bold text-customBlue">4. Chia sẻ thông tin</div>
                        <div className="collapse-content">
                            <b>Chúng tôi cam kết không chia sẻ thông tin cá nhân của Quý khách cho bất kỳ bên thứ ba nào, trừ khi có sự đồng ý của Quý khách hoặc trong các trường hợp sau:</b>
                            <ul className="list-disc pl-5">
                                <li><b>Yêu cầu của pháp luật:</b> Chúng tôi có thể chia sẻ thông tin của Quý khách khi có yêu cầu từ cơ quan nhà nước có thẩm quyền.</li>
                                <li><b>Bảo vệ quyền lợi:</b> Chúng tôi có thể chia sẻ thông tin của Quý khách nếu cần thiết để bảo vệ quyền lợi của chúng tôi hoặc của các bên liên quan.</li>
                                <li><b>Đối tác cung cấp dịch vụ:</b> Chúng tôi có thể chia sẻ thông tin của Quý khách với các đối tác cung cấp dịch vụ cho chúng tôi, chẳng hạn như các nhà cung cấp dịch vụ thanh toán, các nhà cung cấp dịch vụ lưu trữ dữ liệu...</li>
                            </ul>
                        </div>
                    </div>

                    {/* Mục 5 Bảo mật thông tin */}
                    <div className="collapse collapse-arrow bg-background my-6">
                        <input type="radio" name="statsgroup" />
                        <div className="collapse-title text-4xl font-bold text-customBlue">5. Bảo mật thông tin</div>
                        <div className="collapse-content">
                            <p className="text-2xl">
                                Chúng tôi cam kết bảo mật thông tin cá nhân của Quý khách bằng các biện pháp kỹ thuật và tổ chức phù hợp để ngăn chặn việc truy cập, sử dụng hoặc tiết lộ trái phép thông tin của Quý khách.
                            </p>
                        </div>
                    </div>

                    {/* Mục 6 Quyền của Quý khách */}
                    <div className="collapse collapse-arrow bg-background my-6">
                        <input type="radio" name="statsgroup" />
                        <div className="collapse-title text-4xl font-bold text-customBlue">6. Quyền của Quý khách</div>
                        <div className="collapse-content">
                            <b>Quý khách có quyền:</b>
                            <ul className="list-disc pl-5">
                                <li><b>Truy cập và chỉnh sửa thông tin:</b> Quý khách có quyền truy cập và chỉnh sửa thông tin cá nhân của mình bất kỳ lúc nào.</li>
                                <li><b>Hủy bỏ tài khoản:</b> Quý khách có quyền hủy bỏ tài khoản của mình bất kỳ lúc nào.</li>
                                <li><b>Từ chối nhận thông tin tiếp thị:</b> Quý khách có quyền từ chối nhận các thông tin tiếp thị từ chúng tôi.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Mục 7 Liên hệ */}
                    <div className="collapse collapse-arrow bg-background my-6">
                        <input type="radio" name="statsgroup" />
                        <div className="collapse-title text-4xl font-bold text-customBlue">7. Liên hệ</div>
                        <div className="collapse-content">
                            <p className="text-2xl">
                                Nếu Quý khách có bất kỳ câu hỏi nào về Chính sách Bảo mật này, vui lòng liên hệ với chúng tôi theo thông tin liên lạc được cung cấp trên trang web.
                            </p>
                        </div>
                    </div>

                    {/* Mục 8 Thay đổi Chính sách Bảo mật */}
                    <div className="collapse collapse-arrow bg-background my-6">
                        <input type="radio" name="statsgroup" />
                        <div className="collapse-title text-4xl font-bold text-customBlue">8. Thay đổi Chính sách Bảo mật</div>
                        <div className="collapse-content">
                            <p className="text-2xl">
                                Chúng tôi có thể cập nhật Chính sách Bảo mật này định kỳ. Phiên bản mới nhất của Chính sách Bảo mật sẽ được đăng trên trang web của chúng tôi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default PolicyPrivacy;