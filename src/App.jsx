import Content from './components/content/Content';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Header from './components/header/Header';

import './styles/App.scss';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className='App'>
      <Header />
      <DndProvider backend={HTML5Backend}>
        <div className='main'>
          <Sidebar />
          <Content />
        </div>
      </DndProvider>
    </div>
  );
}

export default App;
