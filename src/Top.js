import React, { Component } from 'react';
import './Top.css';

class Top extends Component {
    componentDidMount() {
        document.getElementById("content").style.marginBottom = '-101px';
    }

    render() {
        return (
            <React.Fragment>
                <div className="topBack"></div>
                <div className="commentArea updatedArea">
                    <div className="updated">
                        <div className="updatedDate">2019.5.9</div>
                        <div className="updatedText">noteに記事を投稿しました。</div>
                        <iframe class="note-embed" src="https://note.mu/embed/notes/nbc9118e86945" style={{ border: 0, display: 'block', maxWidth: '99%', width: '494px', height: '473px', padding: '0px', margin: '10px 0px', position: 'static', visibility: 'visible' }} height="400" />
                        <script async src="https://note.mu/scripts/embed.js" charset="utf-8"></script>
                    </div>
                </div>
            </ React.Fragment>
        );
    }
}

export default Top;