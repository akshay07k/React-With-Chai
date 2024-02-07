import React from 'react'
import { Logo, Container, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <>
    <header className='shadow sticky z-50 top-0 w-full bg-[#30878d]'>
      <Container>
        <nav className='bg-[#30878d] border-gray-200 px-4 lg:px-6 py-2.5 w-full
        flex items-center justify-between'>
          <div className="flex flex-wrap justify-between items-center w-full
                mx-auto max-w-screen-xl"
          >
            <div>
              <Link to='/' className='flex items-center text-4xl p-3'>
                <Logo width='70px'/>
              </Link>
            </div>
            <div>
              <ul className='flex w-full lg:order-2'>
                {navItems.map((item) => 
                item.active ? (
                  <li key={item.name}
                  className='text-gray-100 font-medium
                  rounded-lg text-2xl px-4 lg:px-5 py-2 lg:py-2.5
                  mr-2 focus:outline-none'>
                    <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-6 py-2
                    duration-200 hover:bg-blue-900 rounded-full'
                    >{item.name}</button>
                  </li>
                ) : null
                )}
                {authStatus && (
                  <li 
                  className='text-white font-medium bg-blue-600
                  rounded-lg text-2xl my-2 '
                  >
                    <LogoutBtn />
                  </li>
                )}
              </ul>
            </div>
            
          </div>
        </nav>
      </Container>
    </header>
    </>
  )
}

export default Header