import React from 'react';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between gap-3 px-4 py-3 lg:grid lg:grid-cols-2">
      {/* Logo */}
      <div className="flex items-center justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          width="24px"
          viewBox="0 -960 960 960"
          fill="#000000"
        >
          <path d="M460-160v-271.69L267.85-239.31l-28.54-28.54L431.69-460H160v-40h271.69L239.31-692.15l28.54-27.77L460-527.54V-800h40v272.46l192.15-192.38 27.77 27.77L527.54-500H800v40H527.54l192.38 192.15-27.77 28.54L500-431.69V-160h-40Z" />
        </svg>
      </div>

      {/* Right section */}
      <div className="flex items-center justify-end gap-3 lg:col-span-1">
        {/* Credits */}
        <div className="credit flex cursor-pointer items-center gap-2 rounded-full bg-[var(--c-credit)] px-3 py-1 text-sm font-medium text-black transition hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            width="20px"
            viewBox="0 -960 960 960"
            fill="#000000"
          >
            <path d="m422-232 207-248H469l29-227-185 267h139l-30 208Zm-55.85 107.38 40-275.38h-170l299.23-431.54h18.47L514.62-520h200l-330 395.38h-18.47ZM471-470Z" />
          </svg>
          <span>0</span>
        </div>

        {/* Theme toggle */}
        <div className="cursor-pointer transition hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            width="24px"
            viewBox="0 -960 960 960"
            fill="#000000"
          >
            <path d="M450-751.54v-147.69h60v147.69h-60Zm242.92 100.77-41.15-41.15 103.15-106.54 42.54 43.15-104.54 104.54ZM751.54-450v-60h147.69v60H751.54ZM450-60.77v-147.31h60v147.31h-60ZM267.85-652.38 161.54-754.92l43.54-42.16 104.54 104.16-41.77 40.54Zm486.46 490.84L651.77-268.08l40.54-40.15 104.77 101.92-42.77 44.77ZM60.77-450v-60h147.69v60H60.77Zm143.92 288.46-41.77-43.54 103.16-103.15 21.69 20.46 22.08 21.08-105.16 105.15ZM480.09-260q-91.63 0-155.86-64.14Q260-388.28 260-479.91q0-91.63 64.14-155.86Q388.28-700 479.91-700q91.63 0 155.86 64.14Q700-571.72 700-480.09q0 91.63-64.14 155.86Q571.72-260 480.09-260Zm-.09-60q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z" />
          </svg>
        </div>

        {/* Profile */}
        <div className="profile flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[var(--c-profile)] text-sm font-medium text-white transition hover:brightness-110">
          B
        </div>
      </div>
    </header>
  );
};

export default Navbar;
