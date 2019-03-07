'use strict'

const TEMPLATES = {
  mainTemplate: function (title, body) {
    const t = {
      header: [
        { type: 'a',
          attributes: [
            { type: 'href', value: '#home' },
            { type: 'class', value: 'logo' }
          ],
          children: [
            { type: 'h1', text: 'gyul' }
          ]
        },
        { type: 'h2', text: title },
        { type: 'div',
          attributes: [{ type: 'class', value: 'flex-center' }],
          children: [
            { type: 'h5',
              text: 'info',
              attributes: [
                { type: 'class', value: 'tabs' },
                { type: 'id', value: 'info' },
                { type: 'onclick', value: 'showInfo()' }
              ]
            },
            { type: 'h5',
              text: 'stats',
              attributes: [
                { type: 'class', value: 'tabs' },
                { type: 'id', value: 'stats' },
                { type: 'onclick', value: 'showStats()' }
              ]
            },
            { type: 'h5',
              text: 'logs',
              attributes: [
                { type: 'class', value: 'tabs' },
                { type: 'id', value: 'logs' },
                { type: 'onclick', value: 'showLogs()' }
              ]
            },
            { type: 'h5',
              text: 'tags',
              attributes: [
                { type: 'class', value: 'tabs' },
                { type: 'id', value: 'tags' },
                { type: 'onclick', value: 'showTags()' }
              ]
            }
          ]
        }
      ],
      main: body,
      footer: [
        { type: 'div',
          attributes: [{ type: 'class', value: 'contact' }],
          children: [
            { type: 'a',
              attributes: [
                { type: 'href', value: 'https://github.com/ckipp01/gyul' },
                { type: 'target', value: '_blank' }
              ],
              children: [
                { type: 'img',
                  attributes: [{ type: 'src', value: 'media/github.png' }]
                }
              ]
            }
          ]
        }
      ]
    }
    return t
  },
  homeTemplate: function (title, body) {
    const t = {
      header: [
        { type: 'a',
          attributes: [
            { type: 'href', value: '#home' },
            { type: 'class', value: 'logo' }
          ],
          children: [
            { type: 'h1', text: 'gyul' }
          ]
        },
        { type: 'h2', text: title },
        { type: 'div',
          attributes: [{ type: 'class', value: 'flex-center' }],
          children: [
            { type: 'h5',
              text: 'welcome to gyul'
            }
          ]
        }
      ],
      main: body,
      footer: [
        { type: 'div',
          attributes: [{ type: 'class', value: 'contact' }],
          children: [
            { type: 'a',
              attributes: [
                { type: 'href', value: 'https://github.com/ckipp01/gyul' },
                { type: 'target', value: '_blank' }
              ],
              children: [
                { type: 'img',
                  attributes: [{ type: 'src', value: 'media/github.png' }]
                }
              ]
            }
          ]
        }
      ]
    }
    return t
  }
}