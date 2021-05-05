let ref = {
  blue: '#4fb4d8',
  green: '#78bd65',
  orange: '#ef7c2a',
  red: '#eb3d54',
  yellow: '#e5cd52',
}
export default {
  hibernus: {
    comment: '#858585',
    text: '#222',
    keyword: '#80a',
    variable: '#222',
    annotation: '#80a',
    constant: '#222',
    tag: '#80a',
    string: '#007fbf',
    stringInTemplate: '#D000D0',
    number: '#750',
    function: '#00e',
    support: '#080',
    misc: '#080',
    invalid: '#a00'
  },
  noctis: {
    comment: '#5b858b',
    text: '#b2cacd',
    keyword: '#df769b',
    variable: '#b2cacd',
    annotation: ref.orange,
    constant: ref.orange,
    tag: ref.orange,
    string: ref.green,
    stringInterpolated: ref.green,
    number: ref.blue,
    function: ref.yellow,
    support: ref.blue,
    misc: ref.blue,
    invalid: '#e3541c'
  }
};
