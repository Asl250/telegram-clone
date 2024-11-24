'use client'

import SignIn from '@/app/auth/_components/sign-in'
import Verify from '@/app/auth/_components/verify'
import { useAuth } from '@/hooks/use-auth'

const StateAuth = () => {
	const {step} = useAuth()
	
	return (
		<>
			{step === 'login' && <SignIn/>}
			{step === 'verify' && <Verify/>}
		</>
	)
}
export default StateAuth
