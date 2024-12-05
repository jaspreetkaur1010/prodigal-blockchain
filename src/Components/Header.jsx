import React, { useState, useRef } from 'react';
import { sections, platformItems } from '../constants';
import logo from "../assets/BlockchainLogo.png";

export default function Header() {
    const [visibleMenu, setVisibleMenu] = useState(false);
    const [focusedApi, setFocusedApi] = useState('API 1');
    
    const [isFocused, setFocusedTab] = useState('');

    const menuHandler = () => setVisibleMenu(prev => !prev);
    const handleOnFocus = (api) => setFocusedApi(api);

    const focusTimeoutRef = useRef(null);

    const tabFocus = (tab) => {
            clearTimeout(focusTimeoutRef.current);
            setFocusedTab(tab); 
    };
    const tabFocusOut = () => {
        // Clear the timeout and reset focus
        clearTimeout(focusTimeoutRef.current);
        focusTimeoutRef.current = setTimeout(() => {
            setFocusedTab('');
        }, 400);
    };

    return (
        <div className="relative h-full py-8 px-2 sm:px-6 md:px-12">
            <div className="flex items-center justify-between border px-8 bg-white bg-opacity-80 rounded-[40px] w-full h-20">
                <div className="flex items-center justify-center">
                    <img src={logo} className="h-16" alt="Logo" />

                    <div className="hidden h-full lg:flex pl-2">
                        <ul className="flex h-full space-x-6 lg:space-x-6 xl:space-x-12">

                            <div className="relative cursor-pointer" 
                            onMouseEnter={()=>tabFocus('tab1')} 
                            onMouseLeave={tabFocusOut}
                            >
                                <li>Platform</li>
                                {isFocused==='tab1' && (

                                <div className="flex absolute top-16 bg-white border w-[600px] rounded-xl transition-opacity duration-300"
                                onMouseEnter={()=>tabFocus('tab1')} >
                                    <div className="bg-gray-100 w-1/3 p-2 rounded-l-xl border-r space-y-2">
                                        <div
                                            className={`cursor-pointer p-2 space-y-2 rounded-lg ${focusedApi === 'API 1' ? 'bg-gray-200' : ''}`}
                                            onClick={() => handleOnFocus('API 1')}
                                        >
                                            <h2 className="font-medium">API 1</h2>
                                            <p className="text-sm text-gray-500">Integrate any blockchain</p>
                                        </div>
                                        <div
                                            className={`cursor-pointer p-2 space-y-2 rounded-lg ${focusedApi === 'API 2' ? 'bg-gray-200' : ''}`}
                                            onClick={() => handleOnFocus('API 2')}
                                        >
                                            <h2 className="font-medium">API 2</h2>
                                            <p className="text-sm text-gray-500">Integrate any blockchain</p>
                                        </div>
                                    </div>

                                    <div className="h-full w-2/3 p-4 flex items-center">
                                        {focusedApi === 'API 1' ? (
                                            <div className="w-full">
                                            {platformItems.map((item, index) => (
                                                <div key={index} className="group p-2 w-full hover:bg-gray-200 flex items-top space-x-4 text-sm transition-all duration-300 rounded-md">
                                                    <i className={`fa-solid ${item.icon} p-2`}></i>
                                                    <div className="space-y-1">
                                                        <div className="flex items-center">
                                                            <h2 className="font-medium group-hover:text-blue-500">{item.title}</h2>
                                                            <i className="custom-arrow fa-solid fa-arrow-right"></i>
                                                        </div>
                                                        <p className="text-xs md:text-sm text-gray-500">{item.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        ) : (
                                            <div>API 2 content</div>
                                        )}
                                    </div>
                                </div>
                                 )}
                            </div>

                            <div 
                                className="relative cursor-pointer"
                                onMouseEnter={() => tabFocus('tab2')}
                                onMouseLeave={tabFocusOut}
                            >
                                <li>Security</li>
                                {isFocused === 'tab2' && (
                                    <div className="absolute p-2 top-16 bg-white border w-[600px] rounded-xl transition-opacity duration-300">
                                        {sections[1].items.map((item, index) => (
                                           <div key={index} className="group p-2 w-full hover:bg-gray-200 flex items-top space-x-4 text-sm transition-all duration-300 rounded-md">
                                                <i className={`fa-solid ${item.icon} p-2`}></i>
                                                <div className="space-y-1">
                                                    <div className="flex items-center">
                                                        <h2 className="font-medium group-hover:text-blue-500">{item.title}</h2>
                                                        <i className="custom-arrow fa-solid fa-arrow-right"></i>
                                                    </div>
                                                    <p className="text-xs md:text-sm text-gray-500">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div 
                                className="relative cursor-pointer"
                                onMouseEnter={() => tabFocus('tab3')}
                                onMouseLeave={tabFocusOut}
                            >
                                <li>Solutions</li>
                                {isFocused === 'tab3' && (
                                    <div className='absolute p-2 top-16 bg-white border w-[500px] rounded-xl transition-opacity duration-300'>Content 3 here </div>
                                )}
                            </div>

                            <div 
                                className="relative cursor-pointer"
                                onMouseEnter={() => tabFocus('tab4')}
                                onMouseLeave={tabFocusOut}
                            >
                                <li>Solutions</li>
                                {isFocused === 'tab4' && (
                                    <div className='absolute p-2 top-16 bg-white border w-[400px] rounded-xl transition-opacity duration-300'>Content 4 here </div>
                                )}
                            </div>

                            <div 
                                className="relative cursor-pointer"
                                onMouseEnter={() => tabFocus('tab5')}
                                onMouseLeave={tabFocusOut}
                            >
                                <li>Solutions</li>
                                {isFocused === 'tab5' && (
                                    <div className='absolute p-2 top-16 bg-white border w-[300px] rounded-xl transition-opacity duration-300'>Content 5 here </div>
                                )}
                            </div>
                        </ul>
                    </div>
                </div>

                <div className="hidden lg:flex space-x-4 items-center">
                    <h2 className="text-gray-500">Contact Sales</h2>
                    <button className="text-white py-2 px-4 rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-500">Sign in</button>
                </div>

                {/* For smaller screens */}
                <div
                    className="lg:hidden cursor-pointer rounded-full size-12 flex items-center justify-center border border-gray-200 bg-white bg-opacity-70"
                    onClick={menuHandler}
                >
                    {!visibleMenu ? <i className="fa-solid fa-bars text-2xl"></i> : <i className="fa-solid fa-xmark text-2xl"></i>}
                </div>

                {visibleMenu && (
                    <div className="lg:hidden absolute w-4/5 h-96 overflow-y-auto top-36 p-4 left-1/2 transform -translate-x-1/2 rounded-xl bg-white">
                        <ul className="parent-ul space-y-2">
                            {sections.map(section => (
                                <li key={section.key} className="border-b py-4 group relative">
                                    <div className="cursor-pointer">{section.title}</div>
                                    <div className="hidden group-hover:flex flex-col p-2 md:p-4 rounded w-full z-10">
                                        <h2 className="text-gray-400 pt-2">{section.header}</h2>
                                        <div className="py-2 grid md:grid-cols-2 gap-3">
                                            {section.items.map((item, index) => (
                                                <div key={index} className="flex items-top space-x-4 text-sm">
                                                    <i className={`fa-solid ${item.icon} p-2`}></i>
                                                    <div className="space-y-1">
                                                        <h2 className="font-medium">{item.title}</h2>
                                                        <p className="text-xs md:text-sm">{item.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
