import Link from 'next/link';
import React from 'react';
import { CiUser } from 'react-icons/ci';

const TopHeader = () => {
  return (
    <>
    <div className="bg-gray-100 border-b border-gray-200 text-xs">
            <div className="max-w-7xl mx-auto px-4 py-3">
              <div className="flex justify-between items-center">
                <div></div>
                <div className="flex gap-6 items-center">
                  <select id="Currency" name="Currency" className="focus:outline-none bg-transparent">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="BDT">BDT</option>
                  </select>
                  <select id="Language" name="Language" className="focus:outline-none bg-transparent">
                    <option value="E">English</option>
                    <option value="F">Français</option>
                    <option value="D">Deutsch</option>
                  </select>
                  <div className="hidden md:flex items-center gap-6 text-gray-700">
                    <div className="w-px h-4 bg-gray-300"></div>
                    <Link href="#" className="hover:text-blue-600">Blog</Link>
                    <Link href="#" className="hover:text-blue-600">Content</Link>
                    <Link href="#" className="hover:text-blue-600">My Account</Link>
                    <div className="flex items-center gap-1">
                      <CiUser className="text-lg" />
                      <Link href="#" className="hover:text-blue-600">Sign In</Link>/
                      <Link href="#" className="hover:text-blue-600">Register</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
    </>
  );
}

export default TopHeader;
