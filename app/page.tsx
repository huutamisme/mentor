import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChatBubble from './components/ChatBubble';
import Banner from './components/Banner';
import HighlightMentor from './components/HighlightMentor';

const steps: Array<string> = [
  "Chọn dịch vụ <br /> mình cần",
  "Chọn mentor <br /> theo tiêu chí của <br /> bản thân",
  "Đặt lịch hẹn <br /> và tham gia tư <br /> vấn với mentor <br /> phù hợp"
];

const Home: React.FC = () => {
  return (
    <>
      <div className="relative">
        <Banner margin={10} />
        <video className="w-full h-min-screen" loop autoPlay muted>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <HighlightMentor margin={10} />
        <ChatBubble />
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
