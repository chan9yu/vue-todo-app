import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import { UserConfig, defineConfig } from 'vite';

const config = <UserConfig>defineConfig({
	plugins: [vue()],
	server: {
		host: 'localhost',
		port: 3050
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/styles/index.scss";`
			}
		},
		postcss: {
			plugins: [autoprefixer()]
		}
	}
});

export default config;
