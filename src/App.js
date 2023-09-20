import Navbar1 from './components/navbar'
import Sidebar from './sidebar/Sidebar'

import Todolist from './todo/todo'

import './App.css'
import Calander1 from './cal/Calendar'

function App() {
  return (
    <>
    <Navbar1/>
       <div className='App'>
      
         <Sidebar/>
      </div> 
     <div id="container">
      <section>

{/* cards*/}



      </section>

      <aside className='todo'>

<section>
<Calander1/>
</section>


<section>
<Todolist/>
</section>

      </aside>




     </div>

     
   
      </>
    


   

  )
}

export default App;
