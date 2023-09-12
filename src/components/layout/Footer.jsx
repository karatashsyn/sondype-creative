import React from 'react'
import TwitterIcon from '../UI/Icons/TwitterIcon'
import InstagramIcon from '../UI/Icons/InstagramIcon'
import LinkedinIcon from '../UI/Icons/LinkedinIcon'

export default function Footer() {
  return (
    <div className="w-full w-max-[100%] py-4 mt-32 z-50">
      <div className="flex flex-col gap">
        <div className="text-center w-full flex gap-5 justify-center items-center">
          <a
            href={'https://www.instagram.com/sondypecreative/'}
            target="_blank"
          >
            <InstagramIcon />
          </a>
          <TwitterIcon />
          <a
            href="https://www.linkedin.com/company/sondype-creative/"
            target="_blank"
          >
            <LinkedinIcon />
          </a>
        </div>
        <a href="#" className="text-center mt-4 mb-6">
          info@sondype.com
        </a>
        <span className="text-[#6C6C6C] text-center mb-2">
          © 2023 Sondype Creative All Rights Reserved
        </span>
      </div>
    </div>
  )
}
