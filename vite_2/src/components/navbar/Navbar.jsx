import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Navigation, Home as HomeIcon, LogIn, UserPlus, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
    }`

  return (
    <header className="sticky top-4 z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="backdrop-blur-md bg-white/70 border border-slate-200/80 shadow-lg shadow-slate-900/5 rounded-2xl px-5 py-3 transition-all">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2.5 group">
            <div className="p-2.5 bg-linear-to-tr from-indigo-600 to-violet-500 rounded-xl text-white shadow-md shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-200">
              <Navigation className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-slate-900 via-indigo-950 to-slate-800 bg-clip-text text-transparent tracking-tight">
              Futureplix
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navLinkClass}>
              <HomeIcon className="w-4 h-4" />
              <span>Home</span>
            </NavLink>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <NavLink to="/login" className={navLinkClass}>
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                    : 'bg-linear-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5'
                }`
              }
            >
              <UserPlus className="w-4 h-4" />
              <span>Register</span>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-200/60 space-y-2 pb-1">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={navLinkClass}
            >
              <HomeIcon className="w-4 h-4" />
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/login"
              onClick={() => setIsOpen(false)}
              className={navLinkClass}
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </NavLink>
            <NavLink
              to="/register"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-linear-to-r from-indigo-600 to-violet-600 transition-all ${
                  isActive ? 'ring-2 ring-indigo-600 ring-offset-2' : ''
                }`
              }
            >
              <UserPlus className="w-4 h-4" />
              <span>Register</span>
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
