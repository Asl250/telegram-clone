import { massageSchema } from '@/app/auth/lib/validation'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import emojis from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Paperclip, Send, Smile } from 'lucide-react'
import { useTheme } from 'next-themes'
import { type FC, useRef } from 'react'
import type { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

interface Props {
	onSendMassage: (values: z.infer<typeof massageSchema>) => void
	massageForm: UseFormReturn<z.infer<typeof massageSchema>>
}

const Chat: FC<Props> = ({ onSendMassage, massageForm }) => {
	const { resolvedTheme } = useTheme()
	const inputRef = useRef<HTMLInputElement | null>(null)
	
	const handleEmojiSelect = (emoji: string) => {
		const input = inputRef.current
		if (!input) return
		
		const text = massageForm.getValues('text')
		const start = input.selectionStart ?? 0
		const end = input.selectionEnd ?? 0
		
		const newText = text.slice(0, start) + emoji + text.slice(end)
		massageForm.setValue('text', newText)
		
		setTimeout(() => {
			input.setSelectionRange(start + emoji.length, start + emoji.length)
		}, 0)
	}
	
	
	return (
		<div className='flex flex-col justify-end z-40 min-h-[92vh]'>
			{/* <ChatLoading/> */}
			
			{/* <MassageCard isReceived/> */}
			
			{/* Start conversation */}
			 <div className='w-full h-[88vh] flex items-center justify-center'>
				<div className='text-[100px] cursor-pointer' onClick={() => onSendMassage({ text: '✋' })}>
					✋
				</div>
			</div>
			
			
			<Form {...massageForm}>
				<form onSubmit={massageForm.handleSubmit(onSendMassage)} className='w-full flex relative'>
					<Button size={'icon'} type='button' variant={'secondary'}>
						<Paperclip />
					</Button>
					<FormField
						control={massageForm.control}
						name='text'
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormControl>
									<Input
										className='bg-secondary border-l border-l-muted-foreground border-r border-r-muted-foreground h-9'
										placeholder='Type a meassage'
										value={field.value}
										onBlur={() => field.onBlur()}
										onChange={e => field.onChange(e.target.value)}
										ref={inputRef}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<Popover>
						<PopoverTrigger asChild>
							<Button size='icon' type='button' variant='secondary'>
								<Smile />
							</Button>
						</PopoverTrigger>
						<PopoverContent className='p-0 border-none rounded-md absolute right-6 bottom-0'>
							<Picker
								data={emojis}
								theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
								onEmojiSelect={(emoji: { native: string }) => handleEmojiSelect(emoji.native)}
							/>
						</PopoverContent>
					</Popover>
					
					<Button type='submit' size={'icon'}>
						<Send />
					</Button>
				</form>
			</Form>
		</div>
	)
}
export default Chat
