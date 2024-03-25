<script lang="ts">
	import { author } from "../../consts"
	import type { Article } from "../../data/get-article"
	import Time from "svelte-time"
	import { readingTime } from "../../utils/calc"

	export let articles: Article[]

	let index = 1

	function next(): void {
		index = (index + 1) % articles.length
	}

	function prev(): void {
		index = (index - 1 + articles.length) % articles.length
	}
</script>

<section class="max-w-7xl mx-auto p-2">
	<div class="mb-6 md:mb-8">
		<h1 class="text-3xl font-bold">Editor's pick</h1>
		<p class="text-gray-500">Discover our latest cocking</p>
	</div>

	<div class="flex flex-col-reverse md:flex-row items-end md:items-center justify-end">
		<div class="md:-mr-32 z-10 md:mt-auto -mt-16">
			<div class="bg-background/50 backdrop-blur shadow-xl rounded-xl p-6 w-[30rem]">
				<div class="h-[72px]">
					<a href={`/article/${articles[index].slug}`} class="text-lg md:text-xl font-bold line-clamp-2"
						>{articles[index].title}</a
					>
				</div>

				<div class="flex items-center mt-4">
					<img src={author.image} alt={author.name + "article author"} class="w-12 h-12 rounded-full mr-3" />
					<span>
						<h2 class="text-sm font-semibold">{author.name}</h2>
						<span class="text-xs text-gray-500">
							<Time timestamp={articles[index].$createdAt} />

							• {readingTime(articles[index].content)} minutes</span
						>
					</span>
				</div>
			</div>

			<div class="flex items-center md:mt-10 p-4 space-x-4">
				<button
					on:click={next}
					class="flex hover:bg-primary hover:text-white border-gray-500/50 items-center justify-center h-12 text-xl w-12 bg-background border shadow rounded-full"
					>&larr;</button
				>
				<button
					on:click={prev}
					class="flex hover:bg-primary hover:text-white border-gray-500/50 items-center justify-center h-12 text-xl w-12 bg-background border shadow rounded-full"
					>&rarr;</button
				>
			</div>
		</div>

		<div class="rounded-xl overflow-hidden relative w-full md:w-9/12 aspect-video md:-mt-10">
			{#each articles as article, i}
				<img
					src={article.image + "?w=600"}
					alt={article.title}
					class={`absolute rounded-xl block h-full w-full object-cover transition-all duration-500 ${i === index ? `inset-0 opacity-100` : `invisible opacity-0 translate-x-8`}`}
				/>
			{/each}
		</div>
	</div>
</section>
