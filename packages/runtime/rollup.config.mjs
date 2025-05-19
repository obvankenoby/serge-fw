import cleanup from 'rollup-plugin-cleanup';
import filesize from 'rollup-plugin-filesize';

export default {
  input: 'src/index.js', // точка входа,
  plugins: [cleanup()], // удаление комментариев из сгенерированного пакета
  output: [{ file: 'dist/serge-fw.js', format: 'esm', plugins: [filesize()] }],
};
