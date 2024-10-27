const TermOfService: React.FC = () => {
    return (
        <div className="flex min-w-screen bg-white text-customBlue" >
            <div className="overflow-y-auto overflow-x-hidden w-full p-9">
                <div className="flex-col">
                    <h1 className='text-7xl font-bold text-customBlue'>Term Of Services</h1>

                    {/* Mục 1 Điều kiện Sử dụng */}
                    <div className="collapse collapse-arrow bg-background my-6">
                        <input type="radio" name="statsgroup" defaultChecked />
                        <div className="collapse-title text-4xl font-bold text-customBlue">1. Điều kiện Sử dụng</div>
                        <div className="collapse-content">
                            <div className="flex-col space-y-4">
                                {/* Mục 1.1 Quyền và Trách nhiệm Người dùng */}
                                <div>
                                    <p className="text-2xl font-semibold text-customBlue">1.1 Quyền và Trách nhiệm Người dùng</p>
                                    <ul className="list-disc pl-5">
                                        <li><b>Đăng ký tài khoản:</b> Người dùng phải đăng ký tài khoản trên nền tảng và cung cấp thông tin cá nhân chính xác, đầy đủ.</li>
                                        <li><b>Sử dụng dịch vụ:</b> Người dùng có quyền sử dụng các dịch vụ của nền tảng một cách hợp pháp và tuân thủ các quy định của pháp luật.</li>
                                        <li><b>Bảo mật thông tin:</b> Người dùng có trách nhiệm bảo mật thông tin đăng nhập của mình. Nền tảng không chịu trách nhiệm về việc mất mát thông tin do người dùng tự ý chia sẻ.</li>
                                        <li><b>Hành vi:</b> Người dùng cam kết không thực hiện các hành vi vi phạm pháp luật, vi phạm bản quyền, quấy rối, lừa đảo hoặc gây hại cho người khác.</li>
                                    </ul>
                                </div>

                                {/* Mục 1.2 Quyền sở hữu trí tuệ */}
                                <div>
                                    <p className="text-2xl font-semibold text-customBlue">1.2 Quyền sở hữu trí tuệ</p>
                                    <ul className="list-disc pl-5">
                                        <li><b>Nội dung:</b> Tất cả nội dung trên nền tảng, bao gồm nhưng không giới hạn ở văn bản, hình ảnh, video, đều là tài sản trí tuệ của nền tảng hoặc của các bên có quyền sở hữu hợp pháp.</li>
                                        <li><b>Sử dụng:</b> Người dùng chỉ được sử dụng nội dung trên nền tảng cho mục đích cá nhân và phi thương mại, trừ khi được sự cho phép bằng văn bản của chủ sở hữu.</li>
                                    </ul>
                                </div>

                                {/* Mục 1.3 Bảo mật thông tin */}
                                <div>
                                    <p className="text-2xl font-semibold text-customBlue">1.3 Bảo mật thông tin</p>
                                    <ul className="list-disc pl-5">
                                        <li><b>Cam kết:</b> Nền tảng cam kết bảo mật thông tin cá nhân của người dùng theo quy định của pháp luật.</li>
                                        <li><b>Biện pháp bảo mật:</b> Nền tảng sẽ áp dụng các biện pháp kỹ thuật và tổ chức để bảo vệ thông tin người dùng khỏi truy cập trái phép.</li>
                                        <li><b>Chia sẻ thông tin:</b> Nền tảng có thể chia sẻ thông tin người dùng với các đối tác đáng tin cậy để cung cấp dịch vụ tốt hơn, nhưng sẽ đảm bảo thông tin cá nhân của người dùng được bảo mật.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mục 2 Chính sách Khiếu nại */}
                    <div className="collapse collapse-arrow bg-background my-6">
                        <input type="radio" name="statsgroup" />
                        <div className="collapse-title text-4xl font-bold text-customBlue">2. Chính sách Khiếu nại</div>
                        <div className="collapse-content">
                            <div className="flex-col">
                                <ul className="list-disc pl-5">
                                    <li><b>Kênh khiếu nại:</b> Người dùng có thể gửi khiếu nại đến địa chỉ email: mentor.connect@gmail.com hoặc số điện thoại hỗ trợ của nền tảng (+84) 028.98765432.</li>
                                    <li><b>Thời gian giải quyết:</b> Nền tảng sẽ cố gắng giải quyết khiếu nại trong thời gian sớm nhất, nhưng không quá 7 ngày.</li>
                                    <li><b>Phương thức giải quyết:</b> Nền tảng sẽ xem xét kỹ lưỡng các khiếu nại và đưa ra giải pháp phù hợp.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Mục 3 Thanh toán */}
                    <div className="collapse collapse-arrow bg-background my-6">
                        <input type="radio" name="statsgroup" />
                        <div className="collapse-title text-4xl font-bold text-customBlue">3. Thanh toán</div>
                        <div className="collapse-content">
                            <div className="flex-col space-y-4">
                                {/* 3.1 Phương thức thanh toán */}
                                <div>
                                    <p className="text-xl font-semibold">3.1 Phương thức thanh toán:</p>
                                    <ul className="list-disc pl-5">
                                        <li><b>Thẻ ngân hàng:</b> Thanh toán trực tuyến qua các cổng thanh toán uy tín.</li>
                                        <li><b>Ví điện tử:</b> Thanh toán qua các ví điện tử phổ biến.</li>
                                        <li><b>Các hình thức khác:</b> Nền tảng có thể bổ sung các hình thức thanh toán khác trong tương lai.</li>
                                    </ul>
                                </div>

                                {/* 3.2 Phí dịch vụ */}
                                <div>
                                    <p className="text-xl font-semibold">3.2 Phí dịch vụ:</p>
                                    <ul className="list-disc pl-5">
                                        <li><b>Cước phí:</b> Chi tiết về cước phí các dịch vụ sẽ được công khai trên nền tảng.</li>
                                        <li><b>Hoàn tiền:</b> Nền tảng có thể chấp nhận hoàn tiền trong một số trường hợp cụ thể, tuân theo chính sách hoàn tiền của nền tảng.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mục 4 Tuyên bố Từ chối Trách nhiệm */}
                    <div className="collapse collapse-arrow bg-background my-6">
                        <input type="radio" name="statsgroup" />
                        <div className="collapse-title text-4xl font-bold text-customBlue">4. Tuyên bố Từ chối Trách nhiệm</div>
                        <div className="collapse-content">
                            <div className="flex-col">
                                <ul className="list-disc pl-5">
                                    <li><b>Hành vi của người dùng:</b> Nền tảng không chịu trách nhiệm về bất kỳ hành vi vi phạm pháp luật nào của người dùng.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TermOfService;