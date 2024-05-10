import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function ProfilesPage() {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <>
      {profiles.map((profile) => (
        <NavLink
          key={profile}
          to={`/profiles/${profile}`}
          className={({ isActive }) => {
            return isActive ? "text-red-950" : "";
          }}
        >
          Profile {profile}
        </NavLink>
      ))}
      <Outlet />
    </>
  );
}

export default ProfilesPage;
