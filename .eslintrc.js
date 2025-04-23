export const parser = '@typescript-eslint/parser';
export const plugins = ['react', '@typescript-eslint'];

export const rules = {
  'react/react-in-jsx-scope': 'off', // если используешь React 17+
  'react/jsx-uses-react': 'off',
  'react/jsx-uses-vars': 'error', // важно: отслеживает неиспользуемые или неопределенные компоненты
};

export const settings = {
  react: {
    version: 'detect',
  },
};
