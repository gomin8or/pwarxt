import Page from '@/components/page'
import Section from '@/components/section'

const Index = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
				RXT로 대박이 나고 싶나요?
			</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					그렇다면 웹브라우저 하단의{' '}
					<span className='font-medium text-zinc-900 dark:text-zinc-50'>
						공유
					</span>{' '}
					버튼을 누른 후 
					<span className='font-medium text-zinc-900 dark:text-zinc-50'>
						홈화면에 추가
					</span>{' '}
					를 선택하여 스마트폰의 바탕화면에 앱을 설치해 보세요.					
				</p>

				<br />

				{/* <p className='text-sm text-zinc-600 dark:text-zinc-400'>
					<a
						href='https://github.com/mvllow/next-pwa-template'
						className='underline'
					>
						Source
					</a>
				</p> */}
			</div>
		</Section>
	</Page>
)

export default Index
