'use client'

import { Button } from '@/components/ui/button'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const Social = () => {
	return (
		<div className={'grid grid-cols-2 w-full gap-1 '}>
			<Button variant={'outline'}>
				<span>Sign Up With Google</span>
				<FaGoogle/>
			</Button>
			
			<Button variant={'secondary'}>
				<span>Sign Up With Github</span>
				<FaGithub/>
			</Button>
		</div>
	)
}
export default Social
