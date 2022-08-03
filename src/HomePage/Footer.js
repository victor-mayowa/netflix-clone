import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center items-center pt-14 pb-8'>
        <div className='text-stone-500 w-[70%] sm:w-[90%] md:w-[750px]'>
            <p className='mb-6'>Questions? Contact us</p>
            <div className='flex justify-between  mb-4 text-sm'>
                <ul>
                    <li className='mb-3'><a href='/'>FAQ</a></li>
                    <li className='mb-3'><a href='/'>Investor Relations</a></li>
                    <li className='mb-3'><a href='/'>Privacy</a></li>
                    <li className='mb-3'><a href='/'>Speed Test</a></li>
                </ul>
                
                <ul>
                    <li className='mb-3'><a href='/'>Help Center</a></li>
                    <li className='mb-3'><a href='/'>Jobs</a></li>
                    <li className='mb-3'><a href='/'>Cookie Preferences</a></li>
                    <li className='mb-3'><a href='/'>Legal Notices</a></li>
                </ul>

                <ul>
                    <li className='mb-3'><a href='/'>Account</a></li>
                    <li className='mb-3'><a href='/'>Ways to Watch</a></li>
                    <li className='mb-3'><a href='/'>Corporate Information</a></li>
                    <li className='mb-3'><a href='/'>Only on Netflix</a></li>
                </ul>

                <ul>
                    <li className='mb-3'><a href='/'>Media Center</a></li>
                    <li className='mb-3'><a href='/'>Terms of Use</a></li>
                    <li className='mb-3'><a href='/'>Contact Us</a></li>
                </ul>
            </div>
            <p className='text-sm'>Netflix Nigeria</p>
        </div>
    </div>
  )
}

export default Footer