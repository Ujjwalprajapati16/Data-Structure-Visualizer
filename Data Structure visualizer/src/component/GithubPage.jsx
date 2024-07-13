import React from 'react'
import PropTypes from 'prop-types'
import 'tailwindcss/tailwind.css'

const GithubPage = ({ github = '' }) => (
  <div className='w-18 h-full float-left bg-black'>
    <a href={github} className='w-1/2 h-full text-center float-left text-white mt-1.5 align-middle no-underline'>Github</a>
    <a href='https://github.com/UjjwalPrajapati16/DataStructure' className='w-1/2 h-full text-center float-left text-white mt-1.5 align-middle no-underline'>Library</a>
  </div>
)

GithubPage.propTypes = {
  github: PropTypes.string
}

export default GithubPage
