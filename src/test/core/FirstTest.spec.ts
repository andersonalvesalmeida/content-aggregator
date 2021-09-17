import { Content } from "@/core/Content"

test('Create a content', () => {
  const content = new Content('My title')
  expect('My title').toBe(content.title)
})
