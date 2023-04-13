import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                courses: {
                    merge(existing = [], incoming) {
                        return [...existing, ...incoming];
                    },
                },
            },
        },
    }
})

const client = new ApolloClient({
    uri: 'http://localhost:3001/courses',
    cache,
});

function App() {
  return (
    <>
    <ApolloProvider client={client}>
        <Router>
        <Header/>
            <div className="container">
                <Routes>                
                    <Route path="/" element={<Home/>} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    </ApolloProvider>
    </>
  );
}

export default App;