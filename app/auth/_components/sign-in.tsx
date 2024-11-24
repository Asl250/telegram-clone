import { emailSchema } from '@/app/auth/lib/validation'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/hooks/use-auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const SignIn = () => {
	const {setEmail, setStep} = useAuth()
	
	const form = useForm<z.infer<typeof emailSchema>>({
		resolver: zodResolver(emailSchema),
		defaultValues: {
			email: '',
		},
	})
	
	function onSubmit(values: z.infer<typeof emailSchema>) {
		setStep('verify')
		setEmail(values.email)
	}
	return (
		<div>
			<p className={'text-center text-muted-foreground text-sm'}>Vestibulum ultrices laoreet velit ac accumsan. Duis et
				leo vel diam maximus dictum ut a elit. Phasellus congue vestibulum elementum.</p>
			
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<Label>Email</Label>
								<FormControl>
									<Input placeholder="info@ask250.com" className={'h-10 bg-secondary'} {...field} />
								</FormControl>
								<FormMessage className={'text-xs text-red-500'}/>
							</FormItem>
						)}
					/>
					<Button type="submit" className={'w-full'} size={'lg'}>Submit</Button>
				</form>
			</Form>
		</div>
	)
}
export default SignIn
