import Social from '@/app/auth/_components/social'
import StateAuth from '@/app/auth/_components/state'
import { FaTelegram } from 'react-icons/fa'

const Auth = () => {
	return (
		<div className={'container max-w-md w-full h-screen flex justify-center items-center flex-col space-y-4'}>
			<FaTelegram size={120} className={'text-blue-400'}/>
			<div>
				<h1 className={'text-4xl font-bold'}>Telegram</h1>
			</div>
		
			<StateAuth/>
			<Social/>
		</div>
	)
}
export default Auth
