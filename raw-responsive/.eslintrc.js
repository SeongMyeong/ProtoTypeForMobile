module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    browser: true,
  },
  rules: {
    'linebreak-style': 0, //
    //JSX 코드는 .js. jsx 확장자, 사용
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/prefer-stateless-function': 0, // state, 메소드 없으면 class 형 컴포넌트 만들지 말고 stateless 컴포넌트로 만들 것 x
    'react/jsx-one-expression-per-line': 0, //JSX 안에서 한 줄에 하나만 표현할 것 x
    'react/prop-types': 0, //prop type 지정 x
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
  },
};
