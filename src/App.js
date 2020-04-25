import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorBoundary from 'react-error-boundary';
import { ThemeProvider } from '@nadir/components';
import './assets/scss/App.scss';
import ErrorFallback from './ErrorFallback';
import { Create, Checklist, Home } from './pages';

function App() {
	return (
		<ThemeProvider>
			<div className="App">
				<ErrorBoundary FallbackComponent={ ErrorFallback }>
					<Router>
						{ /*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */ }
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/create/:url(.*)?">
								<Create />
							</Route>
							<Route path="/checklist/:id">
								<Checklist />
							</Route>
						</Switch>
					</Router>
				</ErrorBoundary>
			</div>
		</ThemeProvider>
	);
}

export default App;
