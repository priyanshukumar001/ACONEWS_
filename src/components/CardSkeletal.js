import '../../public/static/css/CardSkeletal.css'

const CardSkeletal = () => {
    return (
        <>
            <div className="card-space" >

                {
                    (new Array(6)).fill(0).map((_, idx) => {
                        return (
                            <div key={idx} className="s-cards cards" >
                                <img className="s-img card-img " />
                                <div className="card-texts">
                                    <h2 className="card-title s-title" ></h2>
                                    <h4 className="card-description s-description"></h4>
                                    <div className="mini-texts">
                                        <p className="card-source"></p>
                                        <p className="card-time"></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>

    )
};

export default CardSkeletal;

