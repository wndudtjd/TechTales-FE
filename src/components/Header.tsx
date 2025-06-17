import '../css/Header.css'
import {AlignJustify, X} from "lucide-react";
import {useEffect, useState} from "react";

function Header() {
    const [openSidebar, setOpenSidebar] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {// 화면이 768px 이상일 경우 사이드바 닫기
                setOpenSidebar(false);
            }
        };

        // Resize 이벤트 리스너 추가
        window.addEventListener('resize', handleResize);

        // 컴포넌트가 언마운트 될 때 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[])
    return (
        <>
            <nav>
                <div className="nav-bar">
                    {
                        !openSidebar ? <AlignJustify className="side-bar-btn" onClick={() => {
                            setOpenSidebar(true)
                        }} /> : <X className="side-bar-btn" onClick={() => {
                            setOpenSidebar(false)
                        }}/>
                    }
                    <div className="logo">
                        TechTales
                    </div>
                    <ul>
                        <li>Post</li>
                        <li>About</li>
                    </ul>
                </div>
            </nav>
            <nav>
                <div className={`nav-side-bar ${openSidebar ? 'open' : ''}`}>
                    <ul>
                        <li>Post</li>
                        <li>About</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header;