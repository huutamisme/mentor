import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

const steps: Array<string> = [
  "Chọn dịch vụ <br /> mình cần",
  "Chọn mentor <br /> theo tiêu chí của <br /> bản thân",
  "Đặt lịch hẹn <br /> và tham gia tư <br /> vấn với mentor <br /> phù hợp"
];

const Home: React.FC = () => {
  return (
    <>
      <div className="relative">
        <div className="flex flex-col bg-customBlue justify-center items-center p-4 gap-4">
          <div className="text-white text-6xl font-bold">
            Nơi người mới được kết nối trực tiếp với Mentor
          </div>
          <Link
            href="/services"
            className="px-4 py-2 bg-white text-customBlue rounded-full text-2xl font-bold"
          >
            Tìm hiểu ngay
          </Link>
        </div>
        <video className="w-full" loop autoPlay muted>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="bg-customBlue py-20">
          <p className="text-5xl md:text-7xl text-center text-white text-shadow-custom mb-10">BƯỚC THỰC HIỆN</p>
          <div className="grid grid-cols-1 space-y-4 md:grid-cols-3 place-items-center">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center justify-start bg-background rounded-3xl text-customBlue min-h-[300px] px-5">
                <p className="text-5xl">{index + 1}</p>
                <p
                  className="border-2 border-blue-300 px-10 text-3xl rounded-3xl text-center flex items-center justify-center font-semibold min-h-[200px] min-w-[280px]"
                  dangerouslySetInnerHTML={{ __html: step }}
                />
              </div>
            ))}
          </div>
        </div>
        {/* <ChatBubble /> */}
      </div>

      {/* Toast */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default Home;
