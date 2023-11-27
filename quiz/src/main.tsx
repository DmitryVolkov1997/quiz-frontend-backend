import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './assets/styles/index.scss'
import { store } from './store/store.ts'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<ChakraProvider>
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					<QueryClientProvider client={queryClient}>
						<App />
						<ReactQueryDevtools initialIsOpen={false} />
					</QueryClientProvider>
				</ChakraProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)
