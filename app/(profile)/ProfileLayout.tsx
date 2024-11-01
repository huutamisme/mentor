import { FaUserAlt, FaCalendarDay, FaHeart, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { ReactNode } from "react";

const ProfileLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="flex py-5 p-10">

            {/* Menu */}
            <div className="flex flex-col w-1/5 items-start">
                <Link href="/" className="text-5xl text-customBlue font-bold h-1/5">MENTOR</Link>
                <ul className="menu rounded-box text-customBlue text-xl space-y-4 h-4/5">
                    <li>
                        <Link href="/profile/info">
                            <FaUserAlt size={25} />
                            Thông tin cá nhân
                        </Link >
                    </li>
                    <li>
                        <Link href="/profile/appointment">
                            <FaCalendarDay size={25} />
                            Lịch hẹn
                        </Link >
                    </li>
                    <li>
                        <Link href="/profile/favorite">
                            <FaHeart size={25} />
                            Mentor yêu thích
                        </Link >
                    </li>
                    <li>
                        <div>
                            <FaSignOutAlt size={25} />
                            Đăng xuất
                        </div >
                    </li>
                </ul>
            </div>

            {/* Content */}
            <div className="w-4/5">
                {children}
            </div>
        </div>
    );
}
export default ProfileLayout;