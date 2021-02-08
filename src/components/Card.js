import React from 'react';
import './Card.css';
import Puce from '../Images/puce.png';
import Wcs from '../Images/wcs.jpg';
import sans from '../Images/sans-contact.png';

const Card = () => {
    const container = {
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        height: '200px',
        color: '#444',
        marginTop:'20px',
        marginLeft:'20px',
        borderRadius:'20px',
        background:'#EF6C6C'
    }

    const creditCard = {
        fontWeight: '400',
        color:'#F5F5F5',
        marginLeft:'20px', 
        listStyle:'none',
        display:'flex', 
        flexDirection:'column', 
        alignItems:'flex-start', 
        padding:'0'
    }
    const puce = {
        width: '30px',
        height: '30px',
        margin:'20px'
    }
    const Contact = {
        width: '50px',
        height: '50px',
        marginRight:'15px'
    }
    const logo = {
        width: '70px',
        height: '70px',
        fontWeight: '400',
        color:'#F5F5F5',
        marginRight:'15px'
        
    }
    const header = {
        display:'flex',
        fontWeight: '400',
        color:'#F5F5F5',
        margin:'20px'
    }
    const footer = {
        display:'flex',
        justifyContent:'space-between'
   
    }
    const middle = {
        display:'flex',
        justifyContent:'space-between'
   
    }
    return (
        <div style={container}>
            <p style={header}>Wild Code School | French Card</p>

            <div style={middle}>
            <img style={puce} src={Puce} />
            <img style={Contact} src={sans} />
            </div>
           
            <div style={footer}>
            <ul style={creditCard}>
                <li>XXXX XXXX XXXX 1234</li>
                <li>03/21</li>
            </ul>
            <img src={Wcs} style={logo} />
            </div>
            
        </div>
    )
}

export default Card;
