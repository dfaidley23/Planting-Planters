import garden from '../Assets/Garden.jpeg';


const Home = () => {
    return (
        <>
        <div className="background textWhite">
        <div><h1 id="homeHeader">Welcome!</h1></div>
        <div className="container-fluid justify-content-center background">
        <div className="row align-items-start">
            <div className="col">
                <img className="homeImg" src={garden} alt="A lush green backyard with lots of plants"></img>
            </div>
            <div className="col introStyle px-3">
                <p className="py-2">As the founders of PPP we are all from the Colorado area. In our state weather can be unpredictable, sometimes the mystery of will it snow in late May is fun and other times it's down right frustrating.</p>

                <p className="py-2">I think most of us at one point or another have gone to plant a garden in our backyard, put in a day of work getting it to look nice and then a late snow comes through and kills everything.</p>

                <p className="py-2">As victims of Colorado weather in the past we said enough is enough, we want to make informed decisions about planning our gardens and thus PPP was born. Here to help you plan and maintain a beautfiul garden year round.</p>
            </div>        
        </div>
        </div>
        

        
        
        
        </div>
        </>
    )
};

export default Home;