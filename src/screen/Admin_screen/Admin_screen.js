

import React from 'react';
import './Admin_screen.css';


export default function Admin_screen() {
    return (
        <div className="Admin_container">
            
            <div className="Admin_permission_table">
                <div className='Admin_permission_body'>
                    <div className="Admin_permission_table_header">
                    <div className="Admin_permission_table_header_item">ID</div>
                    <div className="Admin_permission_table_header_item">Request by</div>
                    <div className="Admin_permission_table_header_item">Email</div>
                    <div className="Admin_permission_table_header_item">Priority</div>
                    <div className="Admin_permission_table_header_item">Status</div>
                    <div className="Admin_permission_table_header_item">Created Date</div>
                    <div className="Admin_permission_table_header_item">Permission</div>
                    <div className="Admin_permission_table_header_item">Action</div>

                </div>
                <div className="Admin_permission_table_body">
                    <div className="Admin_permission_table_body_item">1</div>
                       <div className="Admin_permission_table_body_item">
                        <div className="user_icon_with_Name">
                        <div className="user_icon"></div>
                        <span className="user_name">Ankit</span>
                        </div>
                    </div>
                    <div className="Admin_permission_table_body_item">ankitkumar700413.com</div>
                    <div className="Admin_permission_table_body_item">High</div>
                    <div className="Admin_permission_table_body_item">open</div>
                    <div className="Admin_permission_table_body_item">276532532</div>
                    <div className="Admin_permission_table_body_item">no</div>
                    <div className="Admin_permission_table_body_item">...</div>

                    
                </div>
                <div className="Admin_permission_table_body">
                    <div className="Admin_permission_table_body_item">2</div>
                    <div className="Admin_permission_table_body_item">
                        <div className="user_icon_with_Name">
                        <div className="user_icon"></div>
                        <span className="user_name">Ankit</span>
                        </div>
                    </div>
                    <div className="Admin_permission_table_body_item">ankitkumar700413.com</div>
                    <div className="Admin_permission_table_body_item">High</div>
                    <div className="Admin_permission_table_body_item">open</div>
                    <div className="Admin_permission_table_body_item">276532532</div>
                    <div className="Admin_permission_table_body_item">no</div>
                    <div className="Admin_permission_table_body_item">...</div>

                    
                </div>
                <div className="Admin_permission_table_body">
                    <div className="Admin_permission_table_body_item">3</div>
                       <div className="Admin_permission_table_body_item">
                        <div className="user_icon_with_Name">
                        <div className="user_icon"></div>
                        <span className="user_name">Ankit</span>
                        </div>
                    </div>
                    <div className="Admin_permission_table_body_item">ankitkumar700413.com</div>
                    <div className="Admin_permission_table_body_item">High</div>
                    <div className="Admin_permission_table_body_item">open</div>
                    <div className="Admin_permission_table_body_item">276532532</div>
                    <div className="Admin_permission_table_body_item">no</div>
                    <div className="Admin_permission_table_body_item">...</div>
                </div>
                </div>
            </div>
            
            
        </div>
    );
}