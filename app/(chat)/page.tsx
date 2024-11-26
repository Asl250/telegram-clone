'use client'

import AddContact from '@/app/(chat)/_components/add-contact'
import Chat from '@/app/(chat)/_components/chat'
import TopChat from '@/app/(chat)/_components/top-chat'
import { emailSchema, massageSchema } from '@/app/auth/lib/validation'
import { useCurrentContact } from '@/hooks/use-current'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import ContactList from './_components/contact-list'

const HomePage = () => {
  const {currentContact} = useCurrentContact()
  const router = useRouter()
  
  const contactForm = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: '' },
  })
  
  const massageForm = useForm<z.infer<typeof massageSchema>>({
    resolver: zodResolver(massageSchema),
    defaultValues: { text: '', image: '' },
  })
  
  useEffect(() => {
    router.replace('/')
  }, [])
  
  
  const onCreateContact = (values : z.infer<typeof emailSchema>) => {
    console.log(values)
  }
  
  const onSendMassage = (values : z.infer<typeof massageSchema>) => {
    console.log(values)
  }
  
  return (
    <>
      <div className='w-80 h-screen border-r fixed inset-0 z-50'>
        {/* Loading */}
        {/* <div className='w-full h-[95vh] flex justify-center items-center'>
					<Loader2 size={50} className='animate-spin' />
				</div> */}
        
        <ContactList contacts={contacts} />
      </div>
      
      <div className={'pl-80 w-full'}>
        {!currentContact?._id && <AddContact contactForm={contactForm} onCreateContact={onCreateContact}/>}
        
        {currentContact?._id && <div className={'w-full relative'}>
          <TopChat/>
          <Chat massageForm={massageForm} onSendMassage={onSendMassage}/>
        </div>}
      </div>
    </>
  )
}

const contacts = [
  {
    email: 'john@gmail.com',
    _id: '1',
    avatar: 'https://github.com/shadcn.png',
    firstName: 'John',
    lastName: 'Doe',
    bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis repellat blanditiis hic reiciendis quibusdam voluptatem necessitatibus, minus sint maxime iste impedit cupiditate ab provident doloremque sed dicta, molestias nemo cum.',
  },
  { email: 'amile@gmail.com', _id: '2' },
  { email: 'faris@gmail.com', _id: '3' },
  { email: 'abdo@gmail.com', _id: '4' },
  { email: 'billi@gmail.com', _id: '5' },
]

export default HomePage
