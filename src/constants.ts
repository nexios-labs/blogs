type MapKey<T extends Map<any, any>> = T extends Map<infer K, any> ? K : never

/**
 * Metadata for your site
 */
export const SITE: Record<string, string> = {
	/**
	 * Base URL of your site, used in sitemap generation
	 */
	url: 'https://blog.nexioslabs.com',
	/**
	 * Site-wide title
	 */
	title: 'Nexios Blog',
	/**
	 * Used on index page and as a fallback if no title is set
	 */
	titleDefault: 'Nexios - Modern Python Web Framework',
	/**
	 * Used in meta tags, RSS feed, and other places
	 */
	description: 'The official blog for Nexios - a modern, async-first Python web framework designed for high-performance applications. Learn about building APIs, web applications, and more.',
	/**
	 * Language used in the <html> tag
	 */
	lang: 'en-US',
	/**
	 * Name of the image inside `public` folder that should be used as a default og:image
	 */
	defaultOgImage: '/og-image.png',
	/**
	 * Default author name that gets added to meta tags
	 */
	defaultAuthor: 'Nexios Labs Team',
}

interface Header {
	internal: Array<{ title: string, url: string }>
	external: Array<{ title: string, url: string, props?: Record<string, unknown> }>
}

/**
 * Links used in the header
 */
export const HEADER: Header = {
	/**
	 * Internal links to other subpages shown in the header navigation
	 */
	internal: [
		{
			title: 'Blog',
			url: '/blog/',
		},
		{
			title: 'About',
			url: '/about/',
		},
	],
	/**
	 * Arbitrary list of links (e.g. social media) shown on the right side of the header
	 */
	external: [
		{
			title: 'GitHub',
			url: 'https://github.com/nexios-labs/nexios',
			props: {
				target: '_blank',
			},
		},
		{
			title: 'Documentation',
			url: 'https://nexioslabs.com',
			props: {
				target: '_blank',
			},
		},
		{
			title: 'Community',
			url: 'https://nexioslabs.com/community/',
			props: {
				target: '_blank',
			},
		},
	],
}

/**
 * A map of name - slug pairs
 */
export const FRONTMATTER_TAGS = new Map(
	[
		['General', 'general'] as const,
		['HTTP Client', 'http-client'] as const,
		['JavaScript', 'javascript'] as const,
		['TypeScript', 'typescript'] as const,
		['Python', 'python'] as const,
		['API', 'api'] as const,
		['REST API', 'rest-api'] as const,
		['GraphQL', 'graphql'] as const,
		['WebSocket', 'websocket'] as const,
		['Tutorial', 'tutorial'] as const,
		['Release', 'release'] as const,
		['Open Source', 'open-source'] as const,
		['Framework', 'framework'] as const,
		['Web Development', 'web-development'] as const,
		['Middleware', 'middleware'] as const,
		['Authentication', 'authentication'] as const,
		['Security', 'security'] as const,
		['Performance', 'performance'] as const,
		['Testing', 'testing'] as const,
		['Deployment', 'deployment'] as const,
		['Database', 'database'] as const,
		['Real-time', 'real-time'] as const,
	],
)

export type FrontmatterTag = MapKey<typeof FRONTMATTER_TAGS>

export const SKIP_NAV_ID = 'skip-to-content'

/**
 * Available "asides" that can be used in MDX files
 */
export const ASIDE_TYPES = ['note', 'tip', 'caution', 'danger'] as const
export type AsideType = (typeof ASIDE_TYPES)[number]
