"use client";

import React, { useState } from "react";
import Image from "next/image";
import fullsaludLogo from "@/assets/fullsalud-logo.png";

export default function FooterExpandable() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    if (!isExpanded) {
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <footer className="w-full bg-white">
      {/* Toggle Button - Pegado al footer */}
      <div className="flex justify-center">
        <button
          onClick={handleToggle}
          className="inline-flex items-center gap-2.5 px-7 py-4 border border-[#078B8C] text-[#078B8C] rounded-t-[15px] bg-white font-medium text-xl hover:bg-fullsalud-teal/5 transition-colors font-inter"
          aria-expanded={isExpanded}
        >
          <span>Más información</span>
          {isExpanded ? (
            <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.9676 8.10664C12.7832 7.91599 12.5307 7.80648 12.2655 7.80199C12.0004 7.79751 11.7444 7.89865 11.5538 8.08301L5.80306 13.6447C5.70602 13.7353 5.62801 13.8444 5.57357 13.9655C5.51913 14.0866 5.48936 14.2173 5.48599 14.3501C5.48261 14.4828 5.50571 14.6149 5.55393 14.7386C5.60216 14.8624 5.67453 14.9752 5.76685 15.0707C5.85916 15.1661 5.96955 15.2422 6.09159 15.2946C6.21363 15.3469 6.34487 15.3744 6.47765 15.3755C6.61043 15.3765 6.74209 15.3511 6.86495 15.3008C6.98782 15.2504 7.09942 15.1761 7.19325 15.0821L12.2252 10.2155L17.0919 15.2475C17.2774 15.4327 17.5283 15.5377 17.7905 15.5398C18.0527 15.5419 18.3052 15.441 18.4937 15.2587C18.6822 15.0764 18.7915 14.8274 18.7982 14.5653C18.8048 14.3031 18.7083 14.0489 18.5293 13.8573L12.9676 8.10664Z" fill="#078B8C"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.9676 15.8934C12.7832 16.084 12.5307 16.1935 12.2655 16.198C12.0004 16.2024 11.7444 16.1013 11.5538 15.917L5.80306 10.3553C5.70602 10.2647 5.62801 10.1556 5.57357 10.0345C5.51913 9.91339 5.48936 9.78265 5.48599 9.64991C5.48261 9.51716 5.50571 9.38508 5.55393 9.26136C5.60216 9.13764 5.67453 9.02477 5.76685 8.92932C5.85916 8.83387 5.96955 8.75776 6.09159 8.70544C6.21363 8.65311 6.34487 8.62561 6.47765 8.62455C6.61043 8.62348 6.74209 8.64888 6.86495 8.69924C6.98782 8.7496 7.09942 8.82393 7.19325 8.91789L12.2252 13.7845L17.0919 8.75254C17.2774 8.56726 17.5283 8.46226 17.7905 8.46016C18.0527 8.45806 18.3052 8.55902 18.4937 8.74131C18.6822 8.9236 18.7915 9.17262 18.7982 9.43474C18.8048 9.69686 18.7083 9.95111 18.5293 10.1427L12.9676 15.8934Z" fill="#078B8C"/>
            </svg>
          )}
        </button>
      </div>

      {/* Divider justo debajo de la pestaña */}
      <div className="w-full border-t border-[#078B8C]/50" />

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#C8E6E6] px-6 py-8">
          {/* Health Tips Cards */}
          <div className="container mx-auto mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Card 1 - Snowflake */}
              <div className="bg-white rounded-[30px] p-6 text-center border-[3px] border-[#078B8C] flex flex-col justify-between items-center gap-2.5 min-h-[215px]">
                <div className="w-12 h-12 mb-2.5 flex items-center justify-center">
                  <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.8887 22.4141L22.4141 26.9395L26.9395 22.4141L22.4141 17.8887L17.8887 22.4141ZM20.6641 8.13867L15.3535 2.82812L17.8281 0.353516L22.4141 4.93945L27 0.353516L29.4746 2.82812L24.1641 8.13867V14.6895L25.9141 16.4395L30.6641 11.6895V6.66406H34.1641V10.6641H38.1641V14.1641H33.1387L28.3887 18.9141L30.1387 20.6641H35.6895L41 15.3535L43.4746 17.8281L38.8887 22.4141L43.4746 27L41 29.4746L35.6895 24.1641H30.1387L28.3887 25.9141L33.1387 30.6641H38.1641V34.1641H34.1641V38.1641H30.6641V33.1387L25.9141 28.3887L24.1641 30.1387V36.6895L29.4746 42L27 44.4746L22.4141 39.8887L17.8281 44.4746L15.3535 42L20.6641 36.6895V30.1387L18.9141 28.3887L14.1641 33.1387V38.1641H10.6641V34.1641H6.66406V30.6641H11.6895L16.4395 25.9141L14.6895 24.1641H8.13867L2.82812 29.4746L0.353516 27L4.93945 22.4141L0.353516 17.8281L2.82812 15.3535L8.13867 20.6641H14.6895L16.4395 18.9141L11.6895 14.1641H6.66406V10.6641H10.6641V6.66406H14.1641V11.6895L18.9141 16.4395L20.6641 14.6895V8.13867Z" fill="#8FBFFA" stroke="black" strokeWidth="0.5"/>
                  </svg>
                </div>
                <p className="text-xl text-black/80 mb-2.5 font-medium font-inter">
                  Tips de salud para la época.
                </p>
                <a href="#" className="text-[#078B8C] font-bold text-xl hover:underline font-inter">
                  Leer más
                </a>
              </div>

              {/* Card 2 - Hospital */}
              <div className="bg-white rounded-[30px] p-6 text-center border-[3px] border-[#078B8C] flex flex-col justify-between items-center gap-2.5 min-h-[215px]">
                <div className="w-12 h-12 mb-2.5 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.15" d="M3.5 45.5C3.5 45.8978 5.65981 46.2794 9.50431 46.5607C13.3488 46.842 18.5631 47 24 47C29.4369 47 34.6512 46.842 38.4957 46.5607C42.3402 46.2794 44.5 45.8978 44.5 45.5C44.5 45.1022 42.3402 44.7206 38.4957 44.4393C34.6512 44.158 29.4369 44 24 44C18.5631 44 13.3488 44.158 9.50431 44.4393C5.65981 44.7206 3.5 45.1022 3.5 45.5Z" fill="#45413C"/>
                    <path d="M4 15H44V18H4V15Z" fill="#8CA4B8"/>
                    <path d="M43 15H5C4.73478 15 4.48043 15.1054 4.29289 15.2929C4.10536 15.4804 4 15.7348 4 16V17C3.98954 17.083 3.98954 17.167 4 17.25C4.05669 17.03 4.18661 16.8358 4.36838 16.6995C4.55014 16.5632 4.77291 16.4928 5 16.5H43C43.2271 16.4928 43.4499 16.5632 43.6316 16.6995C43.8134 16.8358 43.9433 17.03 44 17.25C44.0105 17.167 44.0105 17.083 44 17V16C44 15.7348 43.8946 15.4804 43.7071 15.2929C43.5196 15.1054 43.2652 15 43 15Z" fill="#ADC4D9"/>
                    <path d="M4 15H44V18H4V15Z" stroke="#45413C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 18H43V43.5C43 43.7652 42.8946 44.0196 42.7071 44.2071C42.5196 44.3946 42.2652 44.5 42 44.5H6C5.73478 44.5 5.48043 44.3946 5.29289 44.2071C5.10536 44.0196 5 43.7652 5 43.5V18Z" fill="white"/>
                    <path d="M5 18H43V20.25H5V18Z" fill="#E0E0E0"/>
                    <path d="M5 18H43V43.5C43 43.7652 42.8946 44.0196 42.7071 44.2071C42.5196 44.3946 42.2652 44.5 42 44.5H6C5.73478 44.5 5.48043 44.3946 5.29289 44.2071C5.10536 44.0196 5 43.7652 5 43.5V18Z" stroke="#45413C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.5 12.5H34.5V44.5H13.5V12.5Z" fill="white"/>
                    <path d="M13.5 12.5H34.5V14.29H13.5V12.5Z" fill="#E0E0E0"/>
                    <path d="M13.5 12.5H34.5V44.5H13.5V12.5Z" stroke="#45413C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 33.5H30V44.5H18V33.5Z" fill="#00B8F0"/>
                    <path d="M20.44 44.5H25.64L30 33.93V33.5H24.97L20.44 44.5Z" fill="#4ACFFF"/>
                    <path d="M18 33.5H30V44.5H18V33.5Z" stroke="#45413C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 30H31V33.5H17V30Z" fill="#8CA4B8"/>
                    <path d="M30 30H18C17.7348 30 17.4804 30.1054 17.2929 30.2929C17.1054 30.4804 17 30.7348 17 31V32.5C16.9952 32.5399 16.9952 32.5801 17 32.62C17.0317 32.3779 17.1509 32.1558 17.3352 31.9955C17.5194 31.8353 17.7558 31.7479 18 31.75H30C30.2442 31.7479 30.4806 31.8353 30.6648 31.9955C30.8491 32.1558 30.9683 32.3779 31 32.62C31.0048 32.5801 31.0048 32.5399 31 32.5V31C31 30.7348 30.8946 30.4804 30.7071 30.2929C30.5196 30.1054 30.2652 30 30 30Z" fill="#ADC4D9"/>
                    <path d="M17 30H31V33.5H17V30Z" stroke="#45413C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.5 9.5H35.5V12.5H12.5V9.5Z" fill="#8CA4B8"/>
                    <path d="M34.5 9.5H13.5C13.2348 9.5 12.9804 9.60536 12.7929 9.79289C12.6054 9.98043 12.5 10.2348 12.5 10.5V11.5C12.5059 11.5851 12.5227 11.6691 12.55 11.75C12.6046 11.5383 12.7271 11.3504 12.8986 11.2149C13.0702 11.0795 13.2814 11.004 13.5 11H34.5C34.7271 10.9928 34.9499 11.0632 35.1316 11.1995C35.3134 11.3358 35.4433 11.53 35.5 11.75C35.5105 11.667 35.5105 11.583 35.5 11.5V10.5C35.5 10.2348 35.3946 9.98043 35.2071 9.79289C35.0196 9.60536 34.7652 9.5 34.5 9.5Z" fill="#ADC4D9"/>
                    <path d="M12.5 9.5H35.5V12.5H12.5V9.5Z" stroke="#45413C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M27.5 19H26C25.8674 19 25.7402 18.9473 25.6464 18.8536C25.5527 18.7598 25.5 18.6326 25.5 18.5V17C25.5 16.8674 25.4473 16.7402 25.3536 16.6464C25.2598 16.5527 25.1326 16.5 25 16.5H23C22.8674 16.5 22.7402 16.5527 22.6464 16.6464C22.5527 16.7402 22.5 16.8674 22.5 17V18.5C22.5 18.6326 22.4473 18.7598 22.3536 18.8536C22.2598 18.9473 22.1326 19 22 19H20.5C20.3674 19 20.2402 19.0527 20.1464 19.1464C20.0527 19.2402 20 19.3674 20 19.5V21.5C20 21.6326 20.0527 21.7598 20.1464 21.8536C20.2402 21.9473 20.3674 22 20.5 22H22C22.1326 22 22.2598 22.0527 22.3536 22.1464C22.4473 22.2402 22.5 22.3674 22.5 22.5V24C22.5 24.1326 22.5527 24.2598 22.6464 24.3536C22.7402 24.4473 22.8674 24.5 23 24.5H25C25.1326 24.5 25.2598 24.4473 25.3536 24.3536C25.4473 24.2598 25.5 24.1326 25.5 24V22.5C25.5 22.3674 25.5527 22.2402 25.6464 22.1464C25.7402 22.0527 25.8674 22 26 22H27.5C27.6326 22 27.7598 21.9473 27.8536 21.8536C27.9473 21.7598 28 21.6326 28 21.5V19.5C28 19.3674 27.9473 19.2402 27.8536 19.1464C27.7598 19.0527 27.6326 19 27.5 19Z" fill="#FF6242" stroke="#45413C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 20.5H10.5V25H8V20.5Z" fill="#00B8F0"/>
                    <path d="M8.5 25H10C10.1326 25 10.2598 24.9473 10.3536 24.8535C10.4473 24.7598 10.5 24.6326 10.5 24.5V21C10.4971 20.8907 10.4585 20.7853 10.39 20.7L8.17 24.87C8.26042 24.9522 8.37781 24.9984 8.5 25Z" fill="#4ACFFF"/>
                    <path d="M8 27.5H10.5V32H8V27.5Z" fill="#00B8F0"/>
                    <path d="M8.5 32H10C10.1326 32 10.2598 31.9473 10.3536 31.8535C10.4473 31.7598 10.5 31.6326 10.5 31.5V28C10.4971 27.8907 10.4585 27.7853 10.39 27.7L8.17 31.87C8.26042 31.9522 8.37781 31.9984 8.5 32Z" fill="#4ACFFF"/>
                    <path d="M8 34.5H10.5V39H8V34.5Z" fill="#00B8F0"/>
                    <path d="M8.5 39H10C10.1326 39 10.2598 38.9473 10.3536 38.8535C10.4473 38.7598 10.5 38.6326 10.5 38.5V35C10.4971 34.8907 10.4585 34.7853 10.39 34.7L8.17 38.87C8.26042 38.9522 8.37781 38.9984 8.5 39Z" fill="#4ACFFF"/>
                    <path d="M8 20.5H10.5V25H8V20.5ZM8 27.5H10.5V32H8V27.5ZM8 34.5H10.5V39H8V34.5Z" stroke="#45413C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M37.5 20.5H40V25H37.5V20.5Z" fill="#00B8F0"/>
                    <path d="M38 25H39.5C39.6326 25 39.7598 24.9473 39.8536 24.8535C39.9473 24.7598 40 24.6326 40 24.5V21C39.9971 20.8907 39.9585 20.7853 39.89 20.7L37.67 24.87C37.7604 24.9522 37.8778 24.9984 38 25Z" fill="#4ACFFF"/>
                    <path d="M37.5 27.5H40V32H37.5V27.5Z" fill="#00B8F0"/>
                    <path d="M38 32H39.5C39.6326 32 39.7598 31.9473 39.8536 31.8535C39.9473 31.7598 40 31.6326 40 31.5V28C39.9971 27.8907 39.9585 27.7853 39.89 27.7L37.67 31.87C37.7604 31.9522 37.8778 31.9984 38 32Z" fill="#4ACFFF"/>
                    <path d="M37.5 34.5H40V39H37.5V34.5Z" fill="#00B8F0"/>
                    <path d="M38 39H39.5C39.6326 39 39.7598 38.9473 39.8536 38.8535C39.9473 38.7598 40 38.6326 40 38.5V35C39.9971 34.8907 39.9585 34.7853 39.89 34.7L37.67 38.87C37.7604 38.9522 37.8778 38.9984 38 39Z" fill="#4ACFFF"/>
                    <path d="M24 33.5V44.5M37.5 20.5H40V25H37.5V20.5ZM37.5 27.5H40V32H37.5V27.5ZM37.5 34.5H40V39H37.5V34.5Z" stroke="#45413C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-xl text-black/80 mb-2.5 font-medium font-inter">
                  Chequeos y prevenciones
                </p>
                <a href="#" className="text-[#078B8C] font-bold text-xl hover:underline font-inter">
                  Leer más
                </a>
              </div>

              {/* Card 3 - Thermometer */}
              <div className="bg-white rounded-[30px] p-6 text-center border-[3px] border-[#078B8C] flex flex-col justify-between items-center gap-2.5 min-h-[215px]">
                <div className="w-12 h-12 mb-2.5 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.73 26.886H33.572M29.73 17.28H33.572M29.73 7.67201H33.572" stroke="#191919" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M25.906 31.728V5.82801C25.906 4.81302 25.5028 3.83961 24.7851 3.12191C24.0674 2.40421 23.094 2.00101 22.079 2.00101C21.064 2.00101 20.0906 2.40421 19.3729 3.12191C18.6552 3.83961 18.252 4.81302 18.252 5.82801V31.728C16.794 32.5704 15.6547 33.8702 15.0107 35.426C14.3666 36.9818 14.2539 38.7066 14.69 40.333C15.126 41.9594 16.0865 43.3965 17.4224 44.4215C18.7584 45.4464 20.3952 46.0019 22.079 46.0019C23.7628 46.0019 25.3996 45.4464 26.7356 44.4215C28.0715 43.3965 29.032 41.9594 29.468 40.333C29.9041 38.7066 29.7914 36.9818 29.1473 35.426C28.5033 33.8702 27.364 32.5704 25.906 31.728Z" fill="#FF808C"/>
                    <path d="M22.078 40.256C22.5851 40.256 23.0714 40.0546 23.43 39.696C23.7886 39.3374 23.99 38.8511 23.99 38.344C23.99 37.8369 23.7886 37.3506 23.43 36.992C23.0714 36.6335 22.5851 36.432 22.078 36.432C21.5709 36.432 21.0846 36.6335 20.726 36.992C20.3674 37.3506 20.166 37.8369 20.166 38.344C20.166 38.8511 20.3674 39.3374 20.726 39.696C21.0846 40.0546 21.5709 40.256 22.078 40.256Z" fill="#FFEF5E" stroke="#191919" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22.08 2.002C21.5775 2.00121 21.0798 2.09957 20.6154 2.29144C20.151 2.48331 19.729 2.76492 19.3736 3.12014C19.0181 3.47537 18.7363 3.89722 18.5442 4.36154C18.3521 4.82585 18.2535 5.32351 18.254 5.826V15.822H25.904V5.828C25.9048 5.32585 25.8066 4.82847 25.6149 4.36431C25.4233 3.90015 25.1421 3.47833 24.7873 3.12298C24.4325 2.76762 24.0111 2.4857 23.5472 2.29336C23.0834 2.10101 22.5862 2.002 22.084 2.002H22.08Z" fill="white"/>
                    <path d="M22.08 36.43V7.74001M25.906 31.728V5.82801C25.906 4.81302 25.5028 3.83961 24.7851 3.12191C24.0674 2.40421 23.094 2.00101 22.079 2.00101C21.064 2.00101 20.0906 2.40421 19.3729 3.12191C18.6552 3.83961 18.252 4.81302 18.252 5.82801V31.728C16.794 32.5704 15.6547 33.8702 15.0107 35.426C14.3666 36.9818 14.2539 38.7066 14.69 40.333C15.126 41.9594 16.0865 43.3965 17.4224 44.4215C18.7584 45.4464 20.3952 46.0019 22.079 46.0019C23.7628 46.0019 25.3996 45.4464 26.7356 44.4215C28.0715 43.3965 29.032 41.9594 29.468 40.333C29.9041 38.7066 29.7914 36.9818 29.1473 35.426C28.5033 33.8702 27.364 32.5704 25.906 31.728Z" stroke="#191919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-xl text-black/80 mb-2.5 font-medium font-inter">
                  Tips para la fiebre
                </p>
                <a href="#" className="text-[#078B8C] font-bold text-xl hover:underline font-inter">
                  Leer más
                </a>
              </div>

              {/* Card 4 - Apple */}
              <div className="bg-white rounded-[30px] p-6 text-center border-[3px] border-[#078B8C] flex flex-col justify-between items-center gap-2.5 min-h-[215px]">
                <div className="w-12 h-12 mb-2.5 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 9.83333C34.5947 9.83333 37.4732 10.4832 39.6914 12.2259C41.8888 13.9523 43.5 16.7991 43.5 21.3333C43.5 28.5797 41.5226 35.1636 38.8955 39.9251C37.5816 42.3065 36.1139 44.2168 34.665 45.5247C33.2052 46.8426 31.821 47.5002 30.667 47.5003C28.7396 47.5003 27.8018 47.1828 27.0186 46.8695C26.1944 46.5398 25.4428 46.1663 24 46.1663C22.5572 46.1663 21.8056 46.5398 20.9814 46.8695C20.1982 47.1828 19.2604 47.5003 17.333 47.5003C16.179 47.5002 14.7948 46.8426 13.335 45.5247C11.8861 44.2168 10.4184 42.3065 9.10449 39.9251C6.47742 35.1636 4.5 28.5797 4.5 21.3333C4.5 16.8 6.11129 13.9535 8.30859 12.2269C10.5268 10.484 13.4054 9.83333 16 9.83333C17.9242 9.83333 18.8668 10.149 19.8418 10.474C20.8668 10.8156 21.9244 11.1663 24 11.1663C26.0756 11.1663 27.1332 10.8156 28.1582 10.474C29.1332 10.149 30.0758 9.83333 32 9.83333Z" fill="#DD2E44" fillOpacity="0.8" stroke="black"/>
                    <path d="M25.3333 9.33333C25.3333 9.33333 29.3333 4 36 4C41.3333 4 44 6.66667 44 6.66667C44 6.66667 38.6667 10.6667 34.6667 10.6667C30.6667 10.6667 25.3333 9.33333 25.3333 9.33333Z" fill="#77B255"/>
                    <path d="M24 13.3333C23.6464 13.3333 23.3072 13.1929 23.0572 12.9428C22.8071 12.6928 22.6667 12.3536 22.6667 12C22.6667 7.412 24.2667 3.18 27.0573 0.390664C27.3073 0.140653 27.6464 0.000198364 28 0.000198364C28.3536 0.000198364 28.6926 0.140653 28.9427 0.390664C29.1927 0.640674 29.3331 0.979762 29.3331 1.33333C29.3331 1.6869 29.1927 2.02599 28.9427 2.276C26.648 4.56933 25.3333 8.11333 25.3333 12C25.3333 12.3536 25.1928 12.6928 24.9428 12.9428C24.6928 13.1929 24.3536 13.3333 24 13.3333Z" fill="#662113"/>
                  </svg>
                </div>
                <p className="text-xl text-black/80 mb-2.5 font-medium font-inter">
                  Beneficios de las frutas en la dieta
                </p>
                <a href="#" className="text-[#078B8C] font-bold text-xl hover:underline font-inter">
                  Leer más
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links Section */}
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Logo and Social */}
              <div className="flex flex-col items-center justify-center">
                <div className="mb-6 flex justify-center">
                  <Image
                    src={fullsaludLogo}
                    alt="Full Salud"
                    width={100}
                    height={98}
                    className="w-auto h-auto"
                  />
                </div>
                <p className="text-sm font-semibold text-fullsalud-charcoal mb-6">Redes sociales</p>
                <div className="flex gap-3 justify-center">
                  <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors" aria-label="Facebook">
                    <svg className="w-4 h-4 text-fullsalud-teal" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors" aria-label="Instagram">
                    <svg className="w-4 h-4 text-fullsalud-teal" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors" aria-label="WhatsApp">
                    <svg className="w-4 h-4 text-fullsalud-teal" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Acerca de */}
              <div>
                <h3 className="font-semibold text-fullsalud-charcoal mb-4">Acerca de</h3>
                <ul className="space-y-2 text-sm text-fullsalud-charcoal">
                  <li><a href="#" className="hover:text-fullsalud-teal transition-colors">Full Salud</a></li>
                  <li><a href="#" className="hover:text-fullsalud-teal transition-colors">Especialistas que acepten tu obra social</a></li>
                  <li><a href="#" className="hover:text-fullsalud-teal transition-colors">Blog de Salud y Consejos.</a></li>
                  <li><a href="#" className="hover:text-fullsalud-teal transition-colors">Soy médico quiero sumarme.</a></li>
                </ul>
              </div>

              {/* Otros sitios */}
              <div>
                <h3 className="font-semibold text-fullsalud-charcoal mb-4">Otros sitios</h3>
                <ul className="space-y-2 text-sm text-fullsalud-charcoal">
                  <li><a href="#" className="hover:text-fullsalud-teal transition-colors">Full Shop</a></li>
                  <li><a href="#" className="hover:text-fullsalud-teal transition-colors">Full Farma</a></li>
                  <li><a href="#" className="hover:text-fullsalud-teal transition-colors">Mis Recetas.</a></li>
                  <li><a href="#" className="hover:text-fullsalud-teal transition-colors">Pastillero electrónico.</a></li>
                  <li><a href="#" className="hover:text-fullsalud-teal transition-colors">Mi historia clínica.</a></li>
                  <li><a href="#" className="hover:text-fullsalud-teal transition-colors">Mi Grupo Familiar.</a></li>
                  <li><a href="#" className="hover:text-fullsalud-teal transition-colors">Productos con pedido medico.</a></li>
                  <li><a href="#" className="hover:text-fullsalud-teal transition-colors">Nutrición y Bienestar Integral</a></li>
                  <li><a href="#" className="hover:text-fullsalud-teal transition-colors">App Full Salud</a></li>
                </ul>
              </div>

              {/* Ayuda */}
              <div>
                <h3 className="font-semibold text-fullsalud-charcoal mb-4">Ayuda</h3>
                <ul className="space-y-2 text-sm text-fullsalud-charcoal">
                  <li><a href="#" className="hover:text-fullsalud-teal transition-colors">Cancelar o Reprogramar Turno</a></li>
                  <li><a href="#" className="hover:text-fullsalud-teal transition-colors">Guía para Primeras Consultas</a></li>
                  <li><a href="#" className="hover:text-fullsalud-teal transition-colors">Preguntas Frecuentes</a></li>
                  <li><a href="#" className="hover:text-fullsalud-teal transition-colors">Cómo Contactarnos</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="container mx-auto mt-8 pt-6 border-t border-fullsalud-teal/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-fullsalud-charcoal max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href="#" className="hover:text-fullsalud-teal transition-colors">Quiénes somos</a>
                <span className="text-fullsalud-teal">|</span>
                <a href="#" className="hover:text-fullsalud-teal transition-colors">Equipo médico y especialistas</a>
                <span className="text-fullsalud-teal">|</span>
                <a href="#" className="hover:text-fullsalud-teal transition-colors">Preguntas frecuentes</a>
                <span className="text-fullsalud-teal">|</span>
                <a href="#" className="hover:text-fullsalud-teal transition-colors">Enfermedades</a>
                <span className="text-fullsalud-teal">|</span>
                <a href="#" className="hover:text-fullsalud-teal transition-colors">Trabaja con nosotros</a>
                <span className="text-fullsalud-teal">|</span>
                <a href="#" className="hover:text-fullsalud-teal transition-colors">Medicamento</a>
                <span className="text-fullsalud-teal">|</span>
                <a href="#" className="hover:text-fullsalud-teal transition-colors">Contacto y soporte</a>
              </div>
            </div>
            <div className="text-center mt-4 text-sm text-fullsalud-charcoal">
              <p>Copyright © 1999-2025 Full Salud S.R.L</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
