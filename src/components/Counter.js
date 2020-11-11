//Pertemuan 23 Web Programming:
// import React, {Component} from "react"; 
import React, {useEffect, useState} from "react"; 
// class Counter extends Component{
//    state = {
//    number: 0,
// };

// componentDidMount(){
//     console.log("Komponen di Mount");
// }
// componentDidUpdate(){
//     console.log("Komponen telah di perbarui");
// }
// tambah = () => {
//         this.setState({number: this.state.number + 1});
//     };

// kurang = () => {
//         this.setState.number < 1
//         ? this.setState({number: 0})
//         : this.setState({number: this.state.number - 1});
//     };

//     render(){
//         console.log("Komponen di render");
//         return(
//         <div>
//         <p>{this.props.title}</p>
//         <p>Komponen ini sudah di klik sebanyak {this.state.number} kali</p>
//         <button onClick={this.tambah}>Tambah</button>
//         <button onClick={this.kurang}>Kurang</button>
//         </div>
//      );
//   }
// };
const Counter = (props) => {
    const [number,setNumber] = useState(0);
    const [title,setTitle] = useState("Counter");

    useEffect(() => {
        console.log("Komponen telah di mount");

    }, []);
    const tambah = () => {
        setNumber(number + 1);
    };

    const kurang = () => {
        //setNumber(number - 1);
        number < 1 ? setNumber(0): setNumber(number - 1);
    };

    return(
<   div>
    <p>{title}</p>
    <p>Komponen ini sudah di klik sebanyak {number} kali</p>
    <button onClick={() => tambah (1)}>Tambah</button>
    <button onClick={kurang}>Kurang</button>
    </div>
    );
}
export default Counter;