import SectionHeading from '@/app/commons/components/elements/SectionHeading'
import SectionSubHeading from '@/app/commons/components/elements/SectionSubHeading'
import React from 'react'

function Header() {
  return (
    <div className='space-y-6'>
      <div className='space-y-2'> 
      <SectionHeading title={'Contact'}/>
      <SectionSubHeading>
        <p>Feel free to get in touch and let&apos;s have a discussion about how we can work together.</p>
      </SectionSubHeading>
      </div>
    </div>
  )
}

export default Header