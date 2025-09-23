'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


export default function ScrollIndicator() {
    gsap.registerPlugin(ScrollTrigger);

    const indicatorRef = useRef(null);

    useEffect(() => {
        const showNav = gsap.fromTo(
            indicatorRef.current, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.4
        }).progress(1);
        ScrollTrigger.create({
            start: "top top",
            end: "max",
            onUpdate: (self) => {
                self.direction === -1 ?
                    showNav.play()
                    : showNav.reverse()
            }
        });
    }, [])


    return (
            <div className={"absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 animate-fade-in"}
            >
                
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 animate-bounce"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="blue"
                        //onClick={handleScroll}
                        ref={indicatorRef}
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
            
            </div>
    );
};
