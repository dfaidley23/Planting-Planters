import apple from '../Assets/produce/apple.png';
import basil from '../Assets/produce/basil.png';
import blueberry from '../Assets/produce/blueberry.png';
import cabbage from '../Assets/produce/cabbage.png';
import carrot from '../Assets/produce/carrot.png';
import eggplant from '../Assets/produce/basil.png';
import greenOnion from '../Assets/produce/green onion.png';
import lettuce from '../Assets/produce/lettuce.png';
import mint from '../Assets/produce/mint.png';
import onion from '../Assets/produce/onion.png';
import raspberry from '../Assets/produce/raspberry.png';
import snappea from '../Assets/produce/snappea.png';
import squash from '../Assets/produce/squash.png';
import strawberry from '../Assets/produce/strawberry.png';
import tomato from '../Assets/produce/tomato.png';

const Footer = () => {

const options = {
    1: {img:apple, description:"glossy red apple"},
    2: {img:blueberry, description:"bunch of blueberries"},
    3: {img:basil, description:"Fresh Basil Leaves"},
    4: {img:carrot, description:"Bushel of carrots"},
    5: {img:cabbage, description:"fresh cabbage"},
    6: {img:lettuce, description:"leafy green lettuce"},
    7: {img:eggplant, description:"large purple eggplant"},
    8: {img:mint, description:"bright green mint leaves"},
    9: {img:strawberry, description:"juicy red strawberries"},
    10: {img:tomato, description:"large ripe tomato"},
    11: {img:greenOnion, description:"Freshly picked green onion"},
    12: {img:onion, description:"Pure white fresh onion"},
    13: {img:raspberry, description:"plump red raspberries"},
    14: {img:snappea, description:"crisp snap peas"},
    15: {img:squash, description:"Ripe yellow squash"}
}



var arr = [];
    while(arr.length < 5){
        var r = Math.floor(Math.random() * 15) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }



return(
<>
<div className=" splitterMargin splitter">
</div>
<div className=" pt-5 container-auto translate-middle center">
<div className="">
<h2 className="text-center textWhite">Popular plants!</h2>
</div>

<div className="text-center py-2 textWhite">
<span className="dot">
    <img alt={options[arr[0]].description}src={options[arr[0]].img} className="imgFormat"></img>
</span>
<span className="dot">
    <img alt={options[arr[1]].description}src={options[arr[1]].img} className="imgFormat"></img>
</span>
<span className="dot">
    <img alt={options[arr[2]].description}src={options[arr[2]].img} className="imgFormat"></img>
</span>
<span className="dot">
    <img alt={options[arr[3]].description} src={options[arr[3]].img} className="imgFormat"></img>
</span>
<span className="dot">
    <img alt={options[arr[4]].description}src={options[arr[4]].img} className="imgFormat"></img>
</span>
</div>
</div>

</>
)
};

export default Footer;