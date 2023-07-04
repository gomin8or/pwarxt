import Page from '@/components/page'
import Section from '@/components/section'

const Recipes = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold'>Ingredients</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					돈과 배짱만 있으면 돼. 따로 재료가 뭐가 필요하나. 인생 한방인데 파산 밖에 더 하겠어?
				</p>
			</div>
		</Section>

		{/* <Section>
			<h3 className='font-medium'>Thanks to</h3>

			<ul className='list-disc space-y-2 px-6 py-2'>
				<li className='text-sm text-zinc-600 dark:text-zinc-400'>
					<a href='https://unsplash.com' className='underline'>
						Unsplash
					</a>{' '}
					for high quality images
				</li>

				<li className='text-sm text-zinc-600 dark:text-zinc-400'>
					<a href='https://teenyicons.com' className='underline'>
						Teenyicons
					</a>{' '}
					for lovely icons
				</li>
			</ul>
		</Section> */}
	</Page>
)

export default Recipes
