import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Получение __dirname в ES модуле
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader', 
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] 
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] 
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    port: 8080
  }
};