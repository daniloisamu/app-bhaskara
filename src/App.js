import Myheader from './Myheader';
import Content from './Content';

//Parte principal do código, onde o software envia a interface gráfica para o usuário


function App() {  
//div class name app: tudo o que aparecer para o usuario deve aparecer nessa classe
//content: tags do conteudo
  return (
    <div className="App"> 
      <Myheader />

      <Content > 
        
      </Content>
      <div className="content">

      </div>
    </div>
  );
}

export default App;
