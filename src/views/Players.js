import PlayersItem from "./PlayersItem";
import React, {Component} from 'react'
import HttpRequest from "../HttpRequest";
import PlayersDetails from "./PlayersDetails";

const datasetApi = "/trainingday/TennisStats/headtohead.json";
class Players extends Component{
     constructor(props) {
         super(props);
         this.handlePlayerItem = this.handlePlayerItem.bind(this);
         this.handleBreadcrumb = this.handleBreadcrumb.bind(this);
         this.state = {
             players: null,
             noData: false,
             isLoadCompleted: false,
             hasAsyncError: true
         };
         this.httpClient = new HttpRequest("https://latelierssl.blob.core.windows.net");
     }

     handlePlayerItem(player){
         this.setState({selectedPlayer: player})
     }
     handleBreadcrumb(event){
         this.setState({selectedPlayer: null})
     }

     render(){
         let component = (<h3>Chargement en cours...</h3>);
         if(this.state.noData){
             component = (<h3>Données non trouvées !</h3>);
         }
         else if(this.state.players){
             let liElement = <li className="breadcrumb-item active" aria-current="page">Players list</li>;
             if(this.state.selectedPlayer){
                 liElement = <>
                     <li className="breadcrumb-item"><a href="#" onClick={this.handleBreadcrumb}>Players list</a></li>
                     <li className="breadcrumb-item active" aria-current="page">Player</li>
                 </>
                 component = <PlayersDetails player={this.state.selectedPlayer}/>;
             }
             else{
                 component = this.state.players.map((player) => {
                     return <PlayersItem onClickPlayerItem={this.handlePlayerItem} key={player.id} player={player}/>
                 });
             }
             component = <>
                 <nav aria-label="breadcrumb">
                     <ol className="breadcrumb players-breadcrumb">
                         {liElement}
                     </ol>
                 </nav>
                 {component}
             </>
         }
         else if(this.state.hasAsyncError){
             component = <div className="alert alert-danger" role="alert">Une erreur est survenue. Veuillez réessayer plus tard !</div>;
         }
         return component;
     }

     componentDidMount() {
         const _self = this;
         this.httpClient.request(datasetApi, "GET").then(function (response){
             let state = {noData: true};
             if(response.hasOwnProperty("players")){
                 state.noData = false;
                 state.players = response.players;
             }
             _self.setState(state);
         }).catch(function (error){
             _self.setState({hasAsyncError: true});
         });
     }

}
 export default Players;