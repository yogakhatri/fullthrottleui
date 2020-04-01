import React, { Component } from 'react'
import MemberDetails from './MemberDetails'


class membersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        let URL = `http://localhost:5000`
        fetch(URL)
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.setState({
                    users: data.members
                })
                console.log(this.state.users)
            })
    }
    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }
            }>
                {
                    this.state.users.map(details => {
                        return <MemberDetails key={details.id} details={details} />
                    })
                }
            </div>
        )
    }
}


// function MemberDetails(props) {
//     return (
//         <div style={{
//             background: 'black',
//             color: 'white',
//             padding: '10px',
//             margin: '5px',
//             width: '50%',
//             cursor: 'pointer',
//             textAlign: 'center'
//         }}
//             onClick={() => }
//         > {props.details.real_name}
//         </div>
//     )
// }
export default membersList