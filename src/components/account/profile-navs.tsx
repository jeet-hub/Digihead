import React from "react";

const nav_data = [
  {title:'Profile',icon:'fa-regular fa-user-pen'},
  {title:'Information',icon:'fa-regular fa-circle-info'},
  {title:'Address',icon:'fa-regular fa-location-dot'},
  {title:'My Orders',icon:'fa-regular fa-clipboard-list-check'},
  {title:'Notification',icon:'fa-regular fa-bell'},
  {title:'Change Password',icon:'fa-regular fa-lock'},
]
export default function ProfileNavs() {
  return (
    <div
      className="nav nav-tabs tp-tab-menu flex-column"
      id="profile-tab"
      role="tablist"
    >
      {nav_data.map((item, i) => (
      <button
      key={i}
        className={`nav-link ${i === 0 ? 'active' : ''}`}
        id={`nav-${i+1}-tab`}
        data-bs-toggle="tab"
        data-bs-target={`#nav-${i+1}`}
        type="button"
        role="tab"
        aria-controls={`nav-${i+1}`}
        aria-selected={i === 0 ? 'true' : 'false'}
        tabIndex={-1}
      >
        <span>
          <i className={item.icon}></i>
        </span>
        {item.title}
      </button>
      ))}
    </div>
  );
}
