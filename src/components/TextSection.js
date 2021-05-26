import React from 'react'
import PropTypes from 'prop-types'

const TextSection = (props) => {
  return (
        <section className="textImage">
            <img src={props.image} className="textImages" />
            <h1>{props.rubrik}</h1>
            <p> The standard Lorem Ipsum passage, used since the 1500s
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
  )
}

TextSection.propTypes = {
  image: PropTypes.string,
  rubrik: PropTypes.string
}

export default TextSection
