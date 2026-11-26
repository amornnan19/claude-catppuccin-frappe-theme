import { expect, test } from 'claude-code/testing'

const glass = { blur: 28, tint: '#303446', opacity: 0.55 }

test('desktop backdrop draws the Frappé blob scene', async $ => {
  const ui = await $.ui.mount({
    plugin: 'catppuccin-frappe',
    surface: 'desktop',
    component: 'Backdrop',
    props: { scene: 'frappe-blobs', plugin: 'catppuccin-frappe', glass },
  })
  const svg = await ui.find({ type: 'Svg' })

  expect(svg).toBeDefined()
  expect(String(svg?.props.source)).toContain('#ca9ee6')
  await ui.unmount()
})

test('another scene is left alone', async $ => {
  const ui = await $.ui.mount({
    plugin: 'catppuccin-frappe',
    surface: 'desktop',
    component: 'Backdrop',
    props: { scene: 'someone-else', plugin: 'other', glass },
  })

  expect(await ui.find({ type: 'Svg' })).toBeUndefined()
  await ui.unmount()
})
