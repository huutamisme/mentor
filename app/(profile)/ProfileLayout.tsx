import { FaUserAlt, FaCalendarDay, FaHeart, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

const ProfileLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const pathName = usePathname();
    const menuItems = [
        { href: "/info", icon: <FaUserAlt size={25} />, label: "Thông tin cá nhân" },
        { href: "/appointment", icon: <FaCalendarDay size={25} />, label: "Lịch hẹn" },
        { href: "/favorite", icon: <FaHeart size={25} />, label: "Mentor yêu thích" },
        { href: "#", icon: <FaSignOutAlt size={25} />, label: "Đăng xuất" }
    ];

    return (
        <div className="flex py-5 p-10">
            {/* Menu */}
            <div className="flex flex-col w-1/5 items-start">
                <Link href="/" className="text-5xl text-customBlue font-bold h-1/6">MENTOR</Link>
                <ul className="menu rounded-box text-customBlue text-xl space-y-4 h-5/6">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            {item.href !== "#" ? (
                                <Link href={item.href}
                                    className={`${pathName === item.href ? 'bg-gray-300' : ''}`}>
                                    {item.icon}
                                    {item.label}
                                </Link>
                            ) : (
                                <div>
                                    {item.icon}
                                    {item.label}
                                </div>
                            )}
                        </li>
                    ))}
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
