import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTeam, deleteTeam } from '../actions/teams/teamActions'
import { deleteTransfer } from '../actions/transfers/transferActions'
import { Link } from 'react-router-dom'
import Team from '../components/teams/Team'

class TeamContainer extends Component {

    componentDidMount() {
        const teamId = this.props.match.params.teamID
        this.props.fetchTeam(teamId)
    }

    renderPlayers() {
        const theTeam = this.props.teams.teams
        console.log(theTeam.id)
        console.log(theTeam.players)
        if (theTeam.players !== undefined && theTeam.players.length === 0) {
            return <div>
                <h4>This Team Currently Has No Players</h4>
                <Link to={{pathname: `/teams/${theTeam.id}/transfer`, team: theTeam }  }>
                    <button>Add Player to {theTeam.name}</button>
                </Link>
            </div>
            
        } else if (theTeam.players !== undefined && theTeam.players.length > 0) {
            return <div>
                <h3>Players</h3>
                <h4>Forwards</h4>
                {theTeam.players.map((player, i) => {
                    if (player.position === 'Forward') {
                        return <div key={i}>
                            <h3>{player.name}</h3>
                            {player.transfers.map(transfer => {
                                if (transfer.team_id === theTeam.id) {
                                    return <button 
                                    onClick={() => {this.props.deleteTransfer(transfer.id); this.props.history.push(`/teams/${theTeam.id}`)} }>
                                        Remove {player.name}
                                    </button>
                                } 
                            })}
                        </div>
                }})}
                <h4>Midfielders</h4>
                {theTeam.players.map((player, i) => {
                    if (player.position === 'Midfielder') {
                        return <div key={i}>
                            <h3>{player.name}</h3>
                        </div>
                }})}
                <h4>Defenders</h4>
                {theTeam.players.map((player, i) => {
                    if (player.position === 'Defender') {
                        return <div key={i}>
                            <h3>{player.name}</h3>
                        </div>
                }})}
                <h4>Goalkeeper</h4>
                {theTeam.players.map((player, i) => {
                    if (player.position === 'Goalkeeper') {
                        return <div key={i}>
                            <h3>{player.name}</h3>
                        </div>
                }})}

            <Link to={{pathname: `/teams/${theTeam.id}/transfer`, team: theTeam }  }>
                        <button>Add Player to {theTeam.name}</button>
            </Link>
            </div>
        }
    }

    renderTeam() {
        const theTeam = this.props.teams.teams
            return <div>
                <h2>{theTeam.name}</h2>
                <h3>{theTeam.formation}</h3>
                <h4>{theTeam.name} has ${theTeam.salary_cap} remaining salary cap balance.</h4>
                <button onClick={() => {this.props.deleteTeam(theTeam.id); this.props.history.push('/teams')} }>Delete {theTeam.name}</button>
                <Link to={{pathname: `/teams/${theTeam.id}/edit`, team: theTeam }  }>
                        <button>Edit {theTeam.name}</button>
                </Link>
            </div>
    }

    render() {
        return (
            <div>
                <Team props={this.props} renderTeam={this.renderTeam} renderPlayers={this.renderPlayers} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {teams: state.teams}
}

export default connect(mapStateToProps, { fetchTeam, deleteTeam, deleteTransfer })(TeamContainer)