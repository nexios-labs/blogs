import { generateDynamicOgImage } from './og-image'

// Simple test to verify the function works
console.log('Testing dynamic OG image generation...')

const testCases = [
  {
    title: 'Introducing Nexios: The Utility-First Python Web Framework',
    subtitle: 'Discover Nexios, a modern Python web framework designed for developers who need powerful tooling, extensibility, and a rich ecosystem of utilities.',
  },
  {
    title: 'Building Production APIs with Nexios',
    subtitle: 'Learn how to build scalable, production-ready APIs using Nexios framework.',
  },
  {
    title: 'Nexios Blog',
    subtitle: 'Stay up to date with the latest Nexios framework updates, tutorials, best practices, and community stories.',
  }
]

testCases.forEach((testCase, index) => {
  const url = generateDynamicOgImage(testCase)
  console.log(`Test ${index + 1}:`)
  console.log(`Title: ${testCase.title}`)
  console.log(`Subtitle: ${testCase.subtitle}`)
  console.log(`Generated URL: ${url}`)
  console.log('---')
})

console.log('Test completed!')