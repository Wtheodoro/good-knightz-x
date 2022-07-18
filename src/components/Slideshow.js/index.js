import React, { useEffect, useRef, useState } from 'react'
import { images } from './slides'
import { Container } from './styles'

const Slideshow = () => {
  return (
    <Container>
      <div className='items' id='items'>
        <div className='each-item'>
          <div className='TextContainer'>
            <div>
              <h1>Layer-2 Security</h1>
              <p>
                First layer-2 discord security bot that protects servers from
                compromised accounts and bots. While all other discord bots
                attempt to stop scams before they happen, Good Knight is the
                only bot that cripples a hacker after they've gained access to
                your server!
              </p>
            </div>
          </div>
          <img src='gif/scam_example_note.gif' />
        </div>

        <div className='each-item'>
          <img src='gif/password_phone1.gif' />
          <div className='TextContainer'>
            <div>
              <h1>Password Protection</h1>
              <p>
                Innovative password protection methodology secures your server
                so that hackers cannot complete dangerous actions, even after
                compromising an admin or moderator.
              </p>
            </div>
          </div>
        </div>

        <div className='each-item'>
          <div className='TextContainer'>
            <div>
              <h1>Anti-link Technology</h1>
              <p>
                Eliminates malicious links to prevent the spread of spam and
                protect your users from dangerous websites.
              </p>
            </div>
          </div>
          <img src='gif/scam_example_note.gif' />
        </div>

        <div className='each-item'>
          <img src='gif/password_phone1.gif' />
          <div className='TextContainer'>
            <div>
              <h1>Anti-webhook and more...</h1>
              <p>
                Guards your server against webhook attacks, shields mass
                mentions, restricts moderation commands, password protects
                server lockdown, and more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Slideshow
