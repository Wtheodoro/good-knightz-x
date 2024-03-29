import React from 'react'
import { Link } from 'react-router-dom'
import InfoCard from '../../../cards/InfoCard'
import DiscordSVG from '../../../SVGs/ProtectDiscordSections/DiscordSVG'
import WavesSVG from '../../../SVGs/WavesSVG'
import { Container } from './styles'
import { IoLogoTwitter } from 'react-icons/io'

const FooterNew = () => {
  return (
    <Container>
      <WavesSVG />
      <div className='footer'>
        <div className='buttonContainer'>
          <a
            href='mailto:info@rarefiedstudios.com'
            className='link contact-link'
          >
            <div className='contact-us'>Contact Us</div>
          </a>

          <div
            className='discord-card-wrapper'
            style={{ margin: '20px 0 0 0' }}
          >
            <InfoCard
              link='https://discord.com/oauth2/authorize?client_id=957481307405975552&permissions=805792792&scope=applications.commands%20bot'
              spotlight
            >
              <div className='icon-wrapper'>
                <DiscordSVG fill={'#FFF'} />
              </div>
              Add to your server
            </InfoCard>
          </div>

          <a
            href='https://twitter.com/thegoodknightz'
            className='link twitter-link'
          >
            <div className='twitter-btn'>
              <IoLogoTwitter />
              <p>Twitter</p>
            </div>
          </a>
        </div>

        <div className='creditsTermsAndCondition'>
          <p>© Rarefied Studios, LLC</p>
          <div className='supportContainer'>
            <Link to='/privacy'>
              <p>Privacy Policy</p>
            </Link>
            <Link to='/terms'>
              <p>Terms of Service </p>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default FooterNew
