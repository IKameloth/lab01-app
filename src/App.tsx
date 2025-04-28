import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { ButtonExample } from './components/ButtonExample';

const App = () => {
  return (
    <ChakraProvider>
      <div className="content">
        <h1>Rsbuild with React</h1>
        <p>Start building amazing things with Rsbuild.</p>
        <ButtonExample />
      </div>
    </ChakraProvider>
  );
};

export default App;
