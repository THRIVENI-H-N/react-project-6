import { Link } from "react-router-dom";
import Sandalfirst from "./Sandalfirst";
import Sandalsecond from "./Sandalsecond";
import { mainMusic } from "./MockData";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import { useRef } from "react";

const Music = ()=>{
const navRef = useRef();
const showNavbar=()=>{
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
       <div>
         <span className="vertical">The</span>
            <h1 className="heading">Siren</h1>
             <p className="routes">
             <Link to = "/" className="one">Home</Link>
            <Link to = "/sandalwood"className="one">Sandalwood</Link>
            <Link to = "/music"className="one">Music</Link>
            <Link to = "/literature"className="one">Literature</Link>
            <Link to ="/crops" className="one">Crops</Link>
            <Link to="/food"className="one">Food</Link>
            <button className="btn nav-btn nav-close-btn" onClick={showNavbar}>
            <AiOutlineClose/>
            </button>           
            </p>
            <button className="btn nav-btn" onClick={showNavbar}>
            <AiOutlineMenu/>
            </button>
            <hr className="hr1" />
            <div className="article">
            <p className="sandal">Music</p>
            <hr className="hr3"/>
          </div>
          <div className="box">
            <div className="boxright">

{
                 mainMusic.map((item4,index4)=>{
                    return(
                        <>

                        <Sandalfirst sandalhead={item4.sandalhead } sandalsec={item4.sandalsec} sandaltags={item4.sandaltags} sandalimg={item4.sandalimg}/>
                        </>
                    )
                 })
             } 
{
             mainMusic.map((item4,index4)=>{
                return(
                    <>
                    <Sandalsecond sandalhead={item4.sandalhead } sandalsec={item4.sandalsec} sandaltags={item4.sandaltags} sandalimg={item4.sandalimg}/>
                    </>
                )
             })
}
            <div className="more">
                <div className="arrow1">
                </div>
                <div className="arrowtext">
                <p>LOAD MORE</p>
                </div>
            </div>

              
            </div>
            <div className="boxleftsandal">
               
                <div className="post">
                    <p className="sandaltoptext">Top Posts</p>
                    <hr className="hr5"/>
                </div>
                <div className="toppost">
                    <div className="tt"><br />
                    <h1 className="no1">1</h1>
                    <h3 className="top1text">Music Awards</h3>
                    <span className="travel">music</span>
                    <span className="travel1">/ October 2022</span>
                    </div>
                    <hr className="hr6" />

                   

{
                 mainMusic.map((item4,index4)=>{
                    return(
                        <>

                        <Sandalfirst sandalhead={item4.sandalhead } sandalsec={item4.sandalsec} sandaltags={item4.sandaltags} sandalimg={item4.sandalimg}/>
                        </>
                    )
                 })
             } 

                </div>
                <div className="advertisment">
                  <p className="advertisetext">Advertistement</p>
                </div>
            </div>
         
          </div>
       </div>
    )
}
export default Music;