import Page from '@/components/page'
import Section from '@/components/section'

const Story = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold'>Story</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					 이 앱은 영국에서 시작되어 당신에게까지 다다랐습니다. 이 앱을 당신의 친구 2억명에게 소개하지 않는다면 리치퀴즈는 대박이 나 버릴 것입니다.
				</p>

				<br />

				{/* <p className='text-sm text-zinc-600 dark:text-zinc-400'>
					<a href='https://twosentencestories.com/vision' className='underline'>
						Vision
					</a>
					, a two sentence story
				</p> */}
			</div>
		</Section>
	</Page>
)

export default Story
