const {Component} = require("react/cjs/react.production.min");

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
            <div className="card mb-3 mouse-hover" onClick={this.handlePlayer}>
                <div className="row g-0">
                    <div className="col-md-2">
                        <img src={this.player.picture} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{this.player.firstname} {this.player.lastname.toUpperCase()}</h5>
                            <span>{sex}, {this.player.data.age} ans</span>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <img src={this.player.country.picture} width="58" height="50" className="img-fluid rounded-start" alt="..."/>
                    </div>
                </div>
            </div>
        );
    }
}
export default PlayersItem;