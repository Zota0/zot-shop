"use client";
import React, { useEffect } from "react";
import {LucideArrowBigUp} from "lucide-react";

const ScrollUp = ({useAccessKey}:{useAccessKey?:boolean}) => {
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            left: 0,
        });
    };
    
    const UsingAccessKey = React.memo(() => (
        <button
            type='reset'
            name='scroll-to-top'
            aria-label='scroll to top of the page'
            title='scroll to the top'
            className='scroll-top'
            onClick={scrollToTop}
        >
            <div className='arrow'>
                <LucideArrowBigUp
                    size={48}
                    className='fill-primary stroke-primary'
                />
            </div>
        </button>
    ));
    const NotUsingAccessKey = React.memo(() => (
        <button
            type='reset'
            name='scroll-to-top'
            aria-label='scroll to top of the page'
            title='scroll to the top'
            className='scroll-top'
            onClick={scrollToTop}
        >
            <div className='arrow'>
                <LucideArrowBigUp
                    size={48}
                    className='fill-primary stroke-primary'
                />
            </div>
        </button>
    ));

    UsingAccessKey.displayName = "UsingAccessKey";
    NotUsingAccessKey.displayName = "NotUsingAccessKey";

    const ScrollUpReturn = React.memo(() => (
        (useAccessKey && useAccessKey == true) ? (
            <UsingAccessKey />
        ) : ( 
            <NotUsingAccessKey />
        )
    ));
    ScrollUpReturn.displayName = "ScrollUpReturn";

    return <ScrollUpReturn />;
}

const LayoutScrollTop = () => {
    const [showScrollUp, setShowScrollUp] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollUp(window.scrollY > 100);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const ScrollToTop = React.memo(() => (
		<div className='div-c'>{showScrollUp && <ScrollUp />}</div>
	));
    ScrollToTop.displayName = "ScrollToTop";

    return (
		<ScrollToTop />
	);
}

export default React.memo(ScrollUp);
export { LayoutScrollTop };