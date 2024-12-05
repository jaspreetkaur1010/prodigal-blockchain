import React from 'react';
import { useState } from 'react';
import Header from '../Components/Header';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function HomePage() {

    const codeString = `{
    "transactionRequest": {
        "type": "TRANSFER",
        "walletId": "9444124d-305d-4e56-a0fd-bce1c7f1537c",
        "to": "0xf56799d7C95C6DEb708A9F55b2e75A685A94F980",
        "secretType": "ETHEREUM",
        "value": 0
    }
}`;

    const [toggleState,setToggleState]= useState(1);
    const toggleTab =(index) =>{
        setToggleState(index);
    }
    return (
        <>
            <div className='fixed w-full'>
                <Header/>
            </div>

            {/* SECTION 1 */}
            <div className='pt-36 lg:space-x-4 py-6 md:py-12 md:pt-36 px-6 md:px-8 lg:px-32 lg:flex '>
                <div className='lg:w-1/2 space-y-4'>
                    <h2 className='text-3xl md:text-4xl lg:text-6xl font-bold text-blue-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p className='text-sm md:text-lg'> Eligendi architecto quibusdam voluptatem, libero, earum, quod accusamus vitae aperiam nobis et tempore ullam facilis qui asperiores blanditiis ipsam sint omnis. Sint?</p>
                    <button className='bg-indigo-700 font-semibold text-white text-xs md:text-sm px-4 py-2 rounded-full'>Get started for free</button>
                </div>
                <div className='pt-6 md:pt-8 lg:pt-0 lg:w-1/2 flex items-center'>
                    <video
                        src="https://webcdn.synthesia.io/HomeHeroVideos/02.08.24/Alex_NEW_WBHERO_1400px_2Mbps.webm"
                        width="100%"
                        height="100%"
                        className="object-cover rounded-xl shadow-xl"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </div>


            {/* SECTION 2 */}
            <div className='md:flex px-6 md:px-8 md:space-x-6 lg:px-32 py-6 md:py-12'>
                
                <div className='md:w-1/2 items-center pt-4 justify-center'>
                    <h2 className='text-3xl lg:text-4xl lg:w-3/4 font-bold'><span className='text-blue-700'>Ship faster</span> with powerful APIs</h2>
                    <p className='text-xs pt-3 w-3/4'>Focus on your product with Venly as your Web3 provider. Utilize our blockchain APIs for seamless integration and let us do all the heavy lifting.</p>
                    <div className='py-6 space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 lg:gap-y-0'>
                        <div className='text-sm relative group py-2 space-y-4'>
                            <h2 className='font-semibold'><i className='fa-solid fa-icons pr-4'></i>Digital Wallets</h2>
                            <p className='text-xs text-gray-500 lg:pb-12'>Onboard users in seconds with secure and easy-to-integrate wallets for your platform.</p>
                            <p className='text-xs text-blue-800 font-semibold lg:absolute bottom-5 lg:opacity-0 group-hover:bottom-8 group-hover:opacity-100 transform-all translate-all ease-in duration-200'>Learn more <i className='fa-solid fa-chevron-right'></i></p>
                        </div>
                        <div className='text-sm relative group py-2 space-y-4'>
                            <h2 className='font-semibold'><i className='fa-solid fa-icons pr-4'></i>Digital Wallets</h2>
                            <p className='text-xs text-gray-500 lg:pb-12'>Onboard users in seconds with secure and easy-to-integrate wallets for your platform.</p>
                            <p className='text-xs text-blue-800 font-semibold lg:absolute bottom-5 lg:opacity-0 group-hover:bottom-8 group-hover:opacity-100 transform-all translate-all ease-in duration-200'>Learn more <i className='fa-solid fa-chevron-right'></i></p>
                        </div>
                        <div className='text-sm relative group py-2 space-y-4'>
                            <h2 className='font-semibold'><i className='fa-solid fa-icons pr-4'></i>Digital Wallets</h2>
                            <p className='text-xs text-gray-500 lg:pb-12'>Onboard users in seconds with secure and easy-to-integrate wallets for your platform.</p>
                            <p className='text-xs text-blue-800 font-semibold lg:absolute bottom-5 lg:opacity-0 group-hover:bottom-8 group-hover:opacity-100 transform-all translate-all ease-in duration-200'>Learn more <i className='fa-solid fa-chevron-right'></i></p>
                        </div>
                        <div className='text-sm relative group py-2 space-y-4'>
                            <h2 className='font-semibold'><i className='fa-solid fa-icons pr-4'></i>Digital Wallets</h2>
                            <p className='text-xs text-gray-500 lg:pb-12'>Onboard users in seconds with secure and easy-to-integrate wallets for your platform.</p>
                            <p className='text-xs text-blue-800 font-semibold lg:absolute bottom-5 lg:opacity-0 group-hover:bottom-8 group-hover:opacity-100 transform-all translate-all ease-in duration-200'>Learn more <i className='fa-solid fa-chevron-right'></i></p>
                        </div>
                    </div> 
                    <button className='bg-indigo-700 font-semibold text-white text-xs md:text-sm px-4 py-2 rounded-full'>Get started for free</button>                  
                </div>
                
                <div className='md:w-1/2 pt-12 md:pt-0'>
                    <img 
                    className='h-full mx-auto px-24 border rounded-2xl border-blue-200'
                    src="https://cdn.prod.website-files.com/6347bd6199b204194ca76e2c/65dcb33f7d0c4d28bf13647b_lines-mobile.svg"></img>
                </div>
               
            </div>
            
            {/* SECTION 3 */}

            <div className='md:flex px-6 md:px-8 md:space-x-6 lg:px-32 py-6 md:py-12 items-center justify-between bg-gray-900'>
                <div className='md:w-1/2 space-y-6'>
                    <h2 className='text-blue-300 font-bold text-4xl'>Build in Web3, <br/> effortlessly.</h2>
                    <button className='bg-white font-semibold text-blue-900 text-xs md:text-sm px-4 py-2 rounded-full'>Get started for free</button>
                </div>
                <div className='md:flex md:w-1/2 space-y-4 py-4 md:space-y-0 md:py-0 md:space-x-6'>
                    <div className='md:w-1/2 group space-y-2'>
                        <h2 className='font-semibold text-white'>Documentation</h2>
                        <p className='text-gray-300 text-sm text-justify'>Get started with our documentation to easily integrate blockchain into your apps using APIs, SDKs, and guides.</p>
                        <p className='text-blue-400 text-sm'>Learn more <i className='fa-solid fa-chevron-right text-sm transform transition-all duration-300 ease-in group-hover:pl-2'></i></p>
                    </div>
                    <div className='md:w-1/2 group space-y-2'>
                        <h2 className='font-semibold text-white'>Documentation</h2>
                        <p className='text-gray-300 text-sm text-justify'>Get started with our documentation to easily integrate blockchain into your apps using APIs, SDKs, and guides.</p>
                        <p className='text-blue-400 text-sm'>Learn more <i className='fa-solid fa-chevron-right text-sm transform transition-all duration-300 ease-in group-hover:pl-2'></i></p>
                    </div>
                </div>
            </div>
            <div className='px-6 md:px-8 lg:px-32 py-6 md:py-12 bg-gray-900'>
                <div className="md:flex justify-between bg-gray-900 border border-l-blue-900 border-y-gray-700 border-r-gray-500 rounded-lg text-white">
                    {/* Sidebar */}
                    <div className="w-1/4 rounded-l-lg border-r border-gray-700 bg-gray-800 p-6">
                        <ul className="space-y-4">
                        <li className="text-blue-400">Create a wallet</li>
                        <li className="text-white bg-blue-600 rounded-lg p-2">
                            Transfer a native token
                        </li>
                        <li className="text-blue-400">Create contract</li>
                        <li className="text-blue-400">Mint an NFT</li>
                        <li className="text-blue-400">Fetch Stripe dashboard</li>
                        <li className="text-blue-400">Checkout management</li>
                        </ul>
                    </div>

                    {/* Main Content */}
                    <main className="flex-1 p-8">
                        {/* Endpoint Section */}
                        <div className="items-center space-y-4 mb-12">
                            <span className="bg-gray-700 px-3 py-1 rounded-sm text-blue-400 text-sm">HTTP</span>
                            <div className="text-md"><span className='text-blue-300'>POST</span> /api/transactions/execute</div>
                        </div>

                        {/* JSON Section */}
                        <div className='space-y-4'>
                            <span className="bg-gray-700 px-3 py-1 rounded-sm text-blue-400 text-sm">JSON</span>
                            <SyntaxHighlighter language="javascript" style={atomOneDark} className="rounded-lg border border-blue-900">
                                {codeString}
                            </SyntaxHighlighter>
                        </div>

                        {/* Docs Button */}
                        <div className="mt-6">
                            <button className="group bg-gray-800 py-2 pl-4 pr-4 rounded-md border border-gray-400 text-sm text-white">
                                View in docs
                                <i className='fa-solid fa-chevron-right text-xs transform transition-all duration-200 pl-2 pr-2 ease-in group-hover:pl-4 group-hover:pr-0'></i>
                            </button>
                        </div>
                    </main>
                </div>
            </div>




            {/* SECTION 4 */}
            <div className='px-6 md:px-8 lg:px-32 h-full py-6 md:py-12 bg-blue-800'>
                <h2 className='text-3xl text-blue-100 font-bold'>Build for any industry with our platform</h2>
                <p className='text-lg text-blue-300 font-medium pt-4'>Custom-fit Web3 solutions for any project. Enhance experiences, ensure reliability, and leverage blockchain efficiency to lead your industry.</p>
                <div className='w-full md:flex md:space-x-12 pt-8'>

                    <div className='space-y-4 md:pt-12 md:w-1/2'>
                        <div className={`py-4 px-8 text-white rounded-lg justify-center bg-gradient-to-r from-blue-800 to-blue-900 border border-l-blue-700 border-y-blue-400 border-r-gray-300`}
                        onClick={()=>toggleTab(1)}>
                            <div className={`w-full flex items-center justify-between`}>
                                <p className='font-bold'>Gaming</p>
                                <div className='size-8 flex justify-center items-center rounded-full bg-blue-300'>
                                    <i className={`fa-solid fa-plus ${toggleState===1 ? "icon rotate-icon":"icon"}`}></i>
                                </div>
                            </div>
                            <h2 className={`text-xs md:text-sm text-gray-300 ${toggleState===1 ? "content show":"content"}`}>Empower gameplay, seamlessly onboard players, fortify security, and open doors to innovative monetization strategies.</h2>
                        </div>
                        <div className={`py-4 px-8 text-white rounded-lg justify-center bg-gradient-to-r from-blue-800 to-blue-900 border border-l-blue-700 border-y-blue-400 border-r-gray-300`}
                        onClick={()=>toggleTab(2)}>
                            <div className={`w-full flex items-center justify-between`}>
                                <p className='font-bold'>Gaming</p>
                                <div className='size-8 flex justify-center items-center rounded-full bg-blue-300'>
                                    <i className={`fa-solid fa-plus ${toggleState===2 ? "icon rotate-icon":"icon"}`}></i>
                                </div>
                            </div>
                            <h2 className={`text-xs md:text-sm text-gray-300 ${toggleState===2 ? "content show":"content"}`}>Empower gameplay, seamlessly onboard players, fortify security, and open doors to innovative monetization strategies.</h2>
                        </div>
                        <div className={`py-4 px-8 text-white rounded-lg justify-center bg-gradient-to-r from-blue-800 to-blue-900 border border-l-blue-700 border-y-blue-400 border-r-gray-300`}
                        onClick={()=>toggleTab(3)}>
                            <div className={`w-full flex items-center justify-between`}>
                                <p className='font-bold'>Gaming</p>
                                <div className='size-8 flex justify-center items-center rounded-full bg-blue-300'>
                                    <i className={`fa-solid fa-plus ${toggleState===3 ? "icon rotate-icon":"icon"}`}></i>
                                </div>
                            </div>
                            <h2 className={`text-xs md:text-sm text-gray-300 ${toggleState===3 ? "content show":"content"}`}>Empower gameplay, seamlessly onboard players, fortify security, and open doors to innovative monetization strategies.</h2>
                        </div>
                    </div>

                    <div className={`md:w-1/2 pt-4 md:pt-0 flex justify-center items-start ${toggleState===1 ? "":"hidden"}`}>
                        <img src="https://cdn.prod.website-files.com/6347bd6199b204194ca76e2c/65cf3a54ab1d0386d62cbda4_industry-gaming-p-800.jpg" 
                        className='rounded-lg h-96'></img>
                    </div>
                    <div className={`md:w-1/2 pt-4 md:pt-0 flex justify-center items-start ${toggleState===2 ? "":"hidden"}`}>
                        <img src="https://cdn.prod.website-files.com/6347bd6199b204194ca76e2c/65ef042b834a0e1c40207462_industry-1.webp" 
                        className='rounded-lg h-96'></img>
                    </div>
                    <div className={`md:w-1/2 pt-4 md:pt-0 flex justify-center items-start ${toggleState===3 ? "":"hidden"}`}>
                        <img src="https://cdn.prod.website-files.com/6347bd6199b204194ca76e2c/65ef042b20b1b3b54cd1d33a_industry-3-p-800.webp" 
                        className='rounded-lg h-96'></img>
                    </div>
                </div>
            </div>

        </>
    );
}
