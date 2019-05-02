import React from 'react';
import ReactWaves from '@dschoon/react-waves';
import cello from './audio/cello.wav';

export default class WavesurferPlugin extends React.Component{
  state = {
    playing: false
  };

  render() {
    return (
      <div className={'container example'}>
      
        <button className="play button" onClick={() => { this.setState({ playing: !this.state.playing }) }}>
          {!this.state.playing ? <button>asdf</button> : <button>stop</button>}
        </button>
        <ReactWaves
          audioFile={cello}
          className={'react-waves'}
          options={{
            barHeight: 2,
            cursorWidth: 0,
            height: 200,
            hideScrollbar: true,
            progressColor: '#EC407A',
            responsive: true,
            waveColor: '#D1D6DA',
          }}
          volume={1}
          zoom={1}
          playing={this.state.playing}
        />
      </div>
    )
  }
}

