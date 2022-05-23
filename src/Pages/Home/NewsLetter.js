import React from 'react';

const NewsLetter = () => {
    return (
        <div>
            <section class="py-20 2xl:py-40 ">
                <div class="container px-4 mx-auto">
                    <div class="max-w-5xl mx-auto">
                        <div class="relative pt-16 px-6 lg:px-24 pb-20 bg-gray-600 rounded-3xl overflow-hidden">
                            <div class="relative">
                                <span class="text-base lg:text-lg text-white font-bold">More news</span>
                                <h3 class="mt-6 mb-12 text-5xl lg:text-6xl text-white font-bold font-heading">Subscribe now</h3>
                                <div class="sm:max-w-md mb-8 sm:flex sm:items-center sm:bg-white sm:rounded-full">
                                    <span class="hidden sm:inline-block pl-2 sm:pl-6 lg:pl-10">
                                        <svg width="37" height="37" viewbox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="18.5" r="9.5" fill="#1F40FF" fill-opacity="0.15"></circle><circle cx="18.5" cy="18.5" r="18.5" fill="#1F40FF" fill-opacity="0.06"></circle><circle cx="18.5" cy="18.5" r="2.5" fill="#282C36"></circle></svg>
                                    </span>
                                    <input class="w-full sm:w-auto mb-4 sm:mb-0 pl-8 sm:pl-4 py-5 rounded-full placeholder-gray-900 font-bold focus:outline-none" type="email" placeholder="Drop your Email" />
                                    <button class="w-full sm:w-auto ml-auto px-10 py-5 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsLetter;