import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'
import { SCENE } from './scene.js'

// Catppuccin Frappé, from ~/.config/starship.toml [palettes.catppuccin_frappe].
const P = {
  mauve: '#ca9ee6', red: '#e78284', maroon: '#ea999c', peach: '#ef9f76',
  yellow: '#e5c890', green: '#a6d189', text: '#c6d0f5', subtext1: '#b5bfe2',
  subtext0: '#a5adce', overlay1: '#838ba7', base: '#303446',
} as const

// Frappé is a dark palette, so this look is dark-only.
// Surfaces stay between base and surface0 so the design system's role ramps keep
// contrast; text is Frappé text lifted slightly, because #c6d0f5 itself falls
// under 3:1 on the editor's comment highlight and Desktop would drop the theme.
const { theme, problems } = makeColors({
  label: 'Catppuccin Frappé',
  only: 'dark',
  roles: { accent: P.mauve, danger: P.red, success: P.green, warning: P.yellow, pro: P.peach },
  codeTheme: { dark: 'catppuccin-frappe' },
  dark: {
    gray: {
      anchors: {
        'surface-0': P.base,
        'surface-1': '#34384c',
        'surface-2': '#373b50',
        'surface-3': '#393d52',
        'text-primary': '#d0d8f7',
        'text-secondary': P.subtext1,
        'text-muted': P.subtext0,
      },
    },
    git: {
      added: P.green, removed: P.red, modified: P.yellow, merged: P.mauve,
      closed: P.maroon, conflicting: P.peach, draft: P.overlay1,
    },
  },
})

// Soft colour blobs behind the app, with its panels frosted over them.
const LOOK: ThemeSetArgs = {
  colors: theme,
  backdrop: { scene: 'frappe-blobs', glass: { blur: 28, tint: '#303446', opacity: 0.55 } },
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })

  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    if ((e.surface !== 'desktop' && e.surface !== 'mobile') || e.props.scene !== 'frappe-blobs') {
      return next(e)
    }

    const { Svg } = $.ui.resolve(e)

    return <Svg source={SCENE} alt="Soft Catppuccin Frappé colour blobs drifting slowly" />
  })
}
