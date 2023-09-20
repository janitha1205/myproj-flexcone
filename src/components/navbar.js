import '../components/nvcss.css';

  import "bootstrap/dist/css/bootstrap.min.css";

function navbar(){
return(
    <header>
    <nav className='navi_1'>{/* class for nav */}
        <ul>
            <li>  <img src="/icons/3bar.png" width="20" height="20"/>{/* 3bar icon */}
      </li>
            
            <li id="space2"></li>{/* spacer between 3bar icon and icon next to it */}
             {/* message icon source */}
       <i><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"fill="darkblue" class="bi bi-chat-fill" viewBox="0 0 16 16">
  <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
</svg></i>
 {/* message and notifi icon spacing */}
<li id="space1"></li>
 {/* notifi icon sorce */}
<i><img src="/icons/1.png"/></i>
<li id="space1"></li> {/* prof pic and notifi icon spacing */}
 {/* prof pic icon */}
<i><img className="profile"  src="/icons/tharu.png"/></i>
<li><p className='name-feild'>thushara perera</p>
<p className='cat'>Student</p>
</li>
{/*settings selector icon*/}
<li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></li>
        </ul>
    </nav>
</header>


);



}
export default navbar