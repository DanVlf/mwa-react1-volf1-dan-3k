import './Picture.css';
import logo from '../img/pic.jpg';

function  Picture() {
  return (
    <div className="picture">
        <img src={logo} alt="pic"/>
        <h3>Project title</h3>
        <p>pepegas Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
    </div>
  );
}

export default Picture;