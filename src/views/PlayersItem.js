import React, {Component} from 'react'

class PlayersItem extends Component{
    constructor(props) {
        super(props);
        this.handlePlayer = this.handlePlayer.bind(this);
        this.player = props.player;
    }

    handlePlayer(){
        this.props.onClickPlayerItem(this.player)
    }

    render(){
        let sex = "";
        if(this.player.sex === "M" || this.player.sex === "F"){
            sex = "Femme";
            if(this.player.sex === "M") {
                sex = "Homme";
            }
        }
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="card mb-3 mouse-hover" onClick={this.handlePlayer}>
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img src={this.player.picture} className="img-fluid rounded" alt={this.player.shortname + " img"}/>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <div className="card-text"><strong>{this.player.firstname} {this.player.lastname.toUpperCase()}</strong></div>
                                    <div className="card-text">{sex}</div>
                                    <div className="card-text">{this.player.data.age} ans</div>
                                    <div className="card-text">
                                        <img src={this.player.country.picture} width="38" height="30" className="img-fluid rounded" alt={this.player.country.code}/>
                                    </div>
                                    <div className="card-text">
                                        <a href="#">Voir plus</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PlayersItem;