export function readingTime(markdownContent: string) {
	var wordsPerMinute = 200 // Adjust this value according to average reading speed
	var wordCount = markdownContent.split(/\s+/g).length
	var readingTime = Math.ceil(wordCount / wordsPerMinute)
	return readingTime
}
