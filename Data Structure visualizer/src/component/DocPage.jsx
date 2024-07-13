import React from 'react'
import PropTypes from 'prop-types'

const DocPage = ({ docLink = '' }) => (
  <div className='w-1/10 h-full float-left text-center bg-black'>
    <a href={docLink} className='text-white align-middle no-underline'>Doc Page</a>
  </div>
)

DocPage.propTypes = {
  docLink: PropTypes.string
}

export default DocPage
