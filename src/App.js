import logo from './logo.svg';
import './App.css';
import {useState} from "react";
// xoay quanh 1 kn la : component
// 1 function component
// 1 class component
// hooks

// JSX : Javascript XML !!!
// camel case : quy tac dat ten bien : viet thuong chu cai dau tien,
// viet hoa chu cai dau tien cua cac chu tiep theo
// classRoom, teamMate, .....className
// ReastJS ko chay truc tiep tren trinh duyet nhu html/css
// ReactJS phai render / convert /chuyen doi  moi hien thi tren trinh duyet duoc !!!!
// Babel va Webpack
// cach trien khai cac cu phap Javascript trong ReactJS
// tim hieu cu phap cau lenh khi su dung ReactJS.
// duoc lam gi va ko dc lam gi !!!!
// {} : template syntax

// session 4 : Handle Click tren ReactJS


function tinhTong(a, b){
  var tong = a + b;
  return tong
//   Bat buoc phai su dung function co return neu goi no trong JSX
}

//arrow function
const greeting = ()=> "Hello World!"
const totalAB = (a,b) => a + b
// thao tac voi array trong JSX
const fruits = ["apple","banana","grape", "blackberry","coconut","mango","peal"
  ,"melon"]; // su dung map
function demoIf(a){
  if (a > 0){
    return "a la so duong"
  }else {
    return "a la so am hoac = 0"
  }
}
var count = 0;
function App() {
  var name = "HUY"
  var age = 5;
  var add = 10;
  //  toan tu 3 ngoi : short if
  var isLogin = false


  // hooks :
  // 1 seri cac thu vien duoc cung cap boi reactJS
  // bat dau bang chu use !!!!!!!
  // useState : la cau lenh cho phep mo ta 1 bien co "state"
  // useState cho phep khai bao 1 state va 1 phuong thuc setState
  // money la ten bien state
  // setMoney la ham set gia tri cho money
  // 1000 la gia tri ban dau
  const [money,setMoney] = useState(1000);
  const [color,setColor] = useState("red");
  const mau = ["red","yellow","green","blue"];
  //const [index,setIndex] = useState(0);
  // bien state duoc cap nhat thi app se refresh
  // khi state bi update thi App se bi re-render
  const click = ()=>{
    console.log(count)
    setInterval(()=>{
      setColor(getRandomHexColor)
    },100000)
  }

  function getRandomHexColor() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }
  // onClick
  // onChange
  // onMouseEnter , onMouseLeave
  // onKeyPress, onKeyDown, onKeyUp
  // onSubmit

  // onChange
  // viet input nhap username va password
  // sau do lay gia tri hien thi len man hinh
  const [username,setUsername] = useState();
  const [password,setPassword] = useState();
  return (
    //   nested component
    <div className="App">
      <header style={{background: color}} className="App-header">
        <h1>Calculator</h1>
        <input style={{ borderWidth : 10}}  onChange={(event)=>{
          setUsername(event.target.value)
        }}
               placeholder={'Enter the Username'}/>
        <input style={{ borderWidth : 10}}  onChange={(event)=>{
          setPassword(event.target.value)
        }}
               placeholder={'Enter the Password'}/>
        <button style={{ padding : 8}} onClick={()=>{
          // if check nhap trong , valid data !!!
          if (!isNaN(username)  && !isNaN(password)){
            alert(parseFloat(username) + parseFloat(password))
          }else {
            alert('Vui long nhap so vao 2 o input')
          }

        }}>Submit</button>


        <div style={{background: color}}>{money}</div>
        <button onClick={click}>COUNT</button>
        <div>{demoIf(10)}</div>
        <div>{fruits.map((fruit, index) => <div> {index} : {fruit}</div>)}</div>
        <div>{greeting()}</div>
        <div>{totalAB(33, 22)}</div>
        <div>Tong cua 2 so a + b = {tinhTong(5, 3)}</div>
        <img src={logo} className="App-logo" alt="logo"/>
        <div>{name} {age + add}</div>
        <div>{isLogin ? "Welcome HuyNguyen" : "You haven't log in yet"}</div>
        {/*co the viet bieu thuc voi toan tu trong {} */}
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
