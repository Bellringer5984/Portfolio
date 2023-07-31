// 'use client'
// import { Menu, Transition } from '@headlessui/react'

// function NavDropDown() {
//   return (
//     <Menu>
//     <Menu.Button>More</Menu.Button>
//     <Transition
//         enter="transition duration-100 ease-out"
//         enterFrom="transform scale-95 opacity-0"
//         enterTo="transform scale-100 opacity-100"
//         leave="transition duration-75 ease-out"
//         leaveFrom="transform scale-100 opacity-100"
//         leaveTo="transform scale-95 opacity-0"
//       >
//     <Menu.Items className="flex flex-cols">
//       <Menu.Item>
//         {({ active }) => (
//           <a
//             className={`${active && 'bg-blue-500'}`}
//             href="/account-settings"
//           >
//             About
//           </a>
//         )}
//       </Menu.Item>
//       <Menu.Item>
//         {({ active }) => (
//           <a
//             className={`${active && 'bg-blue-500'}`}
//             href="/account-settings"
//           >
//             Projects
//           </a>
//         )}
//       </Menu.Item>
//       <Menu.Item >
//       {({ active }) => (
//           <a
//             className={`${active && 'bg-blue-500'}`}
//             href="/account-settings"
//           >
//             Contact Me
//           </a>
//         )}
//       </Menu.Item>
//     </Menu.Items>
//     </Transition>
//   </Menu>
//   )
// }

// export default NavDropDown

'use client'

import { Menu, Transition } from '@headlessui/react'

function NavDropDown() {

  const MenuItem = ({ href, label }) => (
    <Menu.Item>
      {({ active }) => (
        <a
          className={`${active ? 'bg-blue-500' : ''}`}
          href={href}
        >
          {label}
        </a>
      )}
    </Menu.Item>
  );

  return (
    <Menu>
      <div className='flex-col'>
        <Menu.Button>More</Menu.Button>
        <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
        >
            <Menu.Items className="flex flex-col">
            <MenuItem href="/about" label="About" />
            <MenuItem href="/projects" label="Projects" />
            <MenuItem href="/contact" label="Contact" />
            </Menu.Items>
        </Transition>
      </div>
    </Menu>
  )
}

export default NavDropDown;
