module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: [
    'stylelint-use-logical',
    'stylelint-order', // Plugin für die Sortierung von CSS-Eigenschaften
  ],
  rules: {
    // 🔢 Sortierung von CSS-Eigenschaften
    'order/properties-alphabetical-order': true, // Alphabetische Sortierung von Properties

    // 🚫 Keine doppelten Properties in einem Deklarationsblock
    'declaration-block-no-duplicate-properties': true,

    // 📏 Leerzeile vor Custom Properties
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'after-comment', 'after-custom-property'],
        ignore: ['inside-single-line-block'],
      },
    ],

    // 🔠 Namenskonventionen (z. B. --color-primary-base, --space-sm)
    'custom-property-pattern': null,

    // ⚙️ LightningCSS-spezifisch
    'media-query-no-invalid': null,

    // ✅ Eigene Properties und Funktionen erlauben
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['scroll-timeline-view-offset', 'composes', 'tabindex'],
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['-var'],
      },
    ],

    // 🚫 Spacing nur via var() erlauben
    'declaration-property-value-disallowed-list': {
      '/^(margin|padding|gap)$/': ['/var\\(--spacing-'],
    },

    // 📐 Logische Properties bevorzugen (deaktiviert)
    'csstools/use-logical': null,

    // 📝 Zusätzliche Anpassungen für die Animations-Datei
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'declaration-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'after-comment', 'after-declaration'],
        ignore: ['inside-single-line-block'],
      },
    ],
    'color-function-notation': 'modern',
    'value-keyword-case': [
      'lower',
      {
        ignoreProperties: ['/^--/'],
        ignoreKeywords: ['currentColor'],
      },
    ],

    // ❌ Deaktivierte Regeln (Design-System-Ausnahmen)
    'no-empty-source': null,
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'declaration-block-no-duplicate-custom-properties': null,
    'declaration-block-single-line-max-declarations': null,
    'custom-property-no-missing-var-function': null,

    // 🎭 Layer-Namenskonvention deaktivieren
    'layer-name-pattern': null,

    // 🔄 At-rule no-unknown anpassen
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['define-mixin', 'mixin'],
      },
    ],

    // 📑 Ungültige Import-Positionen ignorieren
    'no-invalid-position-at-import-rule': null,

    // 📦 Container-Type-Werte erlauben & Design-System Werte ignorieren
    'declaration-property-value-no-unknown': null,

    // 🎨 Farbnotationen - für Design-System deaktiviert
    'lightness-notation': null,
    'alpha-value-notation': null,

    // 📱 Media Query Notation - deaktiviert für Kompatibilität
    'media-feature-range-notation': null,

    // Leere Blöcke erlauben
    'block-no-empty': null,
  },
};
