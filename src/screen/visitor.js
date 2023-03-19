
import React from 'react';
import './visitor.css';


export default function Visitor() {
    return ( 
        <div className="Container">
            <div className="visitor_container">
                <div className="title">
                    <h1>Find the right talent, or job, for your business</h1>
                </div>
                <div className="visitor_search"> 
                    <div className='visitor_search_inner'>
                        <div className="search_text_field">
                            <input  className='search_input' type="text" placeholder="Search for jobs or skills " />
                        </div>
                        <div className="search_buttons">
                            <button className='search_button'>Search</button>
                        </div>
                    </div>
                </div>

                <div className="categories">
                    <div className="category">
                        <div className='category_inline'><button className='category_button'>Development & It</button></div>
                        <div className='category_inline'><button className='category_button'>Design & creative</button></div>
                        <div className='category_inline'><button className='category_button'>Sales & Marketing</button></div>
                        <div className='category_inline'><button className='category_button'>Writing & Translation</button></div>

                        <div className='category_inline'><button className='category_button'>Admin & Customer Support</button></div>
                        <div className='category_inline'><button className='category_button'>Finance & Accounting</button></div>
                        <div className='category_inline'><button className='category_button'>Engineering & Architecture</button></div>
                        <div className='category_inline'><button className='category_button'>Legal</button></div>
                        
                

                    </div>

                </div>

            </div>
        </div>

    );
}