import React, {useEffect, useState, useRef} from "react";
import "./GoTopBtn.scss"
import ArrImg from "../../assets/GoTopArr.webp"

const GoTopBtn = () => {
    const goTopRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            setIsVisible(scrollTop > 10);
        }

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };
    
    return(
        <div ref={goTopRef} onClick={scrollToTop} className={`go_top ${isVisible ? null : "hide"}`}>
            <img src={ArrImg} />
        </div>
    )
}

export default GoTopBtn;