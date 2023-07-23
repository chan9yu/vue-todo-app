import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import { UserConfig, defineConfig } from 'vite';
import path from 'path';

const pathSrc = path.resolve(__dirname, './src');

const config = <UserConfig>defineConfig({
	plugins: [vue()],
	base: '/vue-todo-app/',
	server: {
		host: 'localhost',
		port: 3050
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "${pathSrc}/styles/global.scss" as *;`
			}
		},
		postcss: {
			plugins: [autoprefixer()]
		}
	}
});

export default config;
