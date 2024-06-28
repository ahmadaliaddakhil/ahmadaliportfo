import { Divider } from "@nextui-org/react";
import HeaderHome from './Head'
import SkillLists from './SkillList'
import ContactCard from './ContactCard'
import ContainerAOS from './../../commons/components/elements/ContainerAOS';

export default function Index() {
  return(
    <ContainerAOS>
      <div className=''>
      <HeaderHome/>
      <Divider orientation='horizontal' className='my-6'/>
      <SkillLists/>
      <Divider orientation='horizontal' className='my-6'/>
      <ContactCard/>
      </div>
    </ContainerAOS>
    
  )
}