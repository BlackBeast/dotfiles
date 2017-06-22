module.exports={
  "config": {
    "fontSize": 14,
    "fontFamily": "Menlo, \"DejaVu Sans Mono\", \"Lucida Console\", monospace",
    "cursorColor": "black",
    "cursorShape": "BEAM",
    "foregroundColor": "white",
    "backgroundColor": "#444444",
    "borderColor": "#002eff",
    "css": "\n\t.splitpane_divider{\n\tbackground-color:magenta !important;\n}\n\t.term_fit:not(.term_term) {opacity: 0.38;\n}\n\t.term_fit.term_active {\n\topacity: 2;\ntransition: opacity 0.12s ease-in-out;\nwill-change: opacity;\n}",
    "termCSS": "",
    "padding": "12px 14px",
    "colors": {
      "black": "#000000",
      "red": "#ff0000",
      "green": "#33ff00",
      "yellow": "#ffff00",
      "blue": "#0066ff",
      "magenta": "#cc00ff",
      "cyan": "#00ffff",
      "white": "#d0d0d0",
      "lightBlack": "#808080",
      "lightRed": "#ff0000",
      "lightGreen": "#33ff00",
      "lightYellow": "#ffff00",
      "lightBlue": "#0066ff",
      "lightMagenta": "#cc00ff",
      "lightCyan": "#00ffff",
      "lightWhite": "#ffffff"
    },
    "shell": "",
    "shellArgs": [
      "--login"
    ],
    "env": {},
    "bell": "SOUND",
    "copyOnSelect": false
  },
  "plugins": [
    "hyperpower",
    "hyperterm-atom-dark",
    "hyperline",
    "hyperborder",
    "hypercwd",
    "hyper-blink",
    "hyperterm-cursor"
  ],
  "localPlugins": []
}
