import Layout from '../components/MyLayout.js'
import axios from 'axios'
import Link from 'next/link'
import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { setTvShows } from '../store'
import "../style.sass"
class Index extends Component {
  render() {
    console.log(this.props.tvShows)
    return (
      <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
          {
            this.props.tvShows &&
            this.props.tvShows.map(({ show }) => (
              <li key={show.id}>
                <div className="Show__Image">
                  <Link as={`/Post?id=${show.id}`} href={`/Post?id=${show.id}`}>
                    <img src={show.image.original}></img>
                  </Link>
                </div>
                <div className="Show__Info">
                  <div className="Show__Header">
                    <p className="Show__Title"><Link as={`/Post?id=${show.id}`} href={`/Post?id=${show.id}`}><a className="Text__green">{show.name}</a></Link> </p>
                    <p className="Show__Title__Note"> ( <span className="Text__green">{show.network ? show.network.name : " - "}</span> {show.network && show.premiered && ', ' + show.premiered.split('-')[0]} )</p>
                  </div>
                  {
                    show.genres &&
                    <div className="Show__Card">
                      <div className="Show__Genres">Genres: </div>
                      <div className="Genres">                        {
                          show.genres.map(genre => 
                            <p key={genre}>{genre}</p>
                        )}
                        </div>
                    </div>
                  }
                </div>
              </li>
            ))}
        </ul>
      </Layout>)
  }
}

Index.getInitialProps =

  async function ({ store }) {
    if (store.getState().tvShows) return 0
    const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.data
    store.dispatch(setTvShows(data))
    return {
      data: data
    }
  }
const mapStateToProps = ({ tvShows }) => ({ tvShows })

const mapDispatchToProps = dispatch => {
  return {
    setTvShows: bindActionCreators(setTvShows, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index)