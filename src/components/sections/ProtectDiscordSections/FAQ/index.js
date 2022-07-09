import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { Title } from '../../../Title/styles'
import Stardust5SVG from '../../../SVGs/ProtectDiscordSections/Stardust5SVG'
import Waves2SVG from '../../../SVGs/ProtectDiscordSections/Waves2SVG'
import Rock2SVG from '../../../SVGs/ProtectDiscordSections/Rock2SVG'
import FaqCard from '../../../cards/FaqCard'
import useWindowSize from '../../../../Hooks/useWindowSize'
import KnightOwlSVG from '../../../SVGs/Scenery/KnightOwlSVG'
import Rock1SVG from '../../../SVGs/ProtectDiscordSections/Rock1SVG'
import PetRockSVG from '../../../SVGs/Scenery/PetRockSVG'
import Rock3SVG from '../../../SVGs/ProtectDiscordSections/Rock3SVG'
import Waves3SVG from '../../../SVGs/ProtectDiscordSections/Waves3SVG'

const SectionFAQ = () => {
  const [scale, setScale] = useState(1)

  const size = useWindowSize()

  useEffect(() => {
    // 1920px is the default width of the figma design
    // Need to recalculate the scale to fit the screen
    setScale(size.width / 1920)
  }, [size])

  return (
    <Container>
      <h1>FAQ</h1>
      <div className='faqCardsWrapper'>
        <FaqCard
          question='What features does Good Knight provide?'
          answer={
            <ul className='faq-list'>
              <li>In-server password protection</li>
              <li>Anti-link and link whitelisting</li>
              <li>Anti-webhook</li>
              <li>Password protected server lockdown</li>
              <li>Shielded mass mentions</li>
              <li>Protection against compromised bots</li>
              <li>Locked mod commands</li>
            </ul>
          }
          secondarycolor
        />

        <FaqCard
          question='How much does Good Knight cost?'
          answer='It’s FREE! And the Good Knight team has pledged to always provide the necessary security features for free.'
          secondarycolor
        />

        <FaqCard
          question='I have <insert your favorite bot> (AutoMod, Dyno, MEE6, Wick, Beemo, etc.), why do I need Good Knight? '
          answer='All of the existing Discord bots attempt to prevent hacks, scams, raids, etc. before they happen but are useless against a hacker that has already compromised an account. Good Knight’s primary use, as layer-2 security, is to defend your server in this worst-case scenario!'
          secondarycolor
        />

        <FaqCard
          question='My admins/mods are careful and would never get hacked!'
          answer='No matter how careful you are, hackers are skilled at phishing and socially engineering admins/mods into their scams. All it takes is one mistake to destroy your server and potentially lead to thousands of dollars in damages. Do you trust your admins/mods enough to take that risk?'
          secondarycolor
        />

        <FaqCard
          question='How does the Good Knight stop NFT scams?'
          answer="The bot’s innovative anti-link technology shields projects by automatically deleting any link that your server hasn't registered with the Good Knight! Even if an admin or mod account is compromised, attackers can't post their malicious links without the mod's Good Knight password."
          secondarycolor
        />
        <FaqCard
          question='Wait, Good Knight is going to store a password? Is it secure?'
          answer='Passwords are salted, encrypted, and one-way hashed to achieve the highest level of security. This means passwords are never decrypted at any time. For more information on password protection, visit the Good Knight documentation.'
          secondarycolor
        />
        <FaqCard
          question='What happens if the Good Knight database is compromised?'
          answer='All passwords are encrypted and, since they are one-way hashed, even if the remote database was leaked they would be uncrackable. For more information on password protection, visit the Good Knight documentation'
          secondarycolor
        />
      </div>

      <div className='StardustContainer'>
        <Stardust5SVG scale={scale} />
        <Waves2SVG scale={scale} />
        <Rock2SVG scale={scale} />
      </div>

      <div className='OwlContainer'>
        <img
          draggable='false'
          src='gif/Owl.gif'
          width={109 * scale}
          height={82 * scale}
        />
        <Rock1SVG scale={scale} width={109} height={149} />
      </div>

      <div className='RockContainer'>
        <img
          draggable='false'
          src='gif/Rock.gif'
          width={94 * scale}
          height={78 * scale}
        />
        <Rock3SVG scale={scale} width={201} height={102} />
      </div>

      <div className='WaveContainer'>
        <Waves3SVG scale={scale} />
      </div>
    </Container>
  )
}

export default SectionFAQ
