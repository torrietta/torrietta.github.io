import React from 'react';
import './App.less';
import MainPage from "./pages/Main/MainLayout/MainLayout";
import Button from 'antd/es/button';
function App() {
  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <MainPage />
    </div>
  );
}

export default App;
