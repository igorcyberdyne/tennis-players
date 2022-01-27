import React from "react";

const PlayersDetails = (props) => {
    let player = props.player;
    return (
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">{player.shortname}</div>
                    <div className="card-body">
                        <div className="row mb-2">
                            <div className="col-md-2">
                                <img src={player.picture} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-10">
                                <div className="card-text">Nom : <strong>{player.lastname.toUpperCase()}</strong></div>
                                <div className="card-text">Prénom : <strong>{player.firstname}</strong></div>
                                <div className="card-text">Sexe : <strong>{player.sex}</strong></div>
                                <div className="card-text">
                                    Pays : <img src={player.country.picture} width="28" height="20" className="img-fluid rounded" alt={player.country.code}/>
                                </div>
                                <div className="card-text">Age : <strong>{player.data.age} ans</strong></div>
                                <div className="card-text">Taille : <strong>{player.data.height} cm</strong></div>
                                <div className="card-text">Poids : <strong>{player.data.weight/1000} Kg</strong></div>
                            </div>
                        </div>
                        <hr />
                        <h4 className="card-title">Performances</h4>
                        <div className="row mb-2">
                            <div className="col-md-12">
                                <div className="card-text">Rang : <strong>{player.data.rank}</strong></div>
                                <div className="card-text">Points : <strong>{player.data.points}</strong></div>
                            </div>
                        </div>
                        <hr />
                        <h4 className="card-title">Statistiques</h4>
                        <div className="row">
                            <div className="col-md-12">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayersDetails;