'use client'

import type { IUser } from '@/types'
import { useState } from 'react'

const useCurrentContact = () => {
	const [currentContact, setCurrentContact] = useState<IUser | null>()
	
	return {currentContact, setCurrentContact}
}
export default useCurrentContact
