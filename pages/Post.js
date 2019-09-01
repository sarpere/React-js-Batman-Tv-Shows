import Layout from '../components/MyLayout.js'
import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { setTvShowsDetails } from '../store'

class Post extends Component {
    render() {
        const data = this.props.tvShows_Details[`${this.props.id}`]
        return (
            data ?
                <Layout>
                    <h1>{data.name}</h1>
                    <div className="Show__Image">
                        <img src={data.image.medium} />
                    </div>
                    <div className="Show__Info">
                        <p>{data.summary.replace(/<[/]?p>/g, '')}</p>
                        <div className="Show__Info__Inner">
                            <div>
                                Premiered {data.premiered}
                            </div>
                            {
                                data.rating.average &&
                                <div>
                                    Rating: {data.rating.average}
                                </div>
                            }

                        </div>
                    </div>
                </Layout> :
                <div className="Error__massage">
                    Not Available Data
            </div>
        )
    }
}


Post.getInitialProps = async function (context) {
    const { store } = context
    const { id } = context.query
    if (store.getState().tvShows_Details)
        if (store.getState().tvShows_Details[`${id}`])
            return {
                id: id
            }
    const res = await axios.get(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.data
    store.dispatch(setTvShowsDetails(id, show))
    return {
        id: id
    }
}
const mapStateToProps = ({ tvShows_Details }) => ({ tvShows_Details })

const mapDispatchToProps = dispatch => {
    return {
        setTvShowsDetails: bindActionCreators(setTvShowsDetails, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post)