import React from "react";
import { Link } from "react-router-dom";
import "./job_tile.css";

import { Project_detail } from "../Model/Model";

const Job_tile = ({ job }) => {
  console.log(job);
  return (
    <div className="job_list_container">
      { job.length>0&& Project_detail.map((job,index) => {
        return (
          <Link to="/Job-detail/2" className="link">
            <div className="job_tiles" key={index}>
              <div className="job_dropdown">
                <i className="dropdown_icon"></i>
                <div className="Add_to_bookmark_icon book_mark_icon_filled"></div>
                <div className="three_dot"></div>
              </div>
              <div className="job_icon_image"></div>

              <div className="job_data">
                <div className="job_title">
                  {" "}
                  <h3>{job[Project_detail[4].name]}</h3>
                </div>
                <div className="job_description scroll">
                  {" "}
                  <p>{job[Project_detail[6].name]}</p>
                </div>
              </div>

              <div className="Job_task">
                <i className="view_task"></i>{" "}
                <span className="view_task_span">Task: hgwewu</span>
              </div>
              <div className="Job_group_date_icon">
                <div className="Job_Date">
                  <i className="view_Date"></i>{" "}
                  <span className="view_Date_span">Date: {job[Project_detail[7].name]}</span>
                </div>
                <div className="Job_group_icon"></div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Job_tile;
